/**
 * The circuit-trace motif from the IRIIC logo's lightbulb, as an inline SVG:
 * right-angled traces ending in nodes. Decorative only. Traces draw in once
 * (stroke-dashoffset), unless the reader prefers reduced motion.
 */
export function Traces({ className = '' }: { className?: string }) {
	const traces = [
		'M20 40 H140 V120 H230',
		'M20 210 H90 V300 H200 V360',
		'M300 20 V90 H380 V170',
		'M420 260 H330 V330 H250',
		'M470 60 V150 H560',
		'M560 300 H480 V390'
	];
	const nodes: [number, number][] = [
		[230, 120],
		[200, 360],
		[380, 170],
		[250, 330],
		[560, 150],
		[480, 390],
		[140, 40],
		[90, 300]
	];
	return (
		<svg viewBox="0 0 580 420" fill="none" aria-hidden="true" focusable="false" className={className}>
			<g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				{traces.map((d) => (
					<path key={d} d={d} pathLength={1} className="pipeline-trace" />
				))}
			</g>
			<g fill="currentColor">
				{nodes.map(([cx, cy]) => (
					<circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
				))}
			</g>
		</svg>
	);
}
