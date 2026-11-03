import type { ReactNode } from 'react';
import { img, imageSize, srcSet } from '../lib/img';
import { Traces } from './Traces';

interface Props {
	eyebrow: string;
	title: string;
	lede?: string;
	/** Hero image name, e.g. 'hero/about'. */
	photo: string;
	photoAlt: string;
	/** Optional second photograph, framed over the corner of the first. */
	inset?: { photo: string; alt: string };
	/** Back link above the label. */
	before?: ReactNode;
	children?: ReactNode;
}

/** Light split hero for top-level pages: copy left, framed photograph right. */
export function PageIntro({ eyebrow, title, lede, photo, photoAlt, inset, before, children }: Props) {
	const [width, height] = imageSize(photo);
	return (
		<section className="surface-sky relative overflow-hidden">
			<div className="glow-orb pointer-events-none absolute -top-24 right-[8%] h-80 w-80 rounded-full bg-ocean-200/70 blur-3xl" aria-hidden="true" />
			<div className="glow-orb pointer-events-none absolute bottom-0 left-[-6rem] h-72 w-72 rounded-full bg-ember-200/45 blur-3xl" aria-hidden="true" />
			<Traces className="pointer-events-none absolute hidden lg:block -top-10 -right-24 w-[46rem] max-w-none text-ocean-300/60" />
			<div className="container-page relative grid items-center gap-10 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-16 lg:pb-20">
				<div className="rise">
					{before && <div className="mb-6">{before}</div>}
					<p className="node-label mb-5">{eyebrow}</p>
					<h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-balance">{title}</h1>
					{lede && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">{lede}</p>}
					{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
				</div>
				<div className={`rise rise-2 relative ${inset ? 'pb-10 sm:pb-12' : ''}`}>
					<div className={`relative ${inset ? 'ml-auto w-[88%]' : ''}`}>
						<div className="absolute -right-3 -bottom-3 hidden h-full w-full rounded-[1.75rem] bg-ember-200 sm:block" aria-hidden="true" />
						<div className="frame relative aspect-[4/3] shadow-card-lg">
							<img src={img(photo, 'sm')} srcSet={srcSet(photo)} sizes="(min-width: 1024px) 45vw, 100vw" alt={photoAlt} width={width} height={height} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
						</div>
					</div>
					{inset && (
						<div className="absolute bottom-0 left-0 w-[42%]">
							<div className="frame aspect-[4/3] border-4 border-white shadow-card-lg">
								<img src={img(inset.photo, 'sm')} alt={inset.alt} width={imageSize(inset.photo)[0]} height={imageSize(inset.photo)[1]} className="absolute inset-0 h-full w-full object-cover" />
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
