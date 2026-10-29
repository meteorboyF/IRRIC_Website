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
					<SectionHead number="01" id="recent" eyebrow="Recent" title="Latest programmes and events" />
					<ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{recent.map((project, index) => (
							<Reveal as="li" key={project.slug} delay={(index % 3) as 0 | 1 | 2}>
								<ProjectCard project={project} />
							</Reveal>
						))}
					</ul>
				</div>
			</section>

			<section className="on-dark band-dark grain py-20 lg:py-24" aria-labelledby="press">
				<div className="container-page">
					<SectionHead number="02" id="press" eyebrow="In the press" title="Coverage" onDark lede="Articles about IRIIC and its labs. Links open the publisher’s site." />
					<ul className="mt-12 divide-y divide-white/12 border-y border-white/12">
						{coverage.map((item) => (
							<li key={item.slug} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
								<p className="text-sm text-white/70">
									<span className="block font-display font-bold text-white">{item.outlet}</span>
									{item.dateLabel}
								</p>
								<SmartLink href={item.url} className="group inline-flex items-start gap-2 font-display text-lg leading-snug font-semibold text-white hover:text-ocean-200">
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
