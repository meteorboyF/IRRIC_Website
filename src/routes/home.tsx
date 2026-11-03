import { Link } from 'react-router';
import { centres } from '../data/about';
import { partners } from '../data/partners';
import { press } from '../data/press';
import { projectBySlug, projects } from '../data/projects';
import { formatDeadline, openVacancies } from '../data/vacancies';
import { CentresShowcase } from '../components/CentresShowcase';
import { CtaBand } from '../components/CtaBand';
import { HeroShowcase } from '../components/HeroShowcase';
import { Icon, type IconName } from '../components/Icon';
import { PartnerLogo } from '../components/PartnerLogo';
import { PhotoMosaic, type MosaicItem } from '../components/PhotoMosaic';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { Traces } from '../components/Traces';
import { NAV } from '../components/nav';
import { BUILD_DATE } from '../lib/config';
import { img, imageSize, srcSet } from '../lib/img';
import { seo } from '../lib/seo';

export const meta = () =>
	seo({
		title: 'Home',
		description: 'IRIIC, the Institute of Research, Innovation, Incubation and Commercialization at United International University, Dhaka, turns research in AI, digital health and brain–computer interfaces into products and startups.',
		path: '/'
	});

/** IRIIC's name is its method: the four stages, in order. */
const PIPELINE: { title: string; text: string; icon: IconName }[] = [
	{ title: 'Research', text: 'Applied work in AI, digital health, brain–computer interfaces and IoT, often with universities abroad.', icon: 'flask' },
	{ title: 'Innovation', text: 'Prototypes built for Bangladesh: Bangla-language tools, low-cost screening apps, community health models.', icon: 'chip' },
	{ title: 'Incubation', text: 'LaunchPad cohorts and the Harvard HSIL Hackathon hub turn student and early-stage ideas into ventures.', icon: 'rocket' },
	{ title: 'Commercialisation', text: 'Taking research to market with industry and government, as CMED did when it became CMED Health.', icon: 'handshake' }
];

const MOMENTS: MosaicItem[] = [
	{ photo: 'projects/world-bank-delegation-2025/4', alt: 'World Bank delegation members talking with IRIIC hosts', caption: 'A World Bank delegation tours IRIIC’s flagship projects', slug: 'world-bank-delegation-2025' },
	{ photo: 'projects/focus-mind/cover', alt: 'Adults in a meeting room, some wearing EEG headbands, during a Focus Mind session', caption: 'An EEG session for Focus Mind', slug: 'focus-mind' },
	{ photo: 'projects/endometriosis-ai-workshop-2025/1', alt: 'Panel of speakers under the endometriosis and AI workshop banner', caption: 'Endometriosis and AI workshop', slug: 'endometriosis-ai-workshop-2025' },
	{ photo: 'projects/innovation-conclave-2025/cover', alt: 'A presenter showing IRIIC projects on a screen to Innovation Conclave guests', caption: 'Innovation Conclave 2025', slug: 'innovation-conclave-2025' },
	{ photo: 'projects/launchpad-cycle-1/2', alt: 'A LaunchPad team with judges and their seed funding cheque', caption: 'LaunchPad seed funding', slug: 'launchpad-cycle-1' },
	{ photo: 'projects/world-ip-day-2025/2', alt: 'Two speakers in conversation on stage at the World IP Day seminar', caption: 'World IP Day seminar', slug: 'world-ip-day-2025' },
	{ photo: 'projects/research-innovation-week-2024/cover', alt: 'Audience at the opening seminar of UIU Research and Innovation Week', caption: 'Research and Innovation Week 2024', slug: 'research-innovation-week-2024' }
];

function FramedPhoto({ name, alt, sizes, className, priority = false }: { name: string; alt: string; sizes: string; className: string; priority?: boolean }) {
	const [width, height] = imageSize(name);
	return (
		<div className={`frame ${className}`}>
			<img src={img(name, 'sm')} srcSet={srcSet(name)} sizes={sizes} alt={alt} width={width} height={height} fetchPriority={priority ? 'high' : 'auto'} loading={priority ? 'eager' : 'lazy'} className="absolute inset-0 h-full w-full object-cover" />
		</div>
	);
}

