import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import './app.css';
import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, type LinksFunction } from 'react-router';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { asset } from './lib/img';

export const links: LinksFunction = () => [
	{ rel: 'icon', href: asset('favicon.png'), type: 'image/png' },
	{ rel: 'apple-touch-icon', href: asset('apple-touch-icon.png') }
];

export function Layout({ children }: { children: ReactNode }) {
	return (
		// boot.js adds class="js" before paint; React must not treat that as a mismatch.
		<html lang="en-GB" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="referrer" content="strict-origin-when-cross-origin" />
				<meta name="color-scheme" content="light" />
				<meta name="theme-color" content="#03101e" />
				<script src={asset('boot.js')} />
				<Meta />
				<Links />
			</head>
			<body className="bg-paper text-ink-900 antialiased">
				<a href="#main" className="sr-only z-[200] rounded-md bg-ocean-700 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
					Skip to content
				</a>
				<Navbar />
				<main id="main" tabIndex={-1} className="outline-none">
					{children}
				</main>
				<Footer />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
	const title = isRouteErrorResponse(error) && error.status === 404 ? 'Page not found' : 'Something went wrong';
	return (
		<section className="container-page py-32">
			<p className="eyebrow">Error</p>
			<h1 className="mt-3 font-display text-4xl font-bold">{title}</h1>
			<p className="mt-4 max-w-xl text-ink-600">Please try again, or go back to the home page.</p>
			<a href={asset('')} className="btn btn-primary mt-8">
				Go to the home page
			</a>
		</section>
	);
}
