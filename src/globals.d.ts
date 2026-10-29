/** Injected by vite.config.ts `define`. */
declare const __BUILD_DATE__: string;
declare const __SITE_URL__: string;

interface ImportMetaEnv {
	readonly VITE_EMAILJS_SERVICE_ID?: string;
	readonly VITE_EMAILJS_TEMPLATE_ID?: string;
	readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}
