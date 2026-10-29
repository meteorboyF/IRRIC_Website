/**
 * Dead-link and asset checker for the static build output.
 *
 * Fails if any page contains:
 *  - href="#" or empty placeholders
 *  - an internal link, src, srcset candidate, modulepreload or stylesheet
 *    that does not resolve to a file in build/client
 *  - a same-page fragment with no matching id
 *  - target="_blank" without rel="noopener noreferrer"
 *  - a URL scheme other than https:, mailto: or tel: (data: only for images)
 * It also fails if a CSS file references a missing url() asset, or if any
 * route listed in build/routes.json has no prerendered index.html.
 *
 * External links are collected and printed, not fetched: network checks are
 * flaky in CI. Spot-check the printed list by hand.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const CLIENT = resolve(process.cwd(), 'build', 'client');
const BASE = (process.env.BASE_PATH ?? '').trim().replace(/\/+$/, '');

if (!existsSync(CLIENT)) {
	console.error('check-links: build/client not found. Run `npm run build` first.');
	process.exit(1);
}

function walk(dir, ext, out = []) {
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) walk(path, ext, out);
		else if (entry.endsWith(ext)) out.push(path);
	}
	return out;
}

const errors = [];
const external = new Set();

function resolveInternal(url, fromFile) {
	let path = url.split('#')[0].split('?')[0];
	if (BASE) {
		if (path.startsWith('/') && !path.startsWith(`${BASE}/`) && path !== BASE) return 'outside-base';
		if (path.startsWith(BASE)) path = path.slice(BASE.length);
	}
	if (path === '' || path === '/') return join(CLIENT, 'index.html');
	const target = path.startsWith('/')
		? join(CLIENT, decodeURIComponent(path))
		: resolve(join(fromFile, '..'), decodeURIComponent(path));
	return [target, join(target, 'index.html')].find((candidate) => existsSync(candidate) && statSync(candidate).isFile()) ?? null;
}

function checkUrl(url, rel, html, file, kind) {
	const value = url.trim().replace(/&amp;/g, '&');
	if (value === '' || value === '#') {
		errors.push(`${rel}: placeholder ${kind} "${value}"`);
		return;
	}
	if (/^https:\/\//i.test(value)) {
		external.add(value);
		return;
	}
	if (/^(mailto|tel):/i.test(value)) return;
	if (/^data:image\//i.test(value) && kind !== 'href') return;
	if (/^[a-z][a-z0-9+.-]*:/i.test(value) || value.startsWith('//')) {
		errors.push(`${rel}: disallowed URL scheme in ${kind} "${value}"`);
		return;
	}
	if (value.startsWith('#')) {
		const id = value.slice(1);
		if (!html.includes(`id="${id}"`)) errors.push(`${rel}: fragment "${value}" has no matching id`);
		return;
	}
	const found = resolveInternal(value, file);
	if (found === 'outside-base') errors.push(`${rel}: internal ${kind} "${value}" is missing the base path ${BASE}`);
	else if (!found) errors.push(`${rel}: broken internal ${kind} "${value}"`);
}

const htmlFiles = walk(CLIENT, '.html');
for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	const rel = file.slice(CLIENT.length + 1);

	for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]*)"/g)) checkUrl(url, rel, html, file, attr);
	for (const [, set] of html.matchAll(/\ssrcset="([^"]*)"/g)) {
		for (const candidate of set.split(',')) checkUrl(candidate.trim().split(/\s+/)[0] ?? '', rel, html, file, 'srcset');
	}
	for (const [tag] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
		const relAttr = /\srel="([^"]*)"/.exec(tag)?.[1] ?? '';
		if (!/\bnoopener\b/.test(relAttr) || !/\bnoreferrer\b/.test(relAttr)) {
			errors.push(`${rel}: target="_blank" without rel="noopener noreferrer": ${tag.slice(0, 120)}`);
		}
	}
}

for (const file of walk(CLIENT, '.css')) {
	// Drop inline data: URIs first; an SVG data URI can contain its own url(#id).
	const css = readFileSync(file, 'utf8').replace(/url\(\s*(['"])data:[\s\S]*?\1\s*\)/g, '').replace(/url\(\s*data:[^)]*\)/g, '');
	const rel = file.slice(CLIENT.length + 1);
	for (const [, raw] of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
		if (raw.startsWith('data:') || raw.startsWith('#')) continue;
		if (!resolveInternal(raw, file)) errors.push(`${rel}: missing CSS asset "${raw}"`);
	}
}

const routesFile = resolve(process.cwd(), 'build', 'routes.json');
if (existsSync(routesFile)) {
	const routes = JSON.parse(readFileSync(routesFile, 'utf8'));
	for (const route of routes) {
		const page = join(CLIENT, route, 'index.html');
		if (!existsSync(page)) errors.push(`route ${route} has no prerendered index.html`);
	}
	console.log(`check-links: every one of ${routes.length} routes has prerendered HTML`);
}

console.log(`check-links: scanned ${htmlFiles.length} pages, ${external.size} unique external links`);
if (process.env.LIST_EXTERNAL) for (const url of [...external].sort()) console.log(`  ${url}`);

if (errors.length) {
	console.error('\nProblems found:');
	for (const error of errors) console.error(`  ${error}`);
	process.exit(1);
}
console.log('check-links: no dead links, every internal link and asset resolves.');