export default function Home() {
	// Six tiles fill the bento exactly: one large (two by two) and five regular.
	const featured = projects.filter((project) => project.featured).slice(0, 6);
	// The large bento tile goes to the first featured item with a real photograph.
	const lead = featured.find((project) => project.image?.fit === 'cover') ?? featured[0];
	const rest = featured.filter((project) => project !== lead);
	const research = projects.filter((project) => project.type === 'Research and innovation').length;
	const agreements = projects.filter((project) => project.type === 'Partnership').length;
	const hackathons = projects.filter((project) => project.slug.startsWith('harvard-hsil-hackathon')).length;
	const open = openVacancies(BUILD_DATE);
	const latestPress = [...press].sort((a, b) => b.sortKey - a.sortKey).slice(0, 3);
	const hsil = projectBySlug.get('harvard-hsil-hackathon-2025');
	const hsilLinks = ['harvard-hsil-hackathon-2026', 'harvard-hsil-hackathon-2025'].map((slug) => projectBySlug.get(slug)).filter((item) => item !== undefined);
	const logos = partners.filter((partner) => partner.logo);

	return (
		<>
			{/* ---------- hero ---------- */}
			<section className="surface-sky relative overflow-hidden" aria-labelledby="hero-title">
				<Traces className="pointer-events-none absolute top-4 right-[-4rem] hidden w-[52rem] max-w-none text-ocean-300/70 lg:block" />
				<HeroShowcase />
			</section>

			<CentresShowcase />

			{/* ---------- how IRIIC works, and the numbers ---------- */}
			<section className="surface-sky relative overflow-hidden pt-24 lg:pt-28" aria-labelledby="how-it-works">
				<div className="container-page">
					<SectionHead id="how-it-works" eyebrow="How IRIIC works" title="From research to commercialisation" lede="The four stages in IRIIC’s name, from a first idea to something people use." />
				</div>
				<div className="container-page relative mt-12 pb-16 lg:pb-20">
					<ol className="card grid gap-px overflow-hidden bg-ocean-100 sm:grid-cols-2 lg:grid-cols-4" aria-label="How IRIIC works, in four stages">
						{PIPELINE.map((stage, index) => (
							<li key={stage.title} className="relative bg-white p-6 lg:p-7">
								<div className="flex items-center gap-3">
									<span className="grid h-11 w-11 place-items-center rounded-full bg-ocean-50 text-ocean-700 ring-1 ring-ocean-700/15">
										<Icon name={stage.icon} className="h-5 w-5" />
									</span>
									<span className="font-display text-sm font-semibold text-ocean-700">Stage {index + 1}</span>
									{index < PIPELINE.length - 1 && <Icon name="arrow-right" className="ml-auto hidden h-5 w-5 text-ember-500 lg:block" />}
								</div>
								<h3 className="mt-4 text-xl">{stage.title}</h3>
								<p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{stage.text}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* ---------- documented work, counted from the data ---------- */}
			<section aria-label="IRIIC in numbers" className="bg-paper">
				<dl className="container-page grid grid-cols-2 gap-y-8 py-14 lg:grid-cols-4">
					{[
						{ value: research, label: 'research and innovation projects' },
						{ value: hackathons, label: 'Harvard HSIL Hackathons hosted as Bangladesh’s hub' },
						{ value: agreements, label: 'signed partnership agreements' },
						{ value: centres.length, label: 'labs and centres under one institute' }
					].map((item, index) => (
						<div key={item.label} className={`flex flex-col border-ocean-700/15 px-3 sm:px-6 ${index > 0 ? 'border-l' : ''} ${index === 2 ? 'max-lg:border-l-0' : ''}`}>
							<dt className="mt-2 max-w-[14rem] text-[0.9375rem] leading-snug text-ink-600">{item.label}</dt>
							<dd className="order-first font-display text-5xl font-bold tracking-tight text-ocean-800">{item.value}</dd>
						</div>
					))}
				</dl>
			</section>

			{/* ---------- featured work: bento ---------- */}
			<section className="bg-white py-24 lg:py-28" aria-labelledby="featured">
				<div className="container-page">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<SectionHead id="featured" eyebrow="Featured work" title="From Bangla medical AI to brain–computer interfaces" />
						<Link to={NAV.projects.to} className="btn btn-ghost">
							{NAV.projects.label}
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</div>
					<ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{lead && (
							<Reveal as="li" className="md:col-span-2 lg:row-span-2">
								<ProjectCard project={lead} size="large" />
							</Reveal>
						)}
						{rest.map((project, index) => (
							<Reveal as="li" key={project.slug} delay={((index % 2) + 1) as 1 | 2}>
								<ProjectCard project={project} />
							</Reveal>
						))}
					</ul>
				</div>
			</section>

			{/* ---------- HSIL spotlight ---------- */}
			{hsil?.image && (
				<section className="surface-sky relative overflow-hidden py-24 lg:py-28" aria-labelledby="hsil-spotlight">
					<div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<Reveal className="relative">
							<div className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] bg-ember-200" aria-hidden="true" />
							<FramedPhoto name={hsil.image.name} alt={hsil.image.alt} sizes="(min-width: 1024px) 45vw, 100vw" className="relative aspect-[4/3] shadow-card-lg" />
						</Reveal>
						<Reveal delay={1}>
							<p className="node-label mb-4">Spotlight</p>
							<h2 id="hsil-spotlight" className="text-[clamp(2rem,4.2vw,3.25rem)] text-balance">
								Bangladesh’s hub for Harvard’s health systems hackathon
							</h2>
							<p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
								Since 2025 IRIIC has hosted the only Bangladesh hub of the Health Systems Innovation Lab Hackathon run by the Harvard T.H. Chan School of Public Health, where teams build AI solutions for real health system problems.
							</p>
							<dl className="mt-8 grid max-w-md grid-cols-2 gap-4">
								<div className="card flex flex-col p-5">
									<dt className="text-sm text-ink-600">Applications in 2026</dt>
									<dd className="order-first font-display text-3xl font-bold text-ocean-800">650+</dd>
								</div>
								<div className="card flex flex-col p-5">
									<dt className="text-sm text-ink-600">Participants selected</dt>
									<dd className="order-first font-display text-3xl font-bold text-ocean-800">98</dd>
								</div>
							</dl>
							<div className="mt-8 flex flex-wrap gap-3">
								{hsilLinks.map((item) => (
									<Link key={item.slug} to={`/projects/${item.slug}/`} className="btn btn-ghost btn-sm">
										{item.title}
									</Link>
								))}
							</div>
						</Reveal>
					</div>
				</section>
			)}

			{/* ---------- IRIIC in pictures ---------- */}
			<section className="bg-paper py-24 lg:py-28" aria-labelledby="moments">
				<div className="container-page">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<SectionHead id="moments" eyebrow="IRIIC in pictures" title="Workshops, visits, cohorts and talks" />
						<Link to={NAV.news.to} className="btn btn-ghost">
							{NAV.news.label}
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</div>
					<div className="mt-12">
						<PhotoMosaic items={MOMENTS} label="Photos from IRIIC events" />
					</div>
				</div>
			</section>

			{/* ---------- partners: logo wall ---------- */}
			<section className="bg-white py-24 lg:py-28" aria-labelledby="partners-heading">
				<div className="container-page">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<SectionHead id="partners-heading" eyebrow="Partners" title="Universities, hospitals, industry and government" />
						<Link to={NAV.partners.to} className="btn btn-ghost">
							{NAV.partners.label}
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</div>
					<ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-ocean-700/12 bg-ocean-700/12 sm:grid-cols-3 lg:grid-cols-6">
						{logos.slice(0, 18).map((partner) => (
							<li key={partner.name} className="grid place-items-center bg-white px-4 py-6">
								<PartnerLogo partner={partner} compact />
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ---------- careers + news ---------- */}
			<section className="bg-paper py-24 lg:py-28">
				<div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
					<Reveal>
						<p className="node-label mb-4">Careers</p>
						<h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">{open.length > 0 ? `${open.length} open ${open.length === 1 ? 'role' : 'roles'}` : 'No open positions right now'}</h2>
						{open.length > 0 ? (
							<ul className="mt-6 space-y-3">
								{open.slice(0, 4).map((vacancy) => (
									<li key={vacancy.slug}>
										<Link to={`/careers/${vacancy.slug}/`} className="card group flex items-center justify-between gap-4 p-5 transition-shadow hover:shadow-card-lg">
											<span>
												<span className="block font-display text-lg font-bold text-ink-900">{vacancy.title}</span>
												<span className="text-sm text-ink-600">
													{vacancy.project}
													{vacancy.deadline && ` · Apply by ${formatDeadline(vacancy.deadline)}`}
												</span>
											</span>
											<span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ocean-50 text-ocean-700 transition-colors group-hover:bg-ocean-700 group-hover:text-white motion-reduce:transition-none">
												<Icon name="arrow-right" className="h-5 w-5" />
											</span>
										</Link>
									</li>
								))}
							</ul>
						) : (
							<p className="mt-4 max-w-md leading-relaxed text-ink-600">New roles are announced on IRIIC’s Facebook page. Past roles are kept on the careers page.</p>
						)}
						<Link to={NAV.careers.to} className="link mt-6 inline-flex items-center gap-1.5">
							{NAV.careers.label}
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</Reveal>
					<Reveal delay={2}>
						<p className="node-label mb-4">In the news</p>
						<h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">Latest coverage</h2>
						<ul className="mt-6 space-y-3">
							{latestPress.map((item) => (
								<li key={item.slug} className="card p-5">
									<p className="text-sm font-semibold text-ink-600">
										{item.outlet}
										{item.dateLabel && ` · ${item.dateLabel}`}
									</p>
									<SmartLink href={item.url} className="link mt-1 inline-block font-display text-lg leading-snug">
										{item.headline}
									</SmartLink>
								</li>
							))}
						</ul>
						<Link to={NAV.news.to} className="link mt-6 inline-flex items-center gap-1.5">
							{NAV.news.label}
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</Reveal>
				</div>
			</section>

			<CtaBand />
		</>
	);
}
