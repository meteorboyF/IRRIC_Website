import { Link } from 'react-router';
import { centres } from '../data/about';
import { partners } from '../data/partners';
import { press } from '../data/press';
import { projects } from '../data/projects';
import { formatDeadline, openVacancies } from '../data/vacancies';
import { Icon, type IconName } from '../components/Icon';
import { Marquee } from '../components/Marquee';
import { PartnerLogo } from '../components/PartnerLogo';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { CtaBand } from '../components/CtaBand';
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

const PILLARS: { title: string; text: string; icon: IconName }[] = [
	{ title: 'Research', text: 'Applied work in AI, digital health, brain–computer interfaces and IoT, much of it with universities and hospitals abroad.', icon: 'flask' },
	{ title: 'Innovation', text: 'Prototypes built for Bangladeshi settings: Bangla-language tools, low-cost screening apps and community health models.', icon: 'chip' },
	{ title: 'Incubation', text: 'LaunchPad cohorts and the Harvard HSIL Hackathon hub help student and early-stage teams turn ideas into ventures.', icon: 'rocket' },
	{ title: 'Commercialisation', text: 'Taking research to market with industry and government, as CMED did when it became CMED Health.', icon: 'handshake' }
];

export default function Home() {
	const featured = projects.filter((project) => project.featured).slice(0, 6);
	const research = projects.filter((project) => project.type === 'Research and innovation').length;
	const agreements = projects.filter((project) => project.type === 'Partnership').length;
	const hackathons = projects.filter((project) => project.slug.startsWith('harvard-hsil-hackathon')).length;
	const open = openVacancies(BUILD_DATE);
	const latestPress = [...press].sort((a, b) => b.sortKey - a.sortKey).slice(0, 3);
	const hsil = projects.find((project) => project.slug === 'harvard-hsil-hackathon-2025');
	const [heroWidth, heroHeight] = imageSize('hero/home');

	return (
		<>
			{/* ---------- hero ---------- */}
			<section className="on-dark photo-duo scrim-side relative flex min-h-[78svh] items-center text-white">
				<img src={img('hero/home', 'sm')} srcSet={srcSet('hero/home')} sizes="100vw" alt="Teams of students and young professionals at work during the Harvard HSIL Hackathon at IRIIC" width={heroWidth} height={heroHeight} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
				<div className="container-page relative z-10 py-24">
					<p className="eyebrow mb-5">Institute of Research, Innovation, Incubation and Commercialization · UIU</p>
					<h1 className="max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold text-balance">
						<span className="line-mask">
							<span>Research that leaves the lab.</span>
						</span>
					</h1>
					<p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
						IRIIC brings United International University’s labs together with industry and government to turn work in AI, digital health and brain–computer interfaces into tools people use, and into startups.
					</p>
					<div className="mt-9 flex flex-wrap gap-3">
						<Link to={CTA.to} className="btn btn-cta">
							{CTA.label}
						</Link>
						<Link to={NAV.projects.to} className="btn btn-ghost-dark">
							Explore projects
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* ---------- documented work, counted from the data ---------- */}
			<section aria-label="IRIIC in numbers" className="border-b border-ink-900/10 bg-white">
				<dl className="container-page grid grid-cols-2 gap-px py-2 lg:grid-cols-4">
					{[
						{ value: research, label: 'research and innovation projects documented' },
						{ value: hackathons, label: 'Harvard HSIL Hackathons hosted as Bangladesh’s hub' },
						{ value: agreements, label: 'signed partnership agreements' },
						{ value: centres.length, label: 'labs and centres under one institute' }
					].map((item) => (
						<div key={item.label} className="flex flex-col px-2 py-6 sm:px-4">
							<dt className="text-sm leading-snug text-ink-600">{item.label}</dt>
							<dd className="order-first font-display text-4xl font-bold text-ocean-700">{item.value}</dd>
						</div>
					))}
				</dl>
			</section>

			{/* ---------- 01 what we do ---------- */}
			<section className="bg-paper py-24 lg:py-32" aria-labelledby="what-we-do">
				<div className="container-page">
					<SectionHead number="01" id="what-we-do" eyebrow="What we do" title="Four stages, one institute" lede="IRIIC’s name is its method: research that leads to innovation, incubation that turns it into ventures, and commercialisation that gets it to people." />
					<ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{PILLARS.map((pillar, index) => (
							<Reveal as="li" key={pillar.title} delay={(index % 4) as 0 | 1 | 2 | 3} className="card p-7">
								<span className="grid h-11 w-11 place-items-center rounded-xl bg-ocean-50 text-ocean-700">
									<Icon name={pillar.icon} className="h-6 w-6" />
								</span>
								<h3 className="mt-5 font-display text-xl font-bold">{pillar.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-600">{pillar.text}</p>
							</Reveal>
						))}
					</ul>
					<Link to={NAV.programmes.to} className="link mt-10 inline-flex items-center gap-1.5">
						See how to work with each programme
						<Icon name="arrow-right" className="h-4 w-4" />
					</Link>
				</div>
			</section>

			{/* ---------- 02 featured work ---------- */}
			<section className="border-y border-ink-900/8 bg-white py-24 lg:py-32" aria-labelledby="featured">
				<div className="container-page">
					<SectionHead number="02" id="featured" eyebrow="Featured work" title="From Bangla medical AI to brain–computer interfaces" />
					<ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{featured.map((project, index) => (
							<Reveal as="li" key={project.slug} delay={(index % 3) as 0 | 1 | 2}>
								<ProjectCard project={project} />
							</Reveal>
						))}
					</ul>
					<Link to={NAV.projects.to} className="btn btn-primary mt-12">
						See all {projects.length} projects
						<Icon name="arrow-right" className="h-4 w-4" />
					</Link>
				</div>
			</section>

			{/* ---------- HSIL spotlight ---------- */}
			{hsil?.image && (
				<section className="on-dark photo-duo scrim-side relative text-white" aria-labelledby="hsil-spotlight">
					<img src={img(hsil.image.name, 'sm')} srcSet={srcSet(hsil.image.name)} sizes="100vw" alt={hsil.image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
					<div className="container-page relative z-10 grid gap-10 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
						<Reveal>
							<p className="eyebrow">Spotlight</p>
							<h2 id="hsil-spotlight" className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] font-bold text-balance">
								Bangladesh’s hub for Harvard’s health systems hackathon
							</h2>
							<p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
								Since 2025 IRIIC has hosted the only Bangladesh hub of the Harvard T.H. Chan School of Public Health’s Health Systems Innovation Lab Hackathon, where teams build AI solutions for real health system problems.
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Link to="/projects/harvard-hsil-hackathon-2026/" className="btn btn-ghost-dark">
									HSIL Hackathon 2026
								</Link>
								<Link to="/projects/harvard-hsil-hackathon-2025/" className="btn btn-ghost-dark">
									HSIL Hackathon 2025
								</Link>
							</div>
						</Reveal>
						<Reveal delay={2} className="self-end">
							<dl className="grid gap-4 rounded-2xl border border-white/15 bg-ink-950/60 p-6">
								<div>
									<dt className="text-sm text-white/70">Applications to the 2026 Dhaka hub</dt>
									<dd className="font-display text-3xl font-bold">650+</dd>
								</div>
								<div className="border-t border-white/12 pt-4">
									<dt className="text-sm text-white/70">Participants selected in 2026</dt>
									<dd className="font-display text-3xl font-bold">98</dd>
								</div>
							</dl>
						</Reveal>
					</div>
				</section>
			)}

			{/* ---------- 03 centres ---------- */}
			<section className="traces bg-paper py-24 lg:py-32" aria-labelledby="centres">
				<div className="container-page">
					<SectionHead number="03" id="centres" eyebrow="Under one roof" title="The labs and centres of IRIIC" />
					<ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{centres.map((centre, index) => (
							<Reveal as="li" key={centre.name} delay={(index % 3) as 0 | 1 | 2} className="card p-7">
								<h3 className="font-display text-xl font-bold">{centre.name}</h3>
								<p className="mt-1 text-sm font-semibold text-ocean-700">{centre.full}</p>
								<p className="mt-3 text-sm leading-relaxed text-ink-600">{centre.detail}</p>
							</Reveal>
						))}
					</ul>
					<Link to={NAV.about.to} className="link mt-10 inline-flex items-center gap-1.5">
						More about IRIIC
						<Icon name="arrow-right" className="h-4 w-4" />
					</Link>
				</div>
			</section>

			{/* ---------- partners ---------- */}
			<section className="border-y border-ink-900/8 bg-white py-20 lg:py-24" aria-labelledby="partners-heading">
				<div className="container-page">
					<SectionHead id="partners-heading" eyebrow="Partners" title="Working with universities, hospitals, industry and government" />
					<div className="mt-10">
						<Marquee label="Partner logos">
							{partners
								.filter((partner) => partner.logo)
								.map((partner) => (
									<li key={partner.name}>
										<PartnerLogo partner={partner} />
									</li>
								))}
						</Marquee>
					</div>
					<Link to={NAV.partners.to} className="link mt-8 inline-flex items-center gap-1.5">
						All partners
						<Icon name="arrow-right" className="h-4 w-4" />
					</Link>
				</div>
			</section>

			{/* ---------- careers + news ---------- */}
			<section className="bg-paper py-20 lg:py-24">
				<div className="container-page grid gap-12 lg:grid-cols-2">
					<Reveal>
						<p className="eyebrow">Careers</p>
						<h2 className="mt-3 font-display text-3xl font-bold">{open.length > 0 ? `${open.length} open ${open.length === 1 ? 'role' : 'roles'}` : 'No open positions right now'}</h2>
						{open.length > 0 ? (
							<ul className="mt-6 space-y-3">
								{open.slice(0, 4).map((vacancy) => (
									<li key={vacancy.slug}>
										<Link to={`/careers/${vacancy.slug}/`} className="card group flex items-center justify-between gap-4 p-5 transition-shadow hover:shadow-card-lg">
											<span>
												<span className="block font-display font-bold text-ink-900">{vacancy.title}</span>
												<span className="text-sm text-ink-600">
													{vacancy.project}
													{vacancy.deadline && ` · Apply by ${formatDeadline(vacancy.deadline)}`}
												</span>
											</span>
											<Icon name="arrow-right" className="h-5 w-5 shrink-0 text-ocean-700 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
										</Link>
									</li>
								))}
							</ul>
						) : (
							<p className="mt-4 max-w-md leading-relaxed text-ink-600">New roles are announced on IRIIC’s Facebook page. Past roles are kept on the careers page.</p>
						)}
						<Link to={NAV.careers.to} className="link mt-6 inline-flex items-center gap-1.5">
							Go to careers
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</Reveal>
					<Reveal delay={2}>
						<p className="eyebrow">In the news</p>
						<h2 className="mt-3 font-display text-3xl font-bold">Latest coverage</h2>
						<ul className="mt-6 divide-y divide-ink-900/10 border-y border-ink-900/10">
							{latestPress.map((item) => (
								<li key={item.slug} className="py-4">
									<p className="text-xs font-semibold text-ink-600">
										{item.outlet}
										{item.dateLabel && ` · ${item.dateLabel}`}
									</p>
									<SmartLink href={item.url} className="link mt-1 inline-block text-base">
										{item.headline}
									</SmartLink>
								</li>
							))}
						</ul>
						<Link to={NAV.news.to} className="link mt-6 inline-flex items-center gap-1.5">
							All news
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					</Reveal>
				</div>
			</section>

			<CtaBand />
		</>
	);
}
