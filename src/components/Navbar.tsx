import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { img, imageSize } from '../lib/img';
import { lockScroll } from '../lib/scrollLock';
import { Icon } from './Icon';
import { CTA, NAV } from './nav';

const ABOUT_MENU = [NAV.about, NAV.people, NAV.partners];
const MAIN = [NAV.projects, NAV.programmes, NAV.careers, NAV.news];

const linkClass = ({ isActive }: { isActive: boolean }) =>
	`rounded-full px-4 py-2 text-[0.9375rem] font-semibold transition-colors hover:text-ocean-800 ${isActive ? 'bg-ocean-50 text-ocean-800' : 'text-ink-700'}`;

export function Navbar() {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const aboutWrapper = useRef<HTMLDivElement>(null);
	const aboutToggle = useRef<HTMLButtonElement>(null);
	const mobileToggle = useRef<HTMLButtonElement>(null);
	const menuId = useId();
	const mobileId = useId();
	const [logoWidth, logoHeight] = imageSize('brand/iriic-logo');
	const inAbout = ABOUT_MENU.some((item) => location.pathname.endsWith(item.to));

	// Close menus on navigation (state adjusted during render, not in an effect).
	const [lastPath, setLastPath] = useState(location.pathname);
	if (lastPath !== location.pathname) {
		setLastPath(location.pathname);
		setMobileOpen(false);
		setAboutOpen(false);
	}

	// Close the dropdown when focus leaves it.
	useEffect(() => {
		const node = aboutWrapper.current;
		if (!node) return;
		const onFocusOut = (event: FocusEvent) => {
			if (!node.contains(event.relatedTarget as Node | null)) setAboutOpen(false);
		};
		node.addEventListener('focusout', onFocusOut);
		return () => node.removeEventListener('focusout', onFocusOut);
	}, []);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (!mobileOpen) return;
		return lockScroll();
	}, [mobileOpen]);

	useEffect(() => {
		function onKey(event: KeyboardEvent) {
			if (event.key !== 'Escape') return;
			if (aboutOpen) {
				setAboutOpen(false);
				aboutToggle.current?.focus();
			}
			if (mobileOpen) {
				setMobileOpen(false);
				mobileToggle.current?.focus();
			}
		}
		function onClick(event: MouseEvent) {
			if (aboutOpen && !aboutWrapper.current?.contains(event.target as Node)) setAboutOpen(false);
		}
		window.addEventListener('keydown', onKey);
		window.addEventListener('click', onClick);
		return () => {
			window.removeEventListener('keydown', onKey);
			window.removeEventListener('click', onClick);
		};
	}, [aboutOpen, mobileOpen]);

	return (
		<header className={`sticky top-0 z-50 transition-[background-color,box-shadow] ${scrolled || mobileOpen ? 'bg-white/95 shadow-[0_1px_0_rgb(14_86_135/0.12)]' : 'bg-ocean-50/95'}`}>
			<nav className="container-page flex h-[4.25rem] items-center justify-between gap-4" aria-label="Main">
				<Link to="/" className="flex shrink-0 items-center" aria-label="IRIIC home">
					<img src={img('brand/iriic-logo')} alt="IRIIC: Institute of Research, Innovation, Incubation and Commercialization" width={logoWidth} height={logoHeight} className="h-10 w-auto" />
				</Link>

				<div className="hidden items-center gap-3 lg:flex">
					<div className="flex items-center gap-0.5 rounded-full border border-ocean-700/12 bg-white/80 p-1">
					<div ref={aboutWrapper} className="relative">
						<button
							ref={aboutToggle}
							type="button"
							className={`flex items-center gap-1 rounded-full px-4 py-2 text-[0.9375rem] font-semibold transition-colors hover:text-ocean-800 ${inAbout ? 'bg-ocean-50 text-ocean-800' : 'text-ink-700'}`}
							aria-expanded={aboutOpen}
							aria-controls={menuId}
							onClick={() => setAboutOpen((open) => !open)}
						>
							{NAV.about.label}
							<Icon name="chevron-down" className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
						</button>
						{aboutOpen && (
							<ul id={menuId} className="menu-enter absolute top-full left-0 mt-3 w-56 rounded-2xl border border-ocean-700/12 bg-white p-2 shadow-card-lg">
								{ABOUT_MENU.map((item) => (
									<li key={item.to}>
										<NavLink to={item.to} end className={({ isActive }) => `block rounded-xl px-3 py-2.5 text-[0.9375rem] font-semibold hover:bg-ocean-50 ${isActive ? 'bg-ocean-50 text-ocean-800' : 'text-ink-700'}`}>
											{item.label}
										</NavLink>
									</li>
								))}
							</ul>
						)}
					</div>
					{MAIN.map((item) => (
						<NavLink key={item.to} to={item.to} className={linkClass}>
							{item.label}
						</NavLink>
					))}
					</div>
					<Link to={CTA.to} className="btn btn-cta btn-sm">
						{CTA.label}
					</Link>
				</div>

				<button
					ref={mobileToggle}
					type="button"
					className="rounded-full border border-ocean-700/15 bg-white p-2 text-ink-900 lg:hidden"
					aria-expanded={mobileOpen}
					aria-controls={mobileId}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					onClick={() => setMobileOpen((open) => !open)}
				>
					<Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" strokeWidth={2} />
				</button>
			</nav>

			{mobileOpen && (
				<div id={mobileId} className="menu-enter max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-ocean-700/12 bg-white px-5 pt-2 pb-6 lg:hidden">
					<ul>
						{[NAV.home, ...ABOUT_MENU, ...MAIN].map((item) => (
							<li key={item.to}>
								<NavLink to={item.to} end className={({ isActive }) => `block rounded-xl px-3 py-3 text-base font-semibold ${isActive ? 'bg-ocean-50 text-ocean-800' : 'text-ink-900'} ${item.to === NAV.people.to || item.to === NAV.partners.to ? 'pl-7' : ''}`}>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
					<Link to={CTA.to} className="btn btn-cta mt-4 w-full">
						{CTA.label}
					</Link>
				</div>
			)}
		</header>
	);
}
