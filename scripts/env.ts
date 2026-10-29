/**
 * Build-time environment shared by Vite, React Router and the build scripts.
 *
 * CI passes unset secrets and variables as empty strings, so a blank value
 * always means "use the default".
 */
function clean(value: string | undefined): string {
	return typeof value === 'string' ? value.trim() : '';
}

/** '' locally; '/IRRIC_Website' (derived from the repo name in CI) on GitHub Pages. */
export const basePath = clean(process.env.BASE_PATH).replace(/\/+$/, '');

/** YYYY-MM-DD in Asia/Dhaka, the timezone every vacancy deadline is written in. */
export const buildDate =
	clean(process.env.BUILD_DATE) ||
	new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dhaka', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

if (!/^\d{4}-\d{2}-\d{2}$/.test(buildDate)) {
	throw new Error(`BUILD_DATE must be YYYY-MM-DD, got "${buildDate}"`);
}
if (basePath && !/^\/[A-Za-z0-9._-]+$/.test(basePath)) {
	throw new Error(`BASE_PATH must look like "/repo-name", got "${basePath}"`);
}

/** Canonical origin + base path, no trailing slash. */
export const siteUrl = (clean(process.env.SITE_URL) || `https://meteorboyf.github.io${basePath}`).replace(/\/+$/, '');
if (!/^https:\/\/[^/\s]+(\/[A-Za-z0-9._-]+)*$/.test(siteUrl)) {
	throw new Error(`SITE_URL must be an https origin with an optional path, got "${siteUrl}"`);
}
