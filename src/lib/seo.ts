import type { MetaDescriptor } from 'react-router';
import { SITE_FULL_NAME, SITE_NAME, SITE_URL } from './config';

interface SeoOptions {
	/** Page-specific part of the title. */
	title: string;
	description: string;
	/** Route path beginning and ending with /, e.g. '/about/'. */
	path: string;
	/** Logical image name under public/images. */
	image?: string;
	type?: 'website' | 'article';
	/** Ask search engines not to index this page (the 404 page). */
	noindex?: boolean;
}

/** Title, description, canonical, Open Graph and Twitter tags for a route's meta export. */
export function seo({ title, description, path, image = 'hero/home', type = 'website', noindex = false }: SeoOptions): MetaDescriptor[] {
	const fullTitle = path === '/' ? `${SITE_NAME}: ${SITE_FULL_NAME}, UIU` : `${title} | ${SITE_NAME}`;
	const url = `${SITE_URL}${path}`;
	const imageUrl = `${SITE_URL}/images/${image}.webp`;
	return [
		{ title: fullTitle },
		{ name: 'description', content: description },
		noindex ? { name: 'robots', content: 'noindex' } : { tagName: 'link', rel: 'canonical', href: url },
		{ property: 'og:type', content: type },
		{ property: 'og:site_name', content: SITE_NAME },
		{ property: 'og:title', content: fullTitle },
		{ property: 'og:description', content: description },
		{ property: 'og:url', content: url },
		{ property: 'og:image', content: imageUrl },
		{ property: 'og:locale', content: 'en_GB' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: fullTitle },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:image', content: imageUrl }
	];
}
