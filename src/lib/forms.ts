import { CONTACT_EMAIL, EMAILJS_ENDPOINT, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, FORMS_ENABLED } from './config';

/**
 * Enquiry delivery through EmailJS's REST API (no SDK).
 *
 * The EmailJS template is deliberately simple: To is a fixed address,
 * Reply-To is {{reply_to}}, Subject is {{subject}} and the body is
 * {{message}}. So `message` carries every field as labelled lines, and the
 * email is complete even if the template never changes. Field values are
 * also sent individually so a richer template could use them later, but a
 * field-derived key can never overwrite a reserved parameter.
 *
 * No `to_email` parameter is sent: the recipient lives only in the
 * template, so a tampered request cannot redirect mail.
 */

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/** A labelled line in the email body, e.g. ['Organisation', 'UIU']. */
export type EnquiryField = [label: string, value: string];

/** Parameters the template relies on. Field-derived keys may not use these. */
export const RESERVED_PARAMS = new Set(['subject', 'message', 'reply_to', 'from_name', 'from_email', 'to_email', 'to_name', 'cc', 'bcc', 'service_id', 'template_id', 'user_id', 'accessToken', 'g-recaptcha-response']);

/** Length caps, enforced in the inputs and again here. */
export const LIMITS = { name: 100, email: 254, phone: 32, organisation: 150, message: 3000 } as const;

/** Seconds a person must spend on the form before it will send. */
export const MIN_FILL_SECONDS = 3;
/** Seconds after a successful or failed send before another is accepted. */
export const COOLDOWN_SECONDS = 60;

// In memory only: the site promises no cookies or browser storage.
let lastSendAt = 0;

/** Body text: newlines are meaningful, so only normalise, trim and cap. */
export function cleanBody(value: string, max: number): string {
	return value
		.replace(/\r\n?/g, '\n')
		// eslint-disable-next-line no-control-regex -- stripping control characters is the point
		.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
		.trim()
		.slice(0, max);
}

/**
 * Anything that could reach an email header (name, subject, reply-to,
 * phone) is flattened to a single line: every control character, including
 * CR and LF, becomes a space. This keeps header injection unreachable even
 * if the template is rewired to use these values in headers.
 */
export function cleanLine(value: string, max: number): string {
	return value
		// eslint-disable-next-line no-control-regex -- flattening control characters is the point
		.replace(/[\u0000-\u001F\u007F\u2028\u2029]+/g, ' ')
		.replace(/\s{2,}/g, ' ')
		.trim()
		.slice(0, max);
}

export function isValidEmail(email: string): boolean {
	const value = email.trim();
	return value.length <= LIMITS.email && /^[^\s@<>()[\]\\,;:"]{1,64}@[^\s@<>()[\]\\,;:"]{1,253}\.[A-Za-z]{2,24}$/.test(value);
}

/** Optional: empty passes; otherwise 6 to 20 digits with common separators. */
export function isValidPhone(phone: string): boolean {
	const value = phone.trim();
	if (!value) return true;
	const digits = value.replace(/\D/g, '');
	return /^[+()\d][\d\s()+-]{5,30}$/.test(value) && digits.length >= 6 && digits.length <= 20;
}

/** Remaining cooldown in whole seconds (0 when free to send). */
export function cooldownRemaining(now = Date.now()): number {
	if (lastSendAt === 0) return 0;
	return Math.max(0, Math.ceil((lastSendAt + COOLDOWN_SECONDS * 1000 - now) / 1000));
}

function startCooldown(now = Date.now()) {
	lastSendAt = now;
}

/** Build the request body. Exported for tests and for inspection in the browser. */
export function buildTemplateParams(options: { subject: string; name: string; email: string; phone?: string; fields: EnquiryField[] }): Record<string, string> {
	const subject = cleanLine(options.subject, 150);
	const name = cleanLine(options.name, LIMITS.name);
	const email = cleanLine(options.email, LIMITS.email);
	const phone = cleanLine(options.phone ?? '', LIMITS.phone);
	const present = options.fields.map(([label, value]) => [cleanLine(label, 60), cleanBody(value, LIMITS.message)] as const).filter(([, value]) => value.length > 0);

	const body = [
		subject,
		'',
		`Name: ${name}`,
		`Email: ${email}`,
		...(phone ? [`Phone: ${phone}`] : []),
		...present.map(([label, value]) => (value.includes('\n') ? `${label}:\n${value}` : `${label}: ${value}`)),
		'',
		'Sent from the contact form on the IRIIC website.'
	].join('\n');

	// A null prototype means keys like "__proto__" or "constructor" are plain data.
	const params: Record<string, string> = Object.assign(Object.create(null) as Record<string, string>, {
		subject,
		message: body,
		reply_to: email,
		from_name: name,
		from_email: email
	});
	if (phone) params.phone = phone;
	for (const [label, value] of present) {
		// "Enquiry type" -> enquiry_type. Never overwrite a reserved or existing key:
		// a field labelled "Message" must not replace the composed body.
		const key = label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
		if (!key || RESERVED_PARAMS.has(key) || Object.prototype.hasOwnProperty.call(params, key)) continue;
		params[key] = value;
	}
	return { ...params };
}

export type SendResult = 'sent' | 'blocked' | 'too-fast' | 'cooldown' | 'failed' | 'disabled';

/**
 * Send an enquiry. A filled honeypot resolves as "blocked", which the form
 * shows as if sent so bots learn nothing; nothing is sent. A submission
 * faster than MIN_FILL_SECONDS, or inside the cooldown, is refused.
 */
export async function sendEnquiry(options: { subject: string; name: string; email: string; phone?: string; fields: EnquiryField[]; honeypot: string; startedAt: number }): Promise<SendResult> {
	if (!FORMS_ENABLED) return 'disabled';
	if (options.honeypot.trim() !== '') return 'blocked';
	const now = Date.now();
	if (now - options.startedAt < MIN_FILL_SECONDS * 1000) return 'too-fast';
	if (cooldownRemaining(now) > 0) return 'cooldown';

	const template_params = buildTemplateParams(options);
	startCooldown(now);
	try {
		const response = await fetch(EMAILJS_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ service_id: EMAILJS_SERVICE_ID, template_id: EMAILJS_TEMPLATE_ID, user_id: EMAILJS_PUBLIC_KEY, template_params }),
			credentials: 'omit',
			referrerPolicy: 'strict-origin-when-cross-origin'
		});
		return response.ok ? 'sent' : 'failed';
	} catch {
		return 'failed';
	}
}

/** mailto link with only a fixed subject: never personal data in a URL. */
export const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Enquiry from the IRIIC website')}`;
