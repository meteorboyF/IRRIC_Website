/**
 * Post-build hardening and housekeeping for static hosting.
 *
 *  1. Per-page Content Security Policy. Every inline <script> React Router
 *     emits (the hydration context, the module bootstrap, scroll
 *     restoration) is hashed with SHA-256 and only those hashes are allowed,
 *     so script-src never needs 'unsafe-inline'. The policy is injected as
 *     the first element of <head>, ahead of every script it governs.
 *  2. 404.html for GitHub Pages, copied from the prerendered /404/ page.
 *  3. sitemap.xml and robots.txt, derived from the pages actually built.
 *  4. .nojekyll, and removal of the SPA fallback this site never serves.
 *
 * GitHub Pages cannot send response headers, so frame-ancestors (ignored in
 * a <meta> policy) and X-Frame-Options are only enforced by the Docker/nginx
 * deployment. See nginx.conf.
 */
import { createHash } from 'node:crypto';
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync, copyFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const client = join(root, 'build', 'client');
const basePath = (process.env.BASE_PATH ?? '').trim().replace(/\/+$/, '');
const siteUrl = ((process.env.SITE_URL ?? '').trim() || `https://meteorboyf.github.io${basePath}`).replace(/\/+$/, '');

if (!existsSync(client)) {
	console.error('postbuild: build/client not found. Run react-router build first.');
	process.exit(1);
}

// With a basename, React Router writes prerendered HTML under
// build/client/<base>/ while assets stay at build/client/. The Pages artifact
// is served *at* the base path, so lift the HTML tree to the root.
if (basePath) {
	const nested = join(client, basePath.replace(/^\//, ''));
	if (existsSync(nested)) {
		cpSync(nested, client, { recursive: true });
		rmSync(nested, { recursive: true, force: true });
		console.log(`postbuild: moved prerendered pages from ${basePath}/ to the artifact root`);
	}
}

/** Directives shared by every page; script hashes are appended per page. */
const BASE_POLICY = {
	'default-src': ["'self'"],
	'script-src': ["'self'"],
	'style-src': ["'self'"],
	'img-src': ["'self'", 'data:'],
	'font-src': ["'self'"],
	'connect-src': ["'self'", 'https://api.emailjs.com'],
	'object-src': ["'none'"],
	'base-uri': ["'self'"],
	// Forms are sent with fetch(), never a native POST.
	'form-action': ["'none'"],
	'manifest-src': ["'self'"],
	'worker-src': ["'none'"],
	'frame-src': ["'none'"],
	'upgrade-insecure-requests': [],
	// Trusted Types: only the narrow `default` policy in public/boot.js exists.
	'require-trusted-types-for': ["'script'"],
	'trusted-types': ['default']
};

function walk(dir, out = []) {
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) walk(path, out);
		else if (entry.endsWith('.html')) out.push(path);
	}
	return out;
}

const sha256 = (text) => `'sha256-${createHash('sha256').update(text, 'utf8').digest('base64')}'`;

const SCRIPT_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const STYLE_RE = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
const STYLE_ATTR_RE = /<[^>]+\sstyle\s*=\s*["'][^"']*["']/i;

function policyFor(html, file) {
	const scriptHashes = new Set();
	for (const [, attrs, body] of html.matchAll(SCRIPT_RE)) {
		if (/\bsrc\s*=/.test(attrs)) continue;
		// JSON-LD is data, not executed, so it needs no hash.
		if (/type\s*=\s*["']application\/ld\+json["']/i.test(attrs)) continue;
		scriptHashes.add(sha256(body));
	}
	const styleHashes = new Set([...html.matchAll(STYLE_RE)].map(([, body]) => sha256(body)));
	if (STYLE_ATTR_RE.test(html)) {
		throw new Error(`${file}: inline style attribute found; style-src has no 'unsafe-inline'.`);
	}

	const policy = structuredClone(BASE_POLICY);
	policy['script-src'].push(...scriptHashes);
	policy['style-src'].push(...styleHashes);
	return Object.entries(policy)
		.map(([name, values]) => [name, ...values].join(' '))
		.join('; ');
}

// React Router writes this for SPA mode; every route here is prerendered.
rmSync(join(client, '__spa-fallback.html'), { force: true });

const pages = walk(client);
/** Per-page header policies for nginx (Docker), keyed by request URI. */
const headerPolicies = new Map();
let hashed = 0;
for (const file of pages) {
	const html = readFileSync(file, 'utf8');
	if (html.includes('http-equiv="Content-Security-Policy"')) {
		throw new Error(`${file}: already has a CSP meta tag (postbuild ran twice?)`);
	}
	const csp = policyFor(html, relative(client, file));
	const meta = `<meta http-equiv="Content-Security-Policy" content="${csp}">`;
	const next = html.replace(/<head>/i, `<head>${meta}`);
	if (next === html) throw new Error(`${file}: no <head> to inject the CSP into`);
	writeFileSync(file, next);
	hashed++;
	const uri = `/${relative(client, file).split(sep).join('/')}`;
	headerPolicies.set(uri, csp);
	if (uri.endsWith('/index.html')) headerPolicies.set(uri.slice(0, -'index.html'.length), csp);
}
console.log(`postbuild: injected hashed CSP into ${hashed} pages`);

const notFound = join(client, '404', 'index.html');
if (!existsSync(notFound)) throw new Error('postbuild: /404/ was not prerendered');
copyFileSync(notFound, join(client, '404.html'));
headerPolicies.set('/404.html', headerPolicies.get('/404/index.html'));
console.log('postbuild: wrote 404.html');

// nginx map for the Docker image. Headers can carry what a <meta> policy
// cannot: frame-ancestors. Non-HTML responses get the hash-free policy.
const withFrames = (csp) => `${csp}; frame-ancestors 'none'`;
const strictDefault = withFrames(Object.entries(BASE_POLICY).map(([name, values]) => [name, ...values].join(' ')).join('; '));
const mapLines = [...headerPolicies].map(([uri, csp]) => `    "${uri}" "${withFrames(csp)}";`);
writeFileSync(
	join(root, 'build', 'nginx-csp-map.conf'),
	`# Generated by scripts/postbuild.mjs. Do not edit.\nmap $uri $page_csp {\n    default "${strictDefault}";\n${mapLines.join('\n')}\n}\n`
);
console.log(`postbuild: wrote nginx CSP map (${headerPolicies.size} entries)`);

// Sitemap from the pages that exist, minus the error page.
const urls = walk(client)
	.map((file) => relative(client, file).split(sep).join('/'))
	.filter((path) => path.endsWith('index.html') && !path.startsWith('404'))
	.map((path) => `/${path.replace(/index\.html$/, '')}`)
	.sort();
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `\t<url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(client, 'sitemap.xml'), sitemap);
writeFileSync(join(client, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`postbuild: wrote sitemap.xml (${urls.length} URLs) and robots.txt`);

writeFileSync(join(client, '.nojekyll'), '');
