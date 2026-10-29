import { Link } from 'react-router';
import { centres, milestones, recognition } from '../data/about';
import { people } from '../data/people';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { ProjectImage } from '../components/ProjectImage';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { NAV } from '../components/nav';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'About', description: 'How IRIIC brings AIMS Lab, the BCI Research Lab, the University Innovation Hub and two research centres together at United International University, and what it is for.', path: '/about/', image: 'hero/about' });

export default function About() {
	const director = people.find((person) => person.group === 'Director');
	return (
		<>
			<PageIntro eyebrow="About" title="One institute between the lab and the market" lede="IRIIC was set up at United International University to close the gap between academia, industry and government, and to turn social and industrial problems into working solutions." photo="hero/about" photoAlt="World Bank delegation members talking with IRIIC hosts at United International University" />

			<section className="bg-paper py-24 lg:py-32" aria-labelledby="purpose">
				<div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
					<SectionHead number="01" id="purpose" eyebrow="Purpose" title="Why IRIIC exists" />
					<Reveal delay={1} className="prose-body">
						<p>Bangladesh imports much of the technology it uses. IRIIC’s aim is to help the country build its own: to run research in Fourth Industrial Revolution technologies such as AI, the Internet of Things and brain–computer interfaces, to turn that research into products and intellectual property, and to train people who can lead that work.</p>
						<p>It does this by putting UIU’s research labs, its innovation hub and two centres for policy and industry collaboration under one roof, and by working with companies, hospitals, government bodies and universities in Bangladesh and abroad.</p>
						<p>The model has a track record. AIMS Lab, the oldest part of IRIIC, developed CMED, a cloud-based rural health monitoring system that became the company CMED Health.</p>
					</Reveal>
				</div>
			</section>

			<section className="border-y border-ink-900/8 bg-white py-24 lg:py-32" aria-labelledby="centres">
				<div className="container-page">
					<SectionHead number="02" id="centres" eyebrow="Structure" title="Five units, one institute" />
					<ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{centres.map((centre, index) => (
							<Reveal as="li" key={centre.name} delay={(index % 3) as 0 | 1 | 2} className="card p-7">
								<h3 className="font-display text-xl font-bold">{centre.name}</h3>
								<p className="mt-1 text-sm font-semibold text-ocean-700">{centre.full}</p>
								<p className="mt-3 text-sm leading-relaxed text-ink-600">{centre.detail}</p>
								{'url' in centre && centre.url && (
									<SmartLink href={centre.url} className="link mt-4 inline-flex items-center gap-1.5 text-sm">
										Visit the website
										<Icon name="arrow-up-right" className="h-4 w-4" />
									</SmartLink>
								)}
							</Reveal>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-paper py-24 lg:py-32" aria-labelledby="timeline">
				<div className="container-page">
					<SectionHead number="03" id="timeline" eyebrow="Timeline" title="How it came together" />
					<ol className="mt-14 grid gap-6 border-l-2 border-ocean-200 pl-6 sm:pl-8">
						{milestones.map((item, index) => (
							<Reveal as="li" key={item.title} delay={(index % 3) as 0 | 1 | 2} className="relative">
								<span className="absolute top-1.5 -left-[2.05rem] h-3.5 w-3.5 rounded-full border-2 border-paper bg-ocean-700 sm:-left-[2.55rem]" aria-hidden="true" />
								<p className="eyebrow">{item.dateLabel}</p>
								<h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
								<p className="mt-1.5 max-w-2xl leading-relaxed text-ink-600">{item.detail}</p>
							</Reveal>
						))}
					</ol>
				</div>
			</section>

			{director && (
				<section className="on-dark band-dark grain py-24 lg:py-32" aria-labelledby="director">
					<div className="container-page grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
						{director.image && (
							<Reveal>
								<ProjectImage image={director.image} sizes="(min-width: 1024px) 30vw, 80vw" className="mx-auto aspect-[4/5] max-w-sm rounded-2xl" />
							</Reveal>
						)}
						<Reveal delay={1}>
							<p className="eyebrow">Director</p>
							<h2 id="director" className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06] font-bold">
								{director.name}
							</h2>
							<p className="mt-5 max-w-2xl leading-relaxed text-white/85">
								Founder and director of IRIIC and of AIMS Lab, and founder of CMED Health. He is Professor of Digital Health and Intelligent Technology in UIU’s Department of Computer Science and Engineering, and studied computer science at AUST and BUET before a PhD in computer science and medical engineering at the University of Southampton and postdoctoral research at the University of Toronto.
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Link to={NAV.people.to} className="btn btn-ghost-dark">
									{NAV.people.label}
									<Icon name="arrow-right" className="h-4 w-4" />
								</Link>
								<SmartLink href="https://www.kmamun.com/" className="btn btn-ghost-dark">
									Personal website
									<Icon name="arrow-up-right" className="h-4 w-4" />
								</SmartLink>
							</div>
						</Reveal>
					</div>
				</section>
			)}

			<section className="bg-white py-20 lg:py-24" aria-labelledby="recognition">
				<div className="container-page">
					<SectionHead id="recognition" eyebrow="Recognition" title="Awards for the work" lede="Awards in IRIIC’s record, credited to whoever received them: the director, AIMS Lab, project teams or CMED Health." />
					<ul className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
						{recognition.map((item) => (
							<li key={item.title + item.year} className="grid gap-1 py-4 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-6">
								<span className="font-display text-lg font-bold text-ocean-700">{item.year}</span>
								<span className="font-medium text-ink-900">{item.title}</span>
								<span className="text-sm text-ink-600">{item.recipient}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			<CtaBand />
		</>
	);
}
