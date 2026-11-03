/**
 * Line illustrations for the five units, drawn for the dark centres band.
 * Decorative only (aria-hidden): every card states the same thing in text.
 * Motion classes (art-*) are switched off for reduced-motion readers.
 */

const SKY = 'var(--color-ocean-300)';
const EMBER = 'var(--color-ember-400)';

function Frame({ children }: { children: React.ReactNode }) {
	return (
		<svg viewBox="0 0 320 160" fill="none" aria-hidden="true" focusable="false" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
			{children}
		</svg>
	);
}

/** AIMS Lab: a small neural network with signals moving through it. */
function Network() {
	const layers = [
		[40, [40, 80, 120]],
		[120, [24, 64, 96, 136]],
		[200, [24, 64, 96, 136]],
		[280, [60, 100]]
	] as const;
	const edges: [number, number, number, number][] = [];
	layers.forEach(([x1, ys1], l) => {
		const nextLayer = layers[l + 1];
		if (!nextLayer) return;
		const [x2, ys2] = nextLayer;
		for (const y1 of ys1) for (const y2 of ys2) edges.push([x1, y1, x2, y2]);
	});
	return (
		<Frame>
			<g stroke={SKY} strokeWidth="1" opacity="0.35">
				{edges.map(([x1, y1, x2, y2]) => (
					<line key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
				))}
			</g>
			<g stroke={EMBER} strokeWidth="2" strokeLinecap="round">
				<path d="M40 80 L120 64 L200 96 L280 100" pathLength={1} className="art-signal" />
				<path d="M40 40 L120 96 L200 24 L280 60" pathLength={1} className="art-signal art-d2" />
			</g>
			{layers.map(([x, ys], l) =>
				ys.map((y, i) => <circle key={`${x}-${y}`} cx={x} cy={y} r={l === 3 ? 7 : 5.5} fill="var(--color-ocean-950)" stroke={(l + i) % 3 === 0 ? EMBER : SKY} strokeWidth="2" className={(l + i) % 3 === 0 ? `art-pulse art-d${(l + i) % 4}` : undefined} />)
			)}
		</Frame>
	);
}

/** EEG-like traces: a sum of sines per channel, sampled once at build time. */
function wave(y: number, amp: number, f1: number, f2: number, phase: number): string {
	const points: string[] = [];
	for (let x = 0; x <= 640; x += 6) {
		const v = Math.sin((x / 640) * Math.PI * 2 * f1 + phase) * amp + Math.sin((x / 640) * Math.PI * 2 * f2 + phase * 2) * amp * 0.45;
		points.push(`${x},${(y + v).toFixed(1)}`);
	}
	return `M${points.join(' L')}`;
}
const WAVES = [wave(34, 10, 6, 17, 0), wave(66, 7, 9, 23, 1.3), wave(98, 12, 4, 13, 2.1), wave(128, 6, 11, 29, 0.6)];

/** BCI Research Lab: brain-wave channels scrolling past a head outline. */
function Waves() {
	return (
		<Frame>
			<defs>
				<linearGradient id="wave-fade" x1="0" x2="1">
					<stop offset="0" stopColor="white" stopOpacity="0" />
					<stop offset="0.15" stopColor="white" stopOpacity="1" />
					<stop offset="0.85" stopColor="white" stopOpacity="1" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
				<mask id="wave-mask">
					<rect width="320" height="160" fill="url(#wave-fade)" />
				</mask>
			</defs>
			<g mask="url(#wave-mask)">
				<g className="art-scroll">
					{WAVES.map((d, i) => (
						<path key={d} d={d} stroke={i === 2 ? EMBER : SKY} strokeWidth={i === 2 ? 2 : 1.5} strokeLinejoin="round" opacity={i === 2 ? 1 : 0.7} />
					))}
				</g>
			</g>
			<g stroke={SKY} strokeWidth="1" opacity="0.4">
				{[34, 66, 98, 128].map((y) => (
					<line key={y} x1="0" x2="320" y1={y} y2={y} strokeDasharray="2 6" />
				))}
			</g>
		</Frame>
	);
}

const STARS: [number, number][] = [
	[60, 30],
	[110, 22],
	[262, 132],
	[300, 30],
	[150, 140]
];

/** University Innovation Hub: a launch trajectory and orbits. */
function Launch() {
	return (
		<Frame>
			<g stroke={SKY} strokeWidth="1.2" opacity="0.45">
				<ellipse cx="200" cy="80" rx="110" ry="42" />
				<ellipse cx="200" cy="80" rx="72" ry="27" />
			</g>
			<g className="art-orbit">
				<circle cx="310" cy="80" r="5" fill={EMBER} />
			</g>
			<path d="M24 150 C 90 140, 150 110, 200 80" stroke={EMBER} strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" className="art-march" />
			<circle cx="200" cy="80" r="16" fill="var(--color-ocean-950)" stroke={SKY} strokeWidth="2" />
			<path d="M194 86 L200 70 L206 86 L200 82 Z" fill={EMBER} />
			{STARS.map(([cx, cy]) => (
				<circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="white" className={`art-twinkle art-d${(cx + cy) % 4}`} />
			))}
		</Frame>
	);
}

/** CDHIPR: a heartbeat trace running into a data panel. */
function Pulse() {
	return (
		<Frame>
			<g stroke={SKY} strokeWidth="1" opacity="0.25">
				{[40, 80, 120].map((y) => (
					<line key={y} x1="0" x2="320" y1={y} y2={y} />
				))}
				{[64, 128, 192, 256].map((x) => (
					<line key={x} y1="0" y2="160" x1={x} x2={x} />
				))}
			</g>
			<path d="M0 92 H70 L82 92 L92 54 L104 128 L116 72 L124 92 H190 L198 86 L206 92 H320" stroke={EMBER} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" pathLength={1} className="art-signal" />
			<rect x="232" y="22" width="64" height="44" rx="10" fill="var(--color-ocean-950)" stroke={SKY} strokeWidth="1.5" />
			<path d="M264 32 V56 M252 44 H276" stroke={EMBER} strokeWidth="3" strokeLinecap="round" />
			<g fill={SKY} opacity="0.8">
				<rect x="236" y="128" width="8" height="18" rx="2" />
				<rect x="250" y="116" width="8" height="30" rx="2" />
				<rect x="264" y="122" width="8" height="24" rx="2" />
				<rect x="278" y="106" width="8" height="40" rx="2" />
			</g>
		</Frame>
	);
}

/** IACC: academia, industry and government overlapping. */
function Triad() {
	const circles: [number, number, string][] = [
		[130, 62, 'Academia'],
		[190, 62, 'Industry'],
		[160, 106, 'Government']
	];
	return (
		<Frame>
			{circles.map(([cx, cy, label], i) => (
				<g key={label}>
					<circle cx={cx} cy={cy} r="44" stroke={i === 0 ? EMBER : SKY} strokeWidth="1.6" fill={i === 0 ? 'rgb(247 148 49 / 0.06)' : 'rgb(156 203 237 / 0.06)'} />
					<text x={i === 0 ? cx - 82 : i === 1 ? cx + 50 : cx} y={i === 2 ? cy + 52 : cy - 30} fill="white" fillOpacity="0.7" fontSize="11" fontFamily="var(--font-display)" fontWeight="600" textAnchor={i === 0 ? 'start' : i === 1 ? 'start' : 'middle'}>
						{label}
					</text>
				</g>
			))}
			<circle cx="160" cy="77" r="6" fill={EMBER} className="art-pulse" />
		</Frame>
	);
}

export const UNIT_ART = [Network, Waves, Launch, Pulse, Triad] as const;
