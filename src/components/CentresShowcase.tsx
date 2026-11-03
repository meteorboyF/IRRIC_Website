import { Link } from 'react-router';
import { centres } from '../data/about';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { SmartLink } from './SmartLink';
import { UNIT_ART } from './UnitArt';
import { NAV } from './nav';

/** Grid spans: two wide cards over three narrow ones on large screens. */
const SPANS = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'md:col-span-2 lg:col-span-2'];

/** The five units on the dark band, each with its own line illustration. */
export function CentresShowcase({ showLink = true }: { showLink?: boolean }) {
	return (
		<section className="surface-deep traces-light on-dark relative overflow-hidden py-24 lg:py-28" aria-labelledby="centres">
			<div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-ocean-700/30 blur-3xl" aria-hidden="true" />
			<div className="container-page relative">
				<div className="flex flex-wrap items-end justify-between gap-6">
					<div className="max-w-2xl">
						<p className="node-label mb-4">Under one roof</p>
						<h2 id="centres" className="text-[clamp(2rem,4.4vw,3.4rem)] text-balance text-white">
							Five labs and centres, <span className="text-ember-300">one institute</span>
						</h2>
						<p className="mt-4 text-lg leading-relaxed text-white/75">From fundamental research to startups, policy and industry partnerships.</p>
					</div>
					{showLink && (
						<Link to={NAV.about.to} className="btn btn-ghost-dark">
							{NAV.about.label}
							<Icon name="arrow-right" className="h-4 w-4" />
						</Link>
					)}
				</div>

				<ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
					{centres.map((centre, index) => {
						const Art = UNIT_ART[index] ?? UNIT_ART[0];
						const url = 'url' in centre ? centre.url : undefined;
						return (
							<Reveal as="li" key={centre.name} delay={(index % 3) as 0 | 1 | 2} className={`unit-card group flex flex-col overflow-hidden rounded-[1.75rem] ${SPANS[index] ?? ''}`}>
								<div className={`unit-art relative ${index < 2 ? 'h-44 lg:h-52' : 'h-40'} px-6 pt-6`}>
									<Art />
								</div>
								<div className="flex flex-1 flex-col p-6 pt-4 lg:p-7 lg:pt-4">
									<h3 className="text-2xl text-white">{centre.name}</h3>
									<p className="mt-1 text-sm font-semibold text-ocean-200">{centre.full}</p>
									<p className="mt-3 flex-1 leading-relaxed text-white/75">{centre.detail}</p>
									{url && (
										<SmartLink href={url} className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ember-300 underline-offset-4 hover:underline">
											Visit {centre.name}
											<Icon name="arrow-up-right" className="h-4 w-4" />
										</SmartLink>
									)}
								</div>
							</Reveal>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
