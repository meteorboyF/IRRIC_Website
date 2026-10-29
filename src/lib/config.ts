/** Site-wide configuration. */

export const SITE_NAME = 'IRIIC';
export const SITE_FULL_NAME = 'Institute of Research, Innovation, Incubation and Commercialization';
export const PARENT_NAME = 'United International University';

/**
 * Canonical origin plus base path, without a trailing slash. Set by the build
 * (SITE_URL, or the GitHub Pages URL derived from BASE_PATH).
 */
export const SITE_URL: string = __SITE_URL__;

/** Every form and mailto link on the site delivers here. */
export const CONTACT_EMAIL = 'iriic.uiu@gmail.com';

export const ADDRESS_LINES = [
	'Room 1012, 10th floor',
	'United International University',
	'United City, Madani Avenue, Badda',
	'Dhaka 1212, Bangladesh'
] as const;

export const PHONE = { display: '09604 848848, ext. 3140', href: 'tel:+8809604848848' } as const;
export const OFFICE_HOURS = '8.30 am to 4.30 pm';

export const SOCIALS = {
	facebook: 'https://www.facebook.com/profile.php?id=61555389324566',
	linkedin: 'https://www.linkedin.com/company/institute-of-research-innovation-incubation-and-commercialization-iriic-uiu/',
	youtube: 'https://www.youtube.com/@IRIIC_UIU'
} as const;

/** YYYY-MM-DD in Asia/Dhaka, fixed at build time (see vite.config.ts). */
export const BUILD_DATE: string = __BUILD_DATE__;

/** Shown as "Last updated" on the legal pages. */
export const LEGAL_UPDATED = 'October 2026';

/**
 * EmailJS delivers form submissions to CONTACT_EMAIL without a backend.
 *
 * These three identifiers are public by design: EmailJS's browser API needs
 * them in the page, and they grant no access to the account. Protection
 * comes from the account settings (allowed origins, no non-browser API
 * access); see CONTENT-TODO.md. They are read from VITE_EMAILJS_* at build
 * time. CI passes an unset secret as an empty string, so blank means "not
 * configured": every form then renders a mailto fallback instead, and the
 * site never shows a form that cannot send.
 */
function env(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

export const EMAILJS_SERVICE_ID = env(import.meta.env.VITE_EMAILJS_SERVICE_ID);
export const EMAILJS_TEMPLATE_ID = env(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
export const EMAILJS_PUBLIC_KEY = env(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const FORMS_ENABLED =
	EMAILJS_SERVICE_ID.length > 0 && EMAILJS_TEMPLATE_ID.length > 0 && EMAILJS_PUBLIC_KEY.length > 0;

export const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';
