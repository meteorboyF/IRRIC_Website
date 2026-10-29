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
	/** Back link above the label. */
	before?: ReactNode;
	children?: ReactNode;
}

/** Light split hero for top-level pages: copy left, framed photograph right. */
export function PageIntro({ eyebrow, title, lede, photo, photoAlt, before, children }: Props) {
	const [width, height] = imageSize(photo);
	return (
		<section className="surface-sky relative overflow-hidden">
			<Traces className="pointer-events-none absolute hidden lg:block -top-10 -right-24 w-[46rem] max-w-none text-ocean-300/60" />
			<div className="container-page relative grid items-center gap-10 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-16 lg:pb-20">
				<div className="rise">
					{before && <div className="mb-6">{before}</div>}
					<p className="node-label mb-5">{eyebrow}</p>
					<h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-balance">{title}</h1>
					{lede && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">{lede}</p>}
					{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
				</div>
				<div className="rise rise-2 relative">
					<div className="absolute -right-3 -bottom-3 hidden h-full w-full rounded-[1.75rem] bg-ember-200 sm:block" aria-hidden="true" />
					<div className="frame relative aspect-[4/3] shadow-card-lg">
						<img src={img(photo, 'sm')} srcSet={srcSet(photo)} sizes="(min-width: 1024px) 45vw, 100vw" alt={photoAlt} width={width} height={height} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
}
