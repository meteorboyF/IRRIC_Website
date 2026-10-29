import type { ReactNode } from 'react';
import { img, imageSize, srcSet } from '../lib/img';

interface Props {
	eyebrow: string;
	title: string;
	lede?: string;
	/** Hero image name, e.g. 'hero/about'. */
	photo: string;
	photoAlt: string;
	children?: ReactNode;
}

/** Full-bleed duotone photo band that opens every top-level page. */
export function PageIntro({ eyebrow, title, lede, photo, photoAlt, children }: Props) {
	const [width, height] = imageSize(photo);
	return (
		<section className="on-dark photo-duo scrim relative flex min-h-[52svh] items-end text-white">
			<img src={img(photo, 'sm')} srcSet={srcSet(photo)} sizes="100vw" alt={photoAlt} width={width} height={height} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
			<div className="container-page relative z-10 pt-32 pb-12 lg:pb-16">
				<p className="eyebrow mb-4">{eyebrow}</p>
				<h1 className="max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] leading-[1.02] font-bold text-balance">
					<span className="line-mask">
						<span>{title}</span>
					</span>
				</h1>
				{lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{lede}</p>}
				{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
			</div>
		</section>
	);
}
