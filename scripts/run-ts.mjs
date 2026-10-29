/**
 * Runs a TypeScript build script through Vite's module runner, so scripts
 * share the app's data modules without a separate TS loader dependency and
 * work on Node builds compiled without type stripping.
 */
import { runnerImport } from 'vite';
import { resolve } from 'node:path';

const file = process.argv[2];
if (!file) {
	console.error('usage: node scripts/run-ts.mjs <script.ts>');
	process.exit(1);
}
// Same build-time constants the app gets from vite.config.ts.
const { buildDate, siteUrl } = (await runnerImport(resolve('scripts/env.ts'), { configFile: false, logLevel: 'warn' })).module;
await runnerImport(resolve(file), {
	configFile: false,
	logLevel: 'warn',
	define: { __BUILD_DATE__: JSON.stringify(buildDate), __SITE_URL__: JSON.stringify(siteUrl) }
});
