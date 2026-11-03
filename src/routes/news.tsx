import { press } from '../data/press';
import { projects } from '../data/projects';
import { PageIntro } from '../components/PageIntro';
import { PhotoMosaic, type MosaicItem } from '../components/PhotoMosaic';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { Icon } from '../components/Icon';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'News', description: 'Recent IRIIC events and programmes, and press coverage of the institute in The Business Standard, The Daily Star, New Age and others.', path: '/news/', image: 'hero/news' });

const GALLERY: MosaicItem[] = [
	{ photo: 'projects/harvard-hsil-hackathon-2025/6', alt: 'Two participants at a laptop during the Harvard HSIL Hackathon', caption: 'Harvard HSIL Hackathon 2025', slug: 'harvard-hsil-hackathon-2025' },
	{ photo: 'projects/world-bank-delegation-2025/5', alt: 'A presenter speaking to the World Bank delegation in front of a slide', caption: 'World Bank delegation visit', slug: 'world-bank-delegation-2025' },
	{ photo: 'projects/endometriosis-ai-workshop-2025/3', alt: 'Students in the audience at the endometriosis and AI workshop', caption: 'Endometriosis and AI workshop', slug: 'endometriosis-ai-workshop-2025' },
	{ photo: 'projects/ai-essentials-capital-markets-2025/3', alt: 'The training room from the back, with participants at tables', caption: 'AI Essentials training', slug: 'ai-essentials-capital-markets-2025' },
	{ photo: 'projects/launchpad-cycle-1/4', alt: 'A LaunchPad team holding their cheque', caption: 'LaunchPad, cycle 1', slug: 'launchpad-cycle-1' },
	{ photo: 'projects/innovation-conclave-2025/1', alt: 'Audience listening to a presentation at the Innovation Conclave', caption: 'Innovation Conclave 2025', slug: 'innovation-conclave-2025' },
	{ photo: 'projects/aston-university-visit-2025/3', alt: 'A visitor trying a headset at an interactive kiosk', caption: 'Aston University visit', slug: 'aston-university-visit-2025' }
];

export default function News() {
	const recent = projects.filter((project) => project.sortKey > 0 && project.type !== 'Partnership').sort((a, b) => b.sortKey - a.sortKey).slice(0, 6);
	const coverage = [...press].sort((a, b) => b.sortKey - a.sortKey);
	return (
		<>
			<PageIntro eyebrow="News" title="What is happening at IRIIC" lede="Recent programmes and events, and what the press has written about them." photo="hero/news" photoAlt="A speaker presenting to the audience at IRIIC’s World IP Day seminar" inset={{ photo: 'projects/world-ip-day-2025/2', alt: 'Two speakers in conversation on stage at the World IP Day seminar' }} />

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

			<section className="bg-white py-20 lg:py-24" aria-labelledby="gallery">
				<div className="container-page">
					<SectionHead id="gallery" eyebrow="Gallery" title="Moments from the last two years" />
					<div className="mt-12">
						<PhotoMosaic items={GALLERY} label="Photos from IRIIC events" />
					</div>
				</div>
			</section>

			<section className="bg-paper py-20 lg:py-24" aria-labelledby="press">
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
