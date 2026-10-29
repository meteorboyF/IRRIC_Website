import { Link } from 'react-router';
import { ADDRESS_LINES, BUILD_DATE, CONTACT_EMAIL, PARENT_NAME, SITE_FULL_NAME, SOCIALS } from '../lib/config';
import { img, imageSize } from '../lib/img';
import { Icon, type IconName } from './Icon';
import { NAV } from './nav';

const COLUMNS = [
	{ heading: 'Institute', links: [NAV.about, NAV.people, NAV.partners, NAV.news] },
	{ heading: 'Work', links: [NAV.projects, NAV.programmes, NAV.careers, NAV.contact] },
	{ heading: 'Legal', links: [NAV.privacy, NAV.terms, NAV.cookies] }
];

const SOCIAL: { href: string; label: string; icon: IconName }[] = [
	{ href: SOCIALS.facebook, label: 'IRIIC on Facebook', icon: 'facebook' },
	{ href: SOCIALS.linkedin, label: 'IRIIC on LinkedIn', icon: 'linkedin' },
	{ href: SOCIALS.youtube, label: 'IRIIC on YouTube', icon: 'youtube' }
];

export function Footer() {
	const [logoWidth, logoHeight] = imageSize('brand/iriic-logo');
	const [uiuWidth, uiuHeight] = imageSize('brand/uiu-logo-white');
	return (
		<footer className="on-dark surface-deep traces-light">
			<div className="container-page py-16">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<img src={img('brand/iriic-logo')} alt="IRIIC" width={logoWidth} height={logoHeight} loading="lazy" className="h-12 w-auto" />
						<p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
							{SITE_FULL_NAME}, {PARENT_NAME}. Research, innovation, incubation and commercialisation across health, AI and the Fourth Industrial Revolution.
						</p>
						<address className="mt-5 text-sm leading-relaxed text-white/75 not-italic">
							{ADDRESS_LINES.map((line) => (
								<span key={line} className="block">
									{line}
								</span>
							))}
						</address>
						<a href={`mailto:${CONTACT_EMAIL}`} className="link mt-4 inline-block text-sm">
							{CONTACT_EMAIL}
						</a>
					</div>
					{COLUMNS.map((column) => (
						<nav key={column.heading} aria-label={column.heading}>
							<h2 className="font-display text-xs font-semibold tracking-wide text-white/60">{column.heading}</h2>
							<ul className="mt-4 space-y-1">
								{column.links.map((link) => (
									<li key={link.to}>
										<Link to={link.to} className="inline-block py-1.5 text-sm font-medium text-white/85 hover:text-white">
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
				<div className="mt-14 flex flex-col gap-6 border-t border-white/12 pt-7 md:flex-row md:items-center md:justify-between">
					<div className="flex flex-wrap items-center gap-5">
						<img src={img('brand/uiu-logo-white')} alt={PARENT_NAME} width={uiuWidth} height={uiuHeight} loading="lazy" className="h-9 w-auto" />
						<p className="text-sm text-white/70">© {BUILD_DATE.slice(0, 4)} IRIIC, {PARENT_NAME}.</p>
					</div>
					<ul className="flex gap-3">
						{SOCIAL.map((item) => (
							<li key={item.href}>
								<a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label} (opens in a new tab)`} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-ember-300 hover:text-ember-300">
									<Icon name={item.icon} className="h-5 w-5" />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
