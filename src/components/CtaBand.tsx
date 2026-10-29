import { Link } from 'react-router';
import { Reveal } from './Reveal';
import { CTA } from './nav';

/** Closing band with the site's single conversion CTA. */
export function CtaBand({ title = 'Bring a problem worth solving', text = 'Industry partners, government bodies, researchers and founders work with IRIIC on research collaborations, incubation and training. Tell us what you have in mind.' }: { title?: string; text?: string }) {
	return (
		<section className="on-dark band-dark grain py-20 lg:py-24">
			<div className="container-page max-w-4xl text-center">
				<Reveal>
					<h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-bold text-balance">{title}</h2>
					<p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/80">
						{text}
					</p>
					<Link to={CTA.to} className="btn btn-cta mt-9">
						{CTA.label}
					</Link>
				</Reveal>
			</div>
		</section>
	);
}
