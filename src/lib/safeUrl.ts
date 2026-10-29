/**
 * Allow-list for any href or src that comes from data.
 *
 * Only https:, mailto:, tel: and same-origin paths pass. Everything else
 * (javascript:, data:, http:, protocol-relative //host, malformed input)
 * returns null, and callers drop the link or image entirely.
 */
const SCHEMES = new Set(['https:', 'mailto:', 'tel:']);

export function safeUrl(raw: string | null | undefined): string | null {
	if (typeof raw !== 'string') return null;
	const value = raw.trim();
	// Control characters and whitespace never belong in a URL we publish.
	// eslint-disable-next-line no-control-regex -- rejecting control characters is the point
	if (value === '' || /[\u0000-\u0020\u007F]/.test(value)) return null;

	// Same-origin path: a single leading slash, never "//" or "/\".
	if (value.startsWith('/')) {
		return /^\/(?![/\\])/.test(value) ? value : null;
	}

	let parsed: URL;
	try {
		parsed = new URL(value);
	} catch {
		return null;
	}
	if (!SCHEMES.has(parsed.protocol)) return null;
	if (parsed.protocol === 'https:' && (parsed.username || parsed.password)) return null;
	return parsed.href;
}

/** True for absolute https links, which open in a new tab. */
export function isExternal(url: string): boolean {
	return /^https:\/\//i.test(url);
}
