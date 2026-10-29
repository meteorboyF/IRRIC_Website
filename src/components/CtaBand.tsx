import { Link } from 'react-router';
import { Reveal } from './Reveal';
import { Traces } from './Traces';
import { CTA } from './nav';

/** Closing panel with the site's single conversion CTA. */
export function CtaBand({ title = 'Bring a problem worth solving', text = 'Industry partners, government bodies, researchers and founders work with IRIIC on research collaborations, incubation and training. Tell us what you have in mind.' }: { title?: string; text?: string }) {
	return (
		<section className="bg-paper py-20 lg:py-24">
			<div className="container-page">
				<Reveal className="surface-deep traces-light relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
					<Traces className="pointer-events-none absolute -right-20 -bottom-24 w-[34rem] max-w-none text-ocean-700" />
					<div className="on-dark relative grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
						<div>
							<h2 className="text-[clamp(1.9rem,4vw,3rem)] text-balance text-white">{title}</h2>
							<p className="mt-4 max-w-2xl leading-relaxed text-white/80">{text}</p>
						</div>
						<Link to={CTA.to} className="btn btn-cta justify-self-start lg:justify-self-end">
							{CTA.label}
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
