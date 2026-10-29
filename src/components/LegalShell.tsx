import type { ReactNode } from 'react';
import { LEGAL_UPDATED } from '../lib/config';

export function LegalShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
	return (
		<>
			<section className="on-dark band-dark grain pt-28 pb-12">
				<div className="container-page max-w-4xl">
					<p className="eyebrow">Legal</p>
					<h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.04] font-bold">{title}</h1>
					<p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
					<p className="mt-4 text-sm text-white/70">Last updated {LEGAL_UPDATED}</p>
				</div>
			</section>
			<section className="bg-paper py-16 lg:py-20">
				<div className="container-page prose-body max-w-3xl">{children}</div>
			</section>
		</>
	);
}
