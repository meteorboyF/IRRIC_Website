/**
 * Security self-test for the helpers every page relies on. Runs in CI
 * before the build; any failure fails the build.
 *
 *  - safeUrl: only https:, mailto:, tel: and same-origin paths survive.
 *  - buildTemplateParams: header-bound values are single-line, field
 *    labels cannot overwrite reserved parameters or the prototype, and no
 *    recipient parameter is ever sent.
 *  - JSON-LD escaping: no payload can close the <script> element.
 *  - Vacancy status: deadlines are inclusive, a missing deadline is closed.
 */
import { buildTemplateParams, cleanLine, isValidEmail, isValidPhone } from '../src/lib/forms.ts';
import { safeUrl } from '../src/lib/safeUrl.ts';
import { isOpen } from '../src/data/vacancies.ts';
import type { Vacancy } from '../src/data/types.ts';

let failures = 0;
function check(name: string, ok: boolean) {
	if (!ok) {
		failures++;
		console.error(`  FAIL ${name}`);
	}
}

// ---- safeUrl ----
const allowed = ['https://example.org/a?b=c', 'mailto:iriic.uiu@gmail.com', 'tel:+8809604848848', '/projects/cmed/', '/careers/?topic=careers'];
const refused = [
	'javascript:alert(1)',
	' JavaScript:alert(1)',
	'java\tscript:alert(1)',
	'data:text/html,<script>alert(1)</script>',
	'vbscript:msgbox(1)',
	'http://example.org',
	'//evil.example',
	'/\\evil.example',
	'https://user:pass@example.org',
	'https://exa mple.org',
	'file:///etc/passwd',
	'',
	'   '
];
for (const url of allowed) check(`safeUrl allows ${url}`, safeUrl(url) !== null);
for (const url of refused) check(`safeUrl refuses ${JSON.stringify(url)}`, safeUrl(url) === null);

// ---- header-bound values ----
check('cleanLine removes CR/LF', !/[\r\n]/.test(cleanLine('a\r\nBcc: x@y.z\nTo: q', 200)));
check('cleanLine removes U+2028', !cleanLine('a\u2028b', 200).includes('\u2028'));
check('isValidEmail refuses header injection', !isValidEmail('a@b.co\r\nBcc: x@y.z'));
check('isValidEmail refuses spaces', !isValidEmail('a b@c.org'));
check('isValidEmail accepts a normal address', isValidEmail('name@example.com'));
check('isValidPhone accepts Bangladeshi numbers', isValidPhone('+880 1712-345678') && isValidPhone('09604 848848'));
check('isValidPhone refuses letters', !isValidPhone('call me maybe'));

const params = buildTemplateParams({
	subject: 'Website enquiry\r\nBcc: attacker@example.com',
	name: 'Name\nBcc: attacker@example.com',
	email: 'person@example.com',
	phone: '0123456789',
	fields: [
		['Message', 'Real message'],
		['Subject', 'Overwritten subject'],
		['Reply to', 'attacker@example.com'],
		['To email', 'attacker@example.com'],
		['__proto__', 'polluted'],
		['constructor', 'polluted'],
		['Organisation', 'UIU']
	]
});
check('no recipient parameter is sent', !('to_email' in params) && !('to_name' in params) && !('cc' in params) && !('bcc' in params));
check('subject is a single line', !/[\r\n]/.test(params.subject ?? ''));
check('from_name is a single line', !/[\r\n]/.test(params.from_name ?? ''));
check('reply_to is the sender', params.reply_to === 'person@example.com');
check('"Message" field does not replace the composed body', (params.message ?? '').startsWith('Website enquiry') && (params.message ?? '').includes('Real message'));
check('"Subject" field does not overwrite subject', !params.subject?.includes('Overwritten'));
check('prototype is not polluted', ({} as Record<string, unknown>).polluted === undefined && Object.getPrototypeOf(params) === Object.prototype);
check('ordinary fields pass through', params.organisation === 'UIU');

// ---- JSON-LD escaping (same expression as src/components/JsonLd.tsx) ----
const payload = JSON.stringify({ name: '</script><script>alert(1)</script>', note: '\u2028' }).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
check('JSON-LD cannot close the script element', !payload.includes('<'));
check('JSON-LD stays valid JSON', JSON.parse(payload).name === '</script><script>alert(1)</script>');

// ---- vacancy status ----
const role = { deadline: '2026-11-05' } as Vacancy;
check('open on the deadline day', isOpen(role, '2026-11-05'));
check('closed the day after', !isOpen(role, '2026-11-06'));
check('no deadline is never shown as open', !isOpen({ deadline: null } as Vacancy, '2026-01-01'));

if (failures) {
	console.error(`security-selftest: ${failures} failure(s)`);
	process.exit(1);
}
console.log('security-selftest: all checks passed');
