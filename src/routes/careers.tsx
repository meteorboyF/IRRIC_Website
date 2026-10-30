import { Link } from 'react-router';
import { formatDeadline, openVacancies, pastVacancies } from '../data/vacancies';
import type { Vacancy } from '../data/types';
import { Icon } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { NAV } from '../components/nav';
import { BUILD_DATE, CONTACT_EMAIL, SOCIALS } from '../lib/config';
import { seo } from '../lib/seo';

export const meta = () =>
	seo({
		title: 'Careers',
		description: 'Open roles at IRIIC, United International University: research engineers, research physicians, project coordinators and project staff, with how to apply and past vacancies.',
		path: '/careers/',
		image: 'hero/careers'
	});

function VacancyRow({ vacancy, open }: { vacancy: Vacancy; open: boolean }) {
	return (
		<li>
			<Link to={`/careers/${vacancy.slug}/`} className="card group flex flex-col gap-3 p-6 transition-shadow hover:shadow-card-lg sm:flex-row sm:items-center sm:justify-between">
				<span className="min-w-0">
					<span className="flex flex-wrap items-center gap-2">
						<span className={`tag ${open ? 'tag-live' : 'tag-muted'}`}>{open ? 'Open' : 'Closed'}</span>
						<span className="text-xs font-semibold text-ink-600">{vacancy.type}</span>
					</span>
					<span className="mt-2 block font-display text-xl font-bold text-ink-900">{vacancy.title}</span>
					<span className="mt-1 block text-sm text-ink-600">
						{vacancy.project} · {vacancy.location}
					</span>
				</span>
				<span className="flex shrink-0 items-center gap-3 text-sm font-semibold text-ink-700">
					{vacancy.deadline && (
						<span className="inline-flex items-center gap-1.5">
							<Icon name="calendar" className="h-4 w-4" />
							{open ? 'Apply by' : 'Closed'} {formatDeadline(vacancy.deadline)}
						</span>
					)}
					<Icon name="arrow-right" className="h-5 w-5 text-ocean-700 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
				</span>
			</Link>
		</li>
	);
}

export default function Careers() {
	const open = openVacancies(BUILD_DATE);
	const past = pastVacancies(BUILD_DATE);
	return (
		<>
			<PageIntro eyebrow="Careers" title="Work on research that reaches people" lede="IRIIC hires research engineers, research physicians, project coordinators and project staff, and takes interns." photo="hero/careers" photoAlt="Participants gathered around a mentor at the IRIIC innovation hub" />

			<section className="bg-paper py-20 lg:py-24" aria-labelledby="open-roles">
				<div className="container-page">
					<SectionHead id="open-roles" eyebrow="Open roles" title={open.length > 0 ? `${open.length} open ${open.length === 1 ? 'role' : 'roles'}` : 'No open positions right now'} lede={open.length > 0 ? 'Listed by closing date.' : undefined} />
					{open.length > 0 ? (
						<ul className="mt-10 grid gap-4">
							{open.map((vacancy) => (
								<VacancyRow key={vacancy.slug} vacancy={vacancy} open />
							))}
						</ul>
					) : (
						<Reveal className="card mt-10 max-w-3xl p-8">
							<p className="leading-relaxed text-ink-700">New roles are announced first on IRIIC’s Facebook page. If you would like to be considered for future openings, you can send an expression of interest through the contact form.</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
									IRIIC on Facebook<span className="sr-only"> (opens in a new tab)</span>
									<Icon name="arrow-up-right" className="h-4 w-4" />
								</a>
								<Link to={`${NAV.contact.to}?topic=careers`} className="btn btn-ghost">
									{NAV.contact.label}
								</Link>
							</div>
						</Reveal>
					)}
				</div>
			</section>

			<section className="border-y border-ink-900/8 bg-white py-20 lg:py-24" aria-labelledby="how-hiring-works">
				<div className="container-page grid gap-10 lg:grid-cols-3">
					<div className="lg:col-span-1">
						<SectionHead id="how-hiring-works" eyebrow="Before you apply" title="How applications work" />
					</div>
					<ul className="grid gap-5 sm:grid-cols-3 lg:col-span-2">
						{[
							{ title: 'How to apply', text: 'Each role explains how to apply, usually by online form or email. Follow those instructions, including any subject line.' },
							{ title: 'Deadlines', text: 'Applications close at the end of the deadline day, Dhaka time.' },
							{ title: 'Questions', text: `For questions about a role, email ${CONTACT_EMAIL} and name the role in the subject.` }
						].map((step) => (
							<li key={step.title} className="card p-6">
								<h3 className="font-display text-lg font-bold">{step.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-600">{step.text}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{past.length > 0 && (
				<section className="bg-paper py-20 lg:py-24" aria-labelledby="past-vacancies">
					<div className="container-page">
						<SectionHead id="past-vacancies" eyebrow="Archive" title="Past vacancies" />
						<ul className="mt-10 grid gap-4">
							{past.map((vacancy) => (
								<VacancyRow key={vacancy.slug} vacancy={vacancy} open={false} />
							))}
						</ul>
					</div>
				</section>
			)}
		</>
	);
}
