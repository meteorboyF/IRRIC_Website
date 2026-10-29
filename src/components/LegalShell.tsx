import type { ReactNode } from 'react';
import { PageHeader } from './PageHeader';
import { LEGAL_UPDATED } from '../lib/config';

export function LegalShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
	return (
		<>
			<PageHeader eyebrow="Legal" title={title} lede={intro}>
				<p className="text-sm text-ink-600">Last updated {LEGAL_UPDATED}</p>
			</PageHeader>
			<section className="bg-paper py-16 lg:py-20">
				<div className="container-page prose-body max-w-3xl">{children}</div>
			</section>
		</>
	);
}
