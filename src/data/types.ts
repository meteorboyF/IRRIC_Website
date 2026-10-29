/**
 * Content model. Every page renders from these types.
 *
 * Standing rule: no statistic, date, quote, partner or outcome is invented.
 * An optional field that is unconfirmed is simply omitted, and the UI drops
 * that element; it never renders a placeholder. Every item carries the
 * `sources` it was written from. They are never rendered, but they keep
 * each claim traceable (see research/inventory.md).
 */

/**
 * An optimised image under public/images, named without extension. Its
 * pixel size comes from src/data/image-sizes.json, written by the image
 * pipeline, so layout space is reserved without hand-typed numbers.
 */
export interface ImageRef {
	/** e.g. 'projects/cmed/cover'. Both `${name}.webp` and `${name}-sm.webp` exist. */
	name: string;
	alt: string;
	/** Screenshots and diagrams are shown whole on a tinted panel. */
	fit?: 'cover' | 'contain';
}

export interface LinkRef {
	label: string;
	/** https:, mailto:, tel: or a same-origin path. Anything else is dropped. */
	url: string;
}

export type ProjectType =
	| 'Research and innovation'
	| 'Incubation'
	| 'Competition'
	| 'Event'
	| 'Training'
	| 'Partnership'
	| 'Visit';

/** Only statuses a source states. Unknown is `null`, never a guess. */
export type ProjectStatus = 'Ongoing' | 'Commercialised' | 'Completed' | null;

export interface Project {
	slug: string;
	title: string;
	/** One line under the title on cards. */
	tagline: string;
	type: ProjectType;
	status: ProjectStatus;
	/** Research areas as IRIIC tags them, e.g. 'Artificial intelligence'. */
	areas?: string[];
	/** Human-readable date. Omitted when no source states one. */
	dateLabel?: string;
	/** YYYYMMDD (DD or MM may be 00 when only month or year is known); 0 = unknown. */
	sortKey: number;
	/** Plain-language summary, written for this site. */
	summary: string;
	/** Specific, sourced points: what it does, what came of it. */
	highlights?: string[];
	/** Named partners, funders or hosts, as the sources state them. */
	partners?: string[];
	/** Selected publications or recognition, with references. */
	outcomes?: string[];
	image?: ImageRef;
	gallery?: ImageRef[];
	links: LinkRef[];
	/** Shown in the home page's featured strip, in data order. */
	featured?: boolean;
	sources: string[];
}

export type VacancyType = 'Full-time' | 'Full-time, contractual' | 'Internship' | 'Full-time or internship' | 'Research engineer';

export interface Vacancy {
	slug: string;
	title: string;
	/** Project, lab or department the role sits in. */
	project: string;
	type: VacancyType;
	location: string;
	/** As the post states it; omitted when it does not. */
	postedLabel?: string;
	/** ISO date (YYYY-MM-DD, Asia/Dhaka) or null when the post gives none. */
	deadline: string | null;
	/** Number of posts, when stated. */
	openings?: number;
	about?: string;
	responsibilities: string[];
	requirements: string[];
	/** The post's own instructions, kept faithful to the original. */
	howToApply: {
		steps: string[];
		/** Application form or address exactly as the post gives it. */
		url?: string;
		urlLabel?: string;
	};
	/** The original post. Rendered as "Read the original post". */
	sourceUrl: string;
	sources: string[];
}

export interface Partner {
	name: string;
	/** Logo under public/images, e.g. 'partners/ict-division' (size from image-sizes.json). */
	logo?: string;
	kind: 'Agreement partner' | 'Programme partner' | 'Research collaborator' | 'Funder or government';
	/** What the relationship is, in one line, as documented. */
	note: string;
	url?: string;
	sources: string[];
}

export interface Person {
	name: string;
	role: string;
	group: 'Director' | 'Advisers' | 'Administration' | 'Research team';
	/** Projects this person is assigned to, as listed by IRIIC. */
	projects?: string[];
	image?: ImageRef;
	sources: string[];
}

export interface PressItem {
	slug: string;
	outlet: string;
	headline: string;
	/** Omitted when unconfirmed. */
	dateLabel?: string;
	/** YYYYMMDD; 0 = unknown. */
	sortKey: number;
	url: string;
	/** Project slug this coverage relates to, if any. */
	about?: string;
	sources: string[];
}

export interface Milestone {
	dateLabel: string;
	title: string;
	detail: string;
	sources: string[];
}

export interface Recognition {
	year: number;
	title: string;
	recipient: string;
	sources: string[];
}
