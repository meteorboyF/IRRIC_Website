import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Icon, type IconName } from './Icon';
import { CTA, NAV } from './nav';
import { img, imageSize, srcSet } from '../lib/img';
import { prefersReducedMotion } from '../lib/motion';
import { useHydrated } from '../hooks/useHydrated';

interface Slide {
	/** Completes the headline "From the lab to …". */
	word: string;
	kicker: string;
	text: string;
	icon: IconName;
	photo: string;
	alt: string;
	/** Project page the slide links to. */
	slug: string;
	linkLabel: string;
}

/** Each slide is a different side of IRIIC's work, with a photo from that work. */
const SLIDES: [Slide, ...Slide[]] = [
	{ word: 'life', kicker: 'Research', text: 'AI, digital health and brain–computer interface research', icon: 'flask', photo: 'projects/aston-university-visit-2025/cover', alt: 'Visitors looking at research project posters in the IRIIC hub', slug: 'aston-university-visit-2025', linkLabel: 'Aston University visit' },
	{ word: 'the clinic', kicker: 'Digital health', text: 'AI screening brought to future doctors and nurses', icon: 'users', photo: 'projects/endometriosis-ai-workshop-2025/2', alt: 'A full hall of medical and nursing students at the endometriosis and AI workshop', slug: 'endometriosis-ai-workshop-2025', linkLabel: 'Endometriosis and AI workshop' },
	{ word: 'the market', kicker: 'Incubation', text: 'LaunchPad startup cohorts open to every university', icon: 'rocket', photo: 'projects/launchpad-cycle-1/cover', alt: 'LaunchPad finalists, mentors and judges in a group photo on stage', slug: 'launchpad-cycle-1', linkLabel: 'LaunchPad, cycle 1' },
	{ word: 'industry', kicker: 'Training', text: 'Hands-on AI programmes for professionals', icon: 'school', photo: 'projects/ai-essentials-capital-markets-2025/2', alt: 'The training room during a session of the AI Essentials programme', slug: 'ai-essentials-capital-markets-2025', linkLabel: 'AI Essentials training' },
	{ word: 'the world', kicker: 'Hackathons', text: 'Bangladesh’s hub for Harvard’s global health systems hackathon', icon: 'trophy', photo: 'projects/harvard-hsil-hackathon-2025/cover', alt: 'Hackathon participants working together at laptops at the IRIIC Dhaka hub', slug: 'harvard-hsil-hackathon-2025', linkLabel: 'Harvard HSIL Hackathon 2025' }
];

/** Keep in step with the .slide-progress animation duration in app.css. */
const INTERVAL = 6500;
const HEADLINE = `From the lab to ${SLIDES.map((slide) => slide.word).join(', ')}.`;

function SlidePhoto({ slide, active, priority, sizes }: { slide: Slide; active: boolean; priority: boolean; sizes: string }) {
	const [width, height] = imageSize(slide.photo);
	return <img src={img(slide.photo, 'sm')} srcSet={srcSet(slide.photo)} sizes={sizes} alt={active ? slide.alt : ''} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'low'} className={`slide-img absolute inset-0 h-full w-full object-cover ${active ? 'is-active' : ''}`} />;
}

/**
 * Home hero: the headline's last word and the photo collage rotate together
 * through IRIIC's areas of work. Autoplay stops for reduced motion, on hover
 * or focus, while the tab is hidden, and whenever the reader pauses it.
 */
