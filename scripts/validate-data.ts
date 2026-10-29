/**
 * Build-time data validation. Runs before every build (npm run build) and
 * in CI; any problem fails the build.
 *
 * Checks: duplicate slugs; disallowed URL schemes; missing image files or
 * size entries; missing alt text; projects without sources; malformed or
 * impossible vacancy deadlines; and a few content rules (no placeholder
 * text, sortKey consistent with dateLabel's year).
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { partners } from '../src/data/partners.ts';
import { people } from '../src/data/people.ts';
import { press } from '../src/data/press.ts';
import { projects } from '../src/data/projects.ts';
import type { ImageRef } from '../src/data/types.ts';
import { vacancies } from '../src/data/vacancies.ts';
import { safeUrl } from '../src/lib/safeUrl.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const images = join(root, 'public', 'images');
const sizes = JSON.parse(readFileSync(join(root, 'src', 'data', 'image-sizes.json'), 'utf8')) as Record<string, number[]>;

const errors: string[] = [];
const fail = (where: string, message: string) => errors.push(`${where}: ${message}`);

function checkSlugs(kind: string, slugs: string[]) {
	const seen = new Set<string>();
	for (const slug of slugs) {
		if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail(`${kind} ${slug}`, 'slug must be lowercase words joined by hyphens');
		if (seen.has(slug)) fail(`${kind} ${slug}`, 'duplicate slug');
		seen.add(slug);
	}
}

function checkUrl(where: string, url: string | undefined) {
	if (url === undefined) return;
	const safe = safeUrl(url);
	if (safe === null) fail(where, `URL not allowed (only https:, mailto:, tel: and same-origin paths): "${url}"`);
	else if (url.startsWith('/') && !url.endsWith('/') && !url.includes('#')) fail(where, `internal path must end with a slash: "${url}"`);
}

function checkImage(where: string, image: ImageRef | undefined, needsSmall = true) {
	if (!image) return;
	if (!image.alt || image.alt.trim().length < 8) fail(where, `image ${image.name} needs real alt text`);
	if (!sizes[image.name]) fail(where, `image ${image.name} has no entry in image-sizes.json`);
	if (!existsSync(join(images, `${image.name}.webp`))) fail(where, `missing file public/images/${image.name}.webp`);
	if (needsSmall && !existsSync(join(images, `${image.name}-sm.webp`))) fail(where, `missing file public/images/${image.name}-sm.webp`);
}

const PLACEHOLDER = /\b(lorem|ipsum|tbc|tbd|todo|placeholder|coming soon|xxx)\b|\[(email|link|website)/i;
function checkText(where: string, values: (string | undefined)[]) {
	for (const value of values) if (value && PLACEHOLDER.test(value)) fail(where, `placeholder text: "${value.slice(0, 60)}"`);
}

// ---- projects ----
checkSlugs('project', projects.map((p) => p.slug));
for (const project of projects) {
	const where = `project ${project.slug}`;
	if (!project.sources.length) fail(where, 'has no sources');
	if (!project.summary.trim()) fail(where, 'has no summary');
	checkText(where, [project.title, project.tagline, project.summary, project.dateLabel, ...(project.highlights ?? []), ...(project.outcomes ?? [])]);
	if (!Number.isInteger(project.sortKey) || (project.sortKey !== 0 && !/^\d{8}$/.test(String(project.sortKey)))) fail(where, 'sortKey must be YYYYMMDD or 0');
	if (project.sortKey === 0 && project.dateLabel) fail(where, 'has a dateLabel but sortKey 0');
	if (project.sortKey !== 0 && project.dateLabel && !project.dateLabel.includes(String(project.sortKey).slice(0, 4))) fail(where, `dateLabel "${project.dateLabel}" does not mention sortKey year`);
	checkImage(where, project.image);
	for (const image of project.gallery ?? []) checkImage(where, image);
	for (const link of project.links) {
		checkUrl(`${where} link "${link.label}"`, link.url);
		if (!link.label.trim()) fail(where, 'link without a label');
	}
	if (project.image === undefined && project.gallery?.length) fail(where, 'gallery without a cover image');
}

// ---- vacancies ----
checkSlugs('vacancy', vacancies.map((v) => v.slug));
for (const vacancy of vacancies) {
	const where = `vacancy ${vacancy.slug}`;
	if (vacancy.deadline !== null) {
		const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(vacancy.deadline);
		if (!match) fail(where, `deadline must be YYYY-MM-DD or null, got "${vacancy.deadline}"`);
		else {
			const [, y, m, d] = match.map(Number) as [number, number, number, number];
			const date = new Date(Date.UTC(y, m - 1, d));
			if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) fail(where, `deadline ${vacancy.deadline} is not a real date`);
			if (y < 2023 || y > 2100) fail(where, `deadline ${vacancy.deadline} is out of range`);
		}
	}
	if (!vacancy.sources.length) fail(where, 'has no sources');
	checkUrl(`${where} sourceUrl`, vacancy.sourceUrl);
	if (!vacancy.sourceUrl) fail(where, 'missing sourceUrl');
	checkUrl(`${where} apply url`, vacancy.howToApply.url);
	if (!vacancy.howToApply.steps.length) fail(where, 'how to apply has no steps');
	if (!vacancy.about && !vacancy.responsibilities.length) fail(where, 'needs an about paragraph or responsibilities');
	checkText(where, [vacancy.title, vacancy.about, ...vacancy.responsibilities, ...vacancy.requirements, ...vacancy.howToApply.steps]);
}

// ---- partners, people, press ----
const partnerNames = new Set<string>();
for (const partner of partners) {
	const where = `partner ${partner.name}`;
	if (partnerNames.has(partner.name)) fail(where, 'duplicate partner');
	partnerNames.add(partner.name);
	if (!partner.sources.length) fail(where, 'has no sources');
	checkUrl(where, partner.url);
	if (partner.logo) {
		if (!existsSync(join(images, `${partner.logo}.webp`))) fail(where, `missing logo public/images/${partner.logo}.webp`);
		if (!sizes[partner.logo]) fail(where, `logo ${partner.logo} has no size entry`);
	}
}
for (const person of people) {
	if (!person.sources.length) fail(`person ${person.name}`, 'has no sources');
	checkImage(`person ${person.name}`, person.image);
}
checkSlugs('press', press.map((p) => p.slug));
const projectSlugs = new Set(projects.map((p) => p.slug));
for (const item of press) {
	checkUrl(`press ${item.slug}`, item.url);
	if (item.about && !projectSlugs.has(item.about)) fail(`press ${item.slug}`, `about "${item.about}" is not a project slug`);
}

// Internal links in project data must point at real routes.
for (const project of projects) {
	for (const link of project.links) {
		const projectLink = /^\/projects\/([^/]+)\/$/.exec(link.url);
		if (projectLink && !projectSlugs.has(projectLink[1] ?? '')) fail(`project ${project.slug}`, `links to unknown project ${link.url}`);
	}
}

if (errors.length) {
	console.error(`validate-data: ${errors.length} problem(s)\n`);
	for (const error of errors) console.error(`  ${error}`);
	process.exit(1);
}
console.log(`validate-data: ${projects.length} projects, ${vacancies.length} vacancies, ${partners.length} partners, ${people.length} people, ${press.length} press items. All valid.`);
