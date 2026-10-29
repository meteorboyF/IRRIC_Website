import type { ReactNode } from 'react';
import { Traces } from './Traces';

interface Props {
	eyebrow: string;
	title: string;
	lede?: string;
	/** Back link or meta row above the eyebrow. */
	before?: ReactNode;
	/** Tags or buttons under the lede. */
	children?: ReactNode;
}

/** Compact light header for pages without a hero photograph. */
export function PageHeader({ eyebrow, title, lede, before, children }: Props) {
	return (
		<section className="surface-sky relative overflow-hidden">
			<Traces className="pointer-events-none absolute hidden lg:block -top-16 -right-28 w-[40rem] max-w-none text-ocean-300/50" />
			<div className="container-page relative pt-12 pb-14 lg:pt-16 lg:pb-16">
				<div className="rise max-w-4xl">
					{before && <div className="mb-6">{before}</div>}
					<p className="node-label mb-5">{eyebrow}</p>
					<h1 className="text-[clamp(2.3rem,5.5vw,4.25rem)] leading-[1.03] text-balance">{title}</h1>
					{lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">{lede}</p>}
					{children && <div className="mt-6 flex flex-wrap items-center gap-3">{children}</div>}
				</div>
			</div>
		</section>
	);
}
