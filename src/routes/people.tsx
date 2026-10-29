import { peopleGroups, people } from '../data/people';
import { PageHeader } from '../components/PageHeader';
import { CtaBand } from '../components/CtaBand';
import { ProjectImage } from '../components/ProjectImage';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'People', description: 'The director, advisers, administration and research team of IRIIC at United International University.', path: '/about/people/', image: 'hero/about' });

const LEDES: Record<(typeof peopleGroups)[number], string | undefined> = {
	Director: undefined,
	Advisers: 'Senior UIU academics who advise the institute.',
	Administration: 'The people who run IRIIC’s programmes, events and communications.',
	'Research team': 'Research physicians and engineers, with the projects IRIIC lists them on.'
};

export default function People() {
	return (
		<>
			<PageHeader eyebrow="People" title="The people behind IRIIC" lede="The director, advisers, administration and research team, as listed on IRIIC’s team page." />
			{peopleGroups.map((group, groupIndex) => {
				const members = people.filter((person) => person.group === group);
				if (members.length === 0) return null;
				return (
					<section key={group} className={`${groupIndex % 2 ? 'bg-white' : 'bg-paper'} py-20 lg:py-24`} aria-labelledby={`group-${groupIndex}`}>
						<div className="container-page">
							<SectionHead id={`group-${groupIndex}`} title={group} lede={LEDES[group]} />
							<ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{members.map((person, index) => (
									<Reveal as="li" key={person.name} delay={(index % 4) as 0 | 1 | 2 | 3} className="card overflow-hidden">
										{person.image && <ProjectImage image={person.image} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="aspect-[4/5]" />}
										<div className="p-5">
											<h3 className="font-display text-lg leading-snug font-bold">{person.name}</h3>
											<p className="mt-1.5 text-sm leading-relaxed text-ink-600">{person.role}</p>
											{person.projects && person.projects.length > 0 && <p className="mt-3 text-xs font-semibold text-ocean-800">Projects: {person.projects.join(', ')}</p>}
										</div>
									</Reveal>
								))}
							</ul>
						</div>
					</section>
				);
			})}
			<CtaBand />
		</>
	);
}
