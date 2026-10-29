import { useEffect, useRef, type ReactNode } from 'react';
import { prefersReducedMotion } from '../lib/motion';

const DELAYS = ['', 'delay-75', 'delay-150', 'delay-200', 'delay-300'] as const;

interface Props {
	children: ReactNode;
	/** Stagger step, 0–4. */
	delay?: 0 | 1 | 2 | 3 | 4;
	className?: string;
	as?: 'div' | 'li' | 'section' | 'article';
}

/**
 * Fades content up as it scrolls into view. Without JavaScript nothing is
 * hidden: the hidden state applies only under <html class="js"> (set by
 * public/boot.js), and reduced-motion readers see content at once.
 */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
	const ref = useRef<HTMLElement | null>(null);

	// The visible class is toggled on the DOM node directly: it is a one-way
	// presentational switch, and React never rewrites the unchanged className.
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const show = () => node.classList.add('is-visible');
		if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
			show();
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					show();
					observer.disconnect();
				}
			},
			{ rootMargin: '0px 0px -8% 0px' }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag ref={ref as never} className={`reveal ${DELAYS[delay]} ${className}`}>
			{children}
		</Tag>
	);
}
