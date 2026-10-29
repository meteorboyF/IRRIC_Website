import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { img, imageSize } from '../lib/img';
import { lockScroll } from '../lib/scrollLock';
import { Icon } from './Icon';
import { CTA, NAV } from './nav';

const ABOUT_MENU = [NAV.about, NAV.people, NAV.partners];
const MAIN = [NAV.projects, NAV.programmes, NAV.careers, NAV.news, NAV.contact];

const linkClass = ({ isActive }: { isActive: boolean }) =>
	`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-50 hover:text-ink-900 ${isActive ? 'text-ocean-700' : 'text-ink-700'}`;

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
		<header className={`sticky top-0 z-50 border-b transition-colors ${scrolled || mobileOpen ? 'border-ink-900/12 bg-paper shadow-sm' : 'border-ink-900/6 bg-paper/95'}`}>
			<nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
				<Link to="/" className="flex shrink-0 items-center" aria-label="IRIIC home">
					<img src={img('brand/iriic-logo')} alt="IRIIC: Institute of Research, Innovation, Incubation and Commercialization" width={logoWidth} height={logoHeight} className="h-10 w-auto" />
				</Link>

				<div className="hidden items-center gap-1 lg:flex">
					<div ref={aboutWrapper} className="relative">
						<button
							ref={aboutToggle}
							type="button"
							className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-50 hover:text-ink-900 ${inAbout ? 'text-ocean-700' : 'text-ink-700'}`}
							aria-expanded={aboutOpen}
							aria-controls={menuId}
							onClick={() => setAboutOpen((open) => !open)}
						>
							{NAV.about.label}
							<Icon name="chevron-down" className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
						</button>
						{aboutOpen && (
							<ul id={menuId} className="menu-enter absolute top-full left-0 mt-2 w-56 rounded-xl border border-ink-900/10 bg-white p-2 shadow-card-lg">
								{ABOUT_MENU.map((item) => (
									<li key={item.to}>
										<NavLink to={item.to} end className={({ isActive }) => `block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-ink-50 ${isActive ? 'bg-ocean-50 text-ocean-800' : 'text-ink-700'}`}>
											{item.to === NAV.about.to ? 'About IRIIC' : item.label}
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
					<Link to={CTA.to} className="btn btn-cta btn-sm ml-3">
						{CTA.label}
					</Link>
				</div>

				<button
					ref={mobileToggle}
					type="button"
					className="rounded-md p-2 text-ink-900 lg:hidden"
					aria-expanded={mobileOpen}
					aria-controls={mobileId}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					onClick={() => setMobileOpen((open) => !open)}
				>
					<Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" strokeWidth={2} />
				</button>
			</nav>

			{mobileOpen && (
				<div id={mobileId} className="menu-enter max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-ink-900/10 bg-paper px-5 pt-2 pb-6 lg:hidden">
					<ul>
						{[NAV.home, ...ABOUT_MENU, ...MAIN].map((item) => (
							<li key={item.to}>
								<NavLink to={item.to} end className={({ isActive }) => `block rounded-lg px-3 py-3 text-base font-medium ${isActive ? 'bg-ocean-50 text-ocean-800' : 'text-ink-900'} ${item.to === NAV.people.to || item.to === NAV.partners.to ? 'pl-7' : ''}`}>
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
