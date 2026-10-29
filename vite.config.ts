import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { basePath, buildDate, siteUrl } from './scripts/env.ts';

export default defineConfig({
	// GitHub Pages serves the site under /<repo>/; local builds use the root.
	base: `${basePath}/`,
	plugins: [tailwindcss(), reactRouter()],
	define: {
		// Vacancy status is decided once per build, so the prerendered HTML and
		// the hydrated client always agree. The daily scheduled rebuild moves it.
		__BUILD_DATE__: JSON.stringify(buildDate),
		__SITE_URL__: JSON.stringify(siteUrl)
	},
	build: {
		// No inline data: URIs for assets, so img-src can stay 'self' only.
		assetsInlineLimit: 0
	}
});
