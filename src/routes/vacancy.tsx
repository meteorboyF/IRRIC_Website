import { Link, useParams } from 'react-router';
import { formatDeadline, isOpen, vacancyBySlug } from '../data/vacancies';
import type { Vacancy } from '../data/types';
import { Icon } from '../components/Icon';
import { JsonLd } from '../components/JsonLd';
import { Reveal } from '../components/Reveal';
import { SmartLink } from '../components/SmartLink';
import { NAV } from '../components/nav';
import { BUILD_DATE, PARENT_NAME, SITE_FULL_NAME, SITE_URL } from '../lib/config';
import { seo } from '../lib/seo';
import { NotFoundContent } from '../components/NotFoundContent';
import type { Route } from './+types/vacancy';

export function meta({ params }: Route.MetaArgs) {
	const vacancy = vacancyBySlug.get(params.slug);
	if (!vacancy) return seo({ title: 'Page not found', description: 'This page does not exist.', path: '/404/', noindex: true });
	const open = isOpen(vacancy, BUILD_DATE);
	const status = open && vacancy.deadline ? `Apply by ${formatDeadline(vacancy.deadline)}.` : 'This role has closed.';
	return seo({ title: vacancy.project === 'IRIIC' ? vacancy.title : `${vacancy.title}, ${vacancy.project}`, description: `${vacancy.type} role at ${vacancy.project === 'IRIIC' ? 'IRIIC' : `${vacancy.project}, IRIIC`}, ${vacancy.location}. ${status}`, path: `/careers/${vacancy.slug}/`, image: 'hero/careers' });
}

const EMPLOYMENT_TYPE: Record<Vacancy['type'], string[]> = {
	'Full-time': ['FULL_TIME'],
	'Full-time, contractual': ['FULL_TIME', 'CONTRACTOR'],
	Internship: ['INTERN'],
	'Full-time or internship': ['FULL_TIME', 'INTERN'],
	'Research engineer': ['FULL_TIME']
};

/** schema.org JobPosting, built from typed data. Only emitted for open roles. */
function jobPosting(vacancy: Vacancy): Record<string, unknown> {
	const description = [vacancy.about, ...vacancy.responsibilities.map((item) => `• ${item}`), ...vacancy.requirements.map((item) => `• ${item}`)].filter(Boolean).join('\n');
	return {
		'@context': 'https://schema.org',
		'@type': 'JobPosting',
		title: vacancy.title,
		description,
		...(vacancy.deadline ? { validThrough: `${vacancy.deadline}T23:59:59+06:00` } : {}),
		employmentType: EMPLOYMENT_TYPE[vacancy.type],
		hiringOrganization: { '@type': 'Organization', name: `${SITE_FULL_NAME} (IRIIC), ${PARENT_NAME}`, sameAs: SITE_URL },
		jobLocation: {
			'@type': 'Place',
			address: { '@type': 'PostalAddress', streetAddress: 'United City, Madani Avenue, Badda', addressLocality: 'Dhaka', postalCode: '1212', addressCountry: 'BD' }
		},
		url: `${SITE_URL}/careers/${vacancy.slug}/`,
		directApply: false
	};
}

function Section({ title, items }: { title: string; items: string[] }) {
	if (items.length === 0) return null;
	return (
		<>
			<h2 className="mt-10 font-display text-2xl font-bold">{title}</h2>
			<ul className="mt-4 grid gap-3">
				{items.map((item) => (
					<li key={item} className="flex gap-3">
						<Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-700" strokeWidth={2} />
						<span className="leading-relaxed text-ink-700">{item}</span>
					</li>
				))}
			</ul>
		</>
	);
}

export default function VacancyDetail() {
	const { slug = '' } = useParams();
	const vacancy = vacancyBySlug.get(slug);
	if (!vacancy) return <NotFoundContent />;
	const open = isOpen(vacancy, BUILD_DATE);

	return (
		<>
			{open && <JsonLd data={jobPosting(vacancy)} />}
			<section className="on-dark band-dark grain pt-28 pb-12 lg:pb-16">
				<div className="container-page">
					<Link to={NAV.careers.to} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
						<Icon name="arrow-left" className="h-4 w-4" />
						{NAV.careers.label}
					</Link>
					<p className="eyebrow">{vacancy.project}</p>
					<h1 className="mt-3 max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.04] font-bold text-balance">{vacancy.title}</h1>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
						<span className={`tag ${open ? 'tag-live' : 'tag-muted'}`}>{open ? 'Open' : 'Closed'}</span>
						<span className="inline-flex items-center gap-1.5">
							<Icon name="briefcase" className="h-4 w-4" />
							{vacancy.type}
						</span>
						<span className="inline-flex items-center gap-1.5">
							<Icon name="map-pin" className="h-4 w-4" />
							{vacancy.location}
						</span>
					</div>
				</div>
			</section>

			<section className="bg-paper py-16 lg:py-24">
				<div className="container-page grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
					<Reveal>
						{!open && (
							<p className="mb-8 rounded-xl border border-ink-900/12 bg-paper-deep p-4 text-sm font-medium text-ink-800" role="note">
								This role has closed and is no longer accepting applications. It is kept here for reference.
							</p>
						)}
						{vacancy.about && <p className="text-lg leading-relaxed text-ink-700">{vacancy.about}</p>}
						<Section title="What you will do" items={vacancy.responsibilities} />
						<Section title="What the post asks for" items={vacancy.requirements} />
					</Reveal>

					<Reveal delay={1}>
						<aside className="card sticky top-24 p-6" aria-labelledby="apply-heading">
							<dl className="grid gap-4">
								<div>
									<dt className="eyebrow">Deadline</dt>
									<dd className="mt-1 font-display text-xl font-bold">{vacancy.deadline ? formatDeadline(vacancy.deadline) : 'Not stated in the post'}</dd>
								</div>
								{vacancy.postedLabel && (
									<div className="border-t border-ink-900/8 pt-4">
										<dt className="eyebrow">Posted</dt>
										<dd className="mt-1 font-semibold">{vacancy.postedLabel}</dd>
									</div>
								)}
								{vacancy.openings && (
									<div className="border-t border-ink-900/8 pt-4">
										<dt className="eyebrow">Positions</dt>
										<dd className="mt-1 font-semibold">{vacancy.openings}</dd>
									</div>
								)}
							</dl>
							<h2 id="apply-heading" className="mt-6 border-t border-ink-900/8 pt-6 font-display text-xl font-bold">
								Apply
							</h2>
							{open ? (
								<>
									<ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-700">
										{vacancy.howToApply.steps.map((step) => (
											<li key={step}>{step}</li>
										))}
									</ol>
									{vacancy.howToApply.url && (
										<SmartLink href={vacancy.howToApply.url} className="btn btn-primary mt-5 w-full">
											{vacancy.howToApply.urlLabel ?? 'Apply'}
											<Icon name="arrow-up-right" className="h-4 w-4" />
										</SmartLink>
									)}
								</>
							) : (
								<p className="mt-3 text-sm leading-relaxed text-ink-700">Applications have closed. Watch the careers page for new roles.</p>
							)}
							<SmartLink href={vacancy.sourceUrl} className="link mt-5 inline-flex items-center gap-1.5 text-sm">
								Read the original post
								<Icon name="arrow-up-right" className="h-4 w-4" />
							</SmartLink>
							<p className="mt-5 text-xs leading-relaxed text-ink-600">This site does not collect applications or CVs. Apply only through the route the original post gives.</p>
						</aside>
					</Reveal>
				</div>
			</section>
		</>
	);
}
