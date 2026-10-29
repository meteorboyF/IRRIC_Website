import { Link } from 'react-router';
import { centres } from '../data/about';
import { partners } from '../data/partners';
import { press } from '../data/press';
import { projectBySlug, projects } from '../data/projects';
import { formatDeadline, openVacancies } from '../data/vacancies';
import { CtaBand } from '../components/CtaBand';
import { Icon, type IconName } from '../components/Icon';
import { PartnerLogo } from '../components/PartnerLogo';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { Traces } from '../components/Traces';
import { CTA, NAV } from '../components/nav';
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

const CENTRE_ICONS: IconName[] = ['flask', 'chip', 'rocket', 'newspaper', 'handshake'];

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
				<div className="container-page relative grid items-center gap-14 pt-10 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-16 lg:pb-20">
					<div>
						<p className="rise inline-flex items-center gap-2 rounded-full border border-ocean-700/15 bg-white/70 px-4 py-1.5 text-sm font-semibold text-ocean-800">
							<span className="h-2 w-2 rounded-full bg-ember-400" aria-hidden="true" />
							United International University · Dhaka
						</p>
						<h1 id="hero-title" className="rise rise-2 mt-6 text-[clamp(3rem,7.4vw,5.75rem)] leading-[0.96] tracking-[-0.035em]">
							From the lab
							<span className="block">
								to the <span className="mark">market</span>.
							</span>
						</h1>
						<p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-700 sm:text-xl">
							IRIIC, the Institute of Research, Innovation, Incubation and Commercialization, brings UIU’s labs together with industry and government to turn AI, digital health and brain–computer interface research into tools people use and companies that last.
						</p>
						<div className="rise rise-3 mt-9 flex flex-wrap gap-3">
							<Link to={CTA.to} className="btn btn-cta">
								{CTA.label}
								<Icon name="arrow-right" className="h-4 w-4" />
							</Link>
							<Link to={NAV.projects.to} className="btn btn-ghost">
								{NAV.projects.label}
							</Link>
						</div>
					</div>

					{/* Photo collage, framed in the logo's sky and orange */}
					<div className="rise rise-2 relative mx-auto w-full max-w-xl pb-6 lg:max-w-none">
						<div className="relative ml-auto w-[84%]">
							<div className="absolute -top-4 -right-4 h-full w-full rounded-[1.75rem] bg-ocean-200" aria-hidden="true" />
							<FramedPhoto name="hero/home" alt="Teams of students and young professionals at work during the Harvard HSIL Hackathon at IRIIC" sizes="(min-width: 1024px) 38vw, 84vw" className="relative aspect-[4/5] shadow-card-lg" priority />
						</div>
						<div className="absolute bottom-0 left-0 w-[52%]">
							<div className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.75rem] bg-ember-300" aria-hidden="true" />
							<FramedPhoto name="projects/launchpad-cycle-1/5" alt="LaunchPad finalists, mentors and judges together on stage" sizes="(min-width: 1024px) 22vw, 50vw" className="relative aspect-[4/3] border-4 border-white shadow-card-lg" />
						</div>
						<div className="card absolute top-4 left-0 flex max-w-[12.5rem] items-start gap-3 p-3 sm:top-10 sm:max-w-[15rem] sm:p-4">
							<span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember-100 text-ember-700 sm:h-10 sm:w-10">
								<Icon name="trophy" className="h-5 w-5" />
							</span>
							<span>
								<span className="block font-display text-base leading-tight font-bold text-ink-900">Bangladesh’s hub</span>
								<span className="mt-0.5 block text-sm leading-snug text-ink-600">Harvard HSIL Hackathon, 2025 and 2026</span>
							</span>
						</div>
					</div>
				</div>

				{/* The lab-to-market pipeline */}
				<div className="container-page relative pb-16 lg:pb-20">
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
								<h2 className="mt-4 text-xl">{stage.title}</h2>
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
						{ value: research, label: 'research and innovation projects documented' },
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

			{/* ---------- centres, as a connected chain ---------- */}
			<section className="bg-paper py-24 lg:py-28" aria-labelledby="centres">
				<div className="container-page">
					<SectionHead id="centres" eyebrow="Under one roof" title="Five labs and centres, one institute" lede="Each unit covers a different stage, from fundamental research to policy and industry partnerships." />
					<div className="relative mt-14">
						<span className="absolute top-[2.15rem] right-[10%] left-[10%] hidden h-0.5 bg-ocean-200 lg:block" aria-hidden="true" />
						<ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
							{centres.map((centre, index) => (
								<Reveal as="li" key={centre.name} delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
									<span className="relative z-10 mb-5 grid h-[4.3rem] w-[4.3rem] place-items-center rounded-full border-4 border-paper bg-white text-ocean-700 shadow-card">
										<Icon name={CENTRE_ICONS[index] ?? 'chip'} className="h-7 w-7" />
									</span>
									<h3 className="text-xl">{centre.name}</h3>
									<p className="mt-1 text-sm font-semibold text-ocean-700">{centre.full}</p>
									<p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">{centre.detail}</p>
								</Reveal>
							))}
						</ol>
					</div>
					<Link to={NAV.about.to} className="btn btn-ghost mt-12">
						{NAV.about.label}
						<Icon name="arrow-right" className="h-4 w-4" />
					</Link>
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
