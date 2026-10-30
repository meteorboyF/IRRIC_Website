import { press } from '../data/press';
import { projects } from '../data/projects';
import { PageIntro } from '../components/PageIntro';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { Icon } from '../components/Icon';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'News', description: 'Recent IRIIC events and programmes, and press coverage of the institute in The Business Standard, The Daily Star, New Age and others.', path: '/news/', image: 'hero/news' });

export default function News() {
	const recent = projects.filter((project) => project.sortKey > 0 && project.type !== 'Partnership').sort((a, b) => b.sortKey - a.sortKey).slice(0, 6);
	const coverage = [...press].sort((a, b) => b.sortKey - a.sortKey);
	return (
		<>
			<PageIntro eyebrow="News" title="What is happening at IRIIC" lede="Recent programmes and events, and what the press has written about them." photo="hero/news" photoAlt="A speaker presenting to the audience at IRIIC’s World IP Day seminar" />

			<section className="bg-paper py-20 lg:py-24" aria-labelledby="recent">
				<div className="container-page">
					<SectionHead id="recent" eyebrow="Recent" title="Latest programmes and events" />
					<ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{recent.map((project, index) => (
							<Reveal as="li" key={project.slug} delay={(index % 3) as 0 | 1 | 2}>
								<ProjectCard project={project} />
							</Reveal>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-white py-20 lg:py-24" aria-labelledby="press">
				<div className="container-page">
					<SectionHead id="press" eyebrow="In the press" title="Coverage" lede="Articles about IRIIC and its labs." />
					<ul className="mt-12 grid gap-4 md:grid-cols-2">
						{coverage.map((item) => (
							<li key={item.slug} className="card flex flex-col gap-2 p-6">
								<p className="text-sm text-ink-600">
									<span className="font-display font-bold text-ocean-800">{item.outlet}</span>
									{item.dateLabel && ` · ${item.dateLabel}`}
								</p>
								<SmartLink href={item.url} className="group inline-flex items-start gap-2 font-display text-lg leading-snug font-semibold text-ink-900 hover:text-ocean-700">
									<span>{item.headline}</span>
									<Icon name="arrow-up-right" className="mt-1 h-4 w-4 shrink-0" />
								</SmartLink>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
