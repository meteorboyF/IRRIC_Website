/**
 * Structured data as <script type="application/ld+json">. The only use of
 * dangerouslySetInnerHTML in the codebase: the payload is JSON.stringify of
 * typed data, with "<" escaped so no string can close the script element.
 * It is not executed, so the CSP needs no hash for it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
	const json = JSON.stringify(data).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
	// eslint-disable-next-line react/no-danger
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
