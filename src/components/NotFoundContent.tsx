import { Link } from 'react-router';
import { Icon } from './Icon';
import { NAV } from './nav';

/** Branded not-found body, shared by the 404 route and unknown detail slugs. */
export function NotFoundContent() {
	return (
		<section className="traces bg-paper py-32 lg:py-40">
			<div className="container-page max-w-3xl">
				<p className="eyebrow">Error 404</p>
				<h1 className="mt-3 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] font-bold">This page is not here</h1>
				<p className="mt-5 text-lg leading-relaxed text-ink-600">The link may be out of date, or the page may have moved when IRIIC’s website was rebuilt. These are good places to start:</p>
				<ul className="mt-8 grid gap-3 sm:grid-cols-2">
					{[NAV.home, NAV.projects, NAV.careers, NAV.contact].map((item) => (
						<li key={item.to}>
							<Link to={item.to} className="card group flex items-center justify-between p-5 font-display font-bold transition-shadow hover:shadow-card-lg">
								{item.label}
								<Icon name="arrow-right" className="h-5 w-5 text-ocean-700 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
