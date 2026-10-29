/**
 * Minimal static server for previewing build/client locally. It behaves like
 * GitHub Pages: directory URLs serve index.html, slash-less directory URLs
 * redirect, unknown paths get 404.html. Respects BASE_PATH.
 * Local preview only; production uses GitHub Pages or nginx.
 */
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const root = resolve('build/client');
const base = (process.env.BASE_PATH ?? '').replace(/\/+$/, '');
const port = Number(process.env.PORT ?? 4173);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain' };

createServer((req, res) => {
	let path = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
	if (base) {
		if (!path.startsWith(base)) {
			res.writeHead(302, { Location: `${base}/` }).end();
			return;
		}
		path = path.slice(base.length) || '/';
	}
	const file = normalize(join(root, path));
	if (file !== root && !file.startsWith(root + sep)) {
		res.writeHead(400).end();
		return;
	}
	let target = file;
	if (existsSync(target) && statSync(target).isDirectory()) {
		if (!path.endsWith('/')) {
			res.writeHead(301, { Location: `${base}${path}/` }).end();
			return;
		}
		target = join(target, 'index.html');
	}
	let status = 200;
	if (!existsSync(target)) {
		target = join(root, '404.html');
		status = 404;
	}
	res.writeHead(status, { 'Content-Type': types[extname(target)] ?? 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
	createReadStream(target).pipe(res);
}).listen(port, () => console.log(`Serving ${root} at http://localhost:${port}${base}/`));