export function HeroShowcase() {
	const carousel = useRef<HTMLElement>(null);
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const [held, setHeld] = useState(false);
	// null until the reader chooses; then their choice wins over the default.
	const [choice, setChoice] = useState<boolean | null>(null);
	// Decided after hydration so the prerendered HTML is identical for everyone.
	const hydrated = useHydrated();
	const autoplay = hydrated && (choice ?? !prefersReducedMotion());

	const go = useCallback((next: number) => setIndex((next + SLIDES.length) % SLIDES.length), []);
	const running = autoplay && !paused && !held;

	useEffect(() => {
		if (!running) return;
		const timer = window.setTimeout(() => go(index + 1), INTERVAL);
		return () => window.clearTimeout(timer);
	}, [running, index, go]);

	// Hovering or focusing anything in the carousel holds it on the current slide.
	useEffect(() => {
		const node = carousel.current;
		if (!node) return;
		const hold = () => setPaused(true);
		const release = () => setPaused(false);
		const onFocusOut = (event: FocusEvent) => {
			if (!node.contains(event.relatedTarget as Node | null)) release();
		};
		node.addEventListener('mouseenter', hold);
		node.addEventListener('mouseleave', release);
		node.addEventListener('focusin', hold);
		node.addEventListener('focusout', onFocusOut);
		return () => {
			node.removeEventListener('mouseenter', hold);
			node.removeEventListener('mouseleave', release);
			node.removeEventListener('focusin', hold);
			node.removeEventListener('focusout', onFocusOut);
		};
	}, []);

	useEffect(() => {
		const onVisibility = () => setHeld(document.hidden);
		document.addEventListener('visibilitychange', onVisibility);
		return () => document.removeEventListener('visibilitychange', onVisibility);
	}, []);

	const slide = SLIDES[index] ?? SLIDES[0];
	const next = SLIDES[(index + 1) % SLIDES.length] ?? SLIDES[0];

	return (
		<div className="container-page relative grid items-center gap-14 pt-10 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-16 lg:pb-20">
			<div>
				<p className="rise inline-flex items-center gap-2 rounded-full border border-ocean-700/15 bg-white/70 px-4 py-1.5 text-sm font-semibold text-ocean-800">
					<span className="h-2 w-2 rounded-full bg-ember-400" aria-hidden="true" />
					United International University · Dhaka
				</p>
				<h1 id="hero-title" className="rise rise-2 mt-6 text-[clamp(2.9rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.035em]">
					<span className="sr-only">{HEADLINE}</span>
					<span aria-hidden="true">
						From the lab
						<span className="block">
							to{' '}
							<span key={slide.word} className="mark word-swap">
								{slide.word}
							</span>
							.
						</span>
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

			{/* Photo collage that rotates through IRIIC's work */}
			<section
				className="rise rise-2 relative mx-auto w-full max-w-xl pb-6 lg:max-w-none"
				aria-roledescription="carousel"
				aria-label="IRIIC at work"
				ref={carousel}
			>
				<div className="relative ml-auto w-[84%]">
					<div className="absolute -top-4 -right-4 h-full w-full rounded-[1.75rem] bg-ocean-200" aria-hidden="true" />
					<div className="frame relative aspect-[4/5] shadow-card-lg" aria-live={running ? 'off' : 'polite'}>
						{SLIDES.map((item, itemIndex) => (
							<SlidePhoto key={item.photo} slide={item} active={itemIndex === index} priority={itemIndex === 0} sizes="(min-width: 1024px) 38vw, 84vw" />
						))}
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/80 via-ink-950/25 to-transparent" aria-hidden="true" />
						<div className="absolute inset-x-0 bottom-0 flex items-end justify-end p-4 sm:p-5" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${SLIDES.length}: ${slide.kicker}`}>
							<Link to={`/projects/${slide.slug}/`} className="group inline-flex max-w-[70%] items-center gap-2 rounded-full bg-white/95 py-2 pr-2 pl-4 text-sm font-semibold text-ink-900 shadow-card backdrop-blur transition-colors hover:bg-white">
								<span className="truncate">{slide.linkLabel}</span>
								<span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ocean-700 text-white transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none">
									<Icon name="arrow-right" className="h-3.5 w-3.5" />
								</span>
							</Link>
						</div>
					</div>
				</div>

				{/* The next slide, as a framed inset that advances the carousel */}
				<div className="absolute bottom-0 left-0 w-[46%] sm:w-[44%]">
					<div className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.75rem] bg-ember-300" aria-hidden="true" />
					<button type="button" onClick={() => go(index + 1)} className="frame group relative block aspect-[4/3] w-full border-4 border-white shadow-card-lg" aria-label={`Next slide: ${next.kicker}`}>
						{SLIDES.map((item, itemIndex) => (
							<img key={item.photo} src={img(item.photo, 'sm')} alt="" width={imageSize(item.photo)[0]} height={imageSize(item.photo)[1]} loading="lazy" className={`slide-img absolute inset-0 h-full w-full object-cover ${itemIndex === (index + 1) % SLIDES.length ? 'is-active' : ''}`} />
						))}
						<span className="absolute inset-0 bg-ocean-950/35 opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" aria-hidden="true" />
						<span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink-900 shadow-card">
							Next
							<Icon name="chevron-right" className="h-3.5 w-3.5" />
						</span>
					</button>
				</div>

				{/* What this slide shows */}
				<div className="card absolute top-4 left-0 flex max-w-[13rem] items-start gap-3 p-3 sm:top-10 sm:max-w-[16.5rem] sm:p-4">
					<span key={slide.icon} className="word-swap grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember-100 text-ember-700 sm:h-10 sm:w-10">
						<Icon name={slide.icon} className="h-5 w-5" />
					</span>
					<span key={slide.kicker} className="word-swap">
						<span className="block font-display text-base leading-tight font-bold text-ink-900">{slide.kicker}</span>
						<span className="mt-0.5 block text-sm leading-snug text-ink-600">{slide.text}</span>
					</span>
				</div>

				{/* Controls */}
				<div className="mt-8 flex items-center justify-end gap-3 pl-[50%] sm:mt-9">
					<ol className="flex flex-1 gap-1.5" aria-label="Choose a slide">
						{SLIDES.map((item, itemIndex) => (
							<li key={item.photo} className="flex-1">
								<button type="button" onClick={() => go(itemIndex)} className="group block w-full py-2" aria-label={`Slide ${itemIndex + 1}: ${item.kicker}`} aria-current={itemIndex === index ? 'true' : undefined}>
									<span className="block h-1 overflow-hidden rounded-full bg-ocean-700/15 transition-colors group-hover:bg-ocean-700/30">
										<span key={itemIndex === index ? `on-${index}-${running}` : 'off'} className={`slide-progress block h-full rounded-full bg-ocean-700 ${itemIndex === index ? (running ? 'is-running' : 'is-done') : ''}`} />
									</span>
								</button>
							</li>
						))}
					</ol>
					<button type="button" onClick={() => setChoice(!autoplay)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ocean-700/20 bg-white text-ocean-800 transition-colors hover:border-ocean-700/50" aria-label={autoplay ? 'Stop the slideshow' : 'Play the slideshow'}>
						<Icon name={autoplay ? 'pause' : 'play'} className="h-4 w-4" />
					</button>
				</div>
			</section>
		</div>
	);
}
