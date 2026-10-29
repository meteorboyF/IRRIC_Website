import type { Config } from '@react-router/dev/config';
import { writeFileSync, mkdirSync } from 'node:fs';
import { projects } from './src/data/projects.ts';
import { vacancies } from './src/data/vacancies.ts';
import { basePath } from './scripts/env.ts';

/** Every route, prerendered to its own index.html. Dynamic slugs come from the data. */
const routes = [
	'/',
	'/about/',
	'/about/people/',
	'/projects/',
	...projects.map((project) => `/projects/${project.slug}/`),
	'/programmes/',
	'/careers/',
	...vacancies.map((vacancy) => `/careers/${vacancy.slug}/`),
	'/news/',
	'/partners/',
	'/contact/',
	'/privacy/',
	'/terms/',
	'/cookies/',
	'/404/'
];

export default {
	appDirectory: 'src',
	// Static HTML only: no server at runtime, and no SPA fallback. Unknown URLs
	// get the prerendered 404 page (copied to 404.html by scripts/postbuild.mjs).
	ssr: false,
	basename: `${basePath}/`,
	async prerender() {
		mkdirSync('build', { recursive: true });
		// The link checker confirms each of these produced an index.html.
		writeFileSync('build/routes.json', JSON.stringify(routes.filter((route) => route !== '/404/')));
		// The runtime matches prerendered paths without a trailing slash; a
		// trailing slash here would make it serve the SPA shell instead of the
		// page. Output files are still <path>/index.html, served at <path>/.
		return routes.map((route) => (route === '/' ? route : route.replace(/\/$/, '')));
	}
} satisfies Config;
