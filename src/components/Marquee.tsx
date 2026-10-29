import { useState, type ReactNode } from 'react';
import { Icon } from './Icon';

/**
 * Continuously scrolling strip. It pauses on hover and on keyboard focus,
 * has an explicit pause button (WCAG 2.2.2), and becomes a static, wrapped
 * grid when the reader prefers reduced motion.
 */
export function Marquee({ children, label }: { children: ReactNode; label: string }) {
	const [paused, setPaused] = useState(false);
	return (
		<div>
			<div className="mb-4 flex justify-end motion-reduce:hidden">
				<button type="button" className="chip" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
					<Icon name={paused ? 'play' : 'pause'} className="h-4 w-4" />
					{paused ? 'Play logo strip' : 'Pause logo strip'}
				</button>
			</div>
			<section className={`marquee ${paused ? 'is-paused' : ''}`} aria-label={label}>
				<ul className="marquee-track">{children}</ul>
				<ul className="marquee-track" aria-hidden="true" inert>
					{children}
				</ul>
			</section>
		</div>
	);
}
