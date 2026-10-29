/**
 * One name per destination: every nav, footer and CTA label that points at
 * a page uses the label defined here.
 */
export const NAV = {
	home: { to: '/', label: 'Home' },
	about: { to: '/about/', label: 'About' },
	people: { to: '/about/people/', label: 'People' },
	partners: { to: '/partners/', label: 'Partners' },
	projects: { to: '/projects/', label: 'Projects' },
	programmes: { to: '/programmes/', label: 'Programmes' },
	careers: { to: '/careers/', label: 'Careers' },
	news: { to: '/news/', label: 'News' },
	contact: { to: '/contact/', label: 'Contact' },
	privacy: { to: '/privacy/', label: 'Privacy' },
	terms: { to: '/terms/', label: 'Terms' },
	cookies: { to: '/cookies/', label: 'Cookies' }
} as const;

/** The single conversion CTA. */
export const CTA = { to: '/contact/', label: 'Work with IRIIC' } as const;
