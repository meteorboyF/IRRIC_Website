import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { isExternal, safeUrl } from '../lib/safeUrl';

interface Props {
	href: string;
	className?: string;
	children: ReactNode;
	'aria-label'?: string;
	/** Rendered when the URL fails the allow-list; defaults to nothing. */
	fallback?: ReactNode;
}

/**
 * The one way to render a link from data. Same-origin paths become router
 * links; https opens in a new tab with rel="noopener noreferrer"; mailto and
 * tel stay in place. Anything else is dropped.
 */
export function SmartLink({ href, className, children, fallback = null, ...rest }: Props) {
	const url = safeUrl(href);
	if (url === null) return <>{fallback}</>;
	if (url.startsWith('/')) {
		return (
			<Link to={url} className={className} {...rest}>
				{children}
			</Link>
		);
	}
	if (isExternal(url)) {
		return (
			<a href={url} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
				{children}
				<span className="sr-only"> (opens in a new tab)</span>
			</a>
		);
	}
	return (
		<a href={url} className={className} {...rest}>
			{children}
		</a>
	);
}
