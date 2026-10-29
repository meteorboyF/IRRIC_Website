// Runs before first paint and before React. Loaded as a file, not inline,
// so the CSP needs no hash for it.

// 1. Scroll-reveal content starts hidden only when JavaScript is present to
//    reveal it (see .js .reveal in app.css).
document.documentElement.classList.add('js');

// 2. Trusted Types. The CSP sets `require-trusted-types-for 'script'` and
//    `trusted-types default`, so every HTML sink needs this policy's say-so.
//    It allows exactly two strings and rejects everything else:
//    - '<script></script>': the constant React DOM assigns to innerHTML to
//      create an inert <script> element during client-side rendering;
//    - schema.org JSON-LD from src/components/JsonLd.tsx, which is
//      JSON.stringify output with every "<" escaped, so it cannot contain
//      markup.
//    It also allows script URLs that are this site's own .js files under
//    its base path (what React Router loads), which matters only if React
//    ever re-creates a <script src> element on the client.
if (window.trustedTypes && window.trustedTypes.createPolicy) {
	var base = new URL('.', document.currentScript ? document.currentScript.src : location.href).href;
	window.trustedTypes.createPolicy('default', {
		createHTML: function (value) {
			if (typeof value !== 'string') return null;
			if (value === '<script></script>') return value;
			if (value.indexOf('{"@context":"https://schema.org"') === 0 && value.indexOf('<') === -1) return value;
			return null;
		},
		createScriptURL: function (value) {
			if (typeof value !== 'string') return null;
			var url;
			try {
				url = new URL(value, location.href);
			} catch {
				return null;
			}
			return url.href.indexOf(base) === 0 && /\.js$/.test(url.pathname) && !url.search && !url.hash ? url.href : null;
		}
	});
}
