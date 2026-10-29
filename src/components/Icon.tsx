/** Line icons in one stroke style. Decorative: always aria-hidden. */
const paths = {
	'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
	'arrow-left': <path d="M19 12H5M11 18l-6-6 6-6" />,
	'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
	'chevron-down': <path d="m6 9 6 6 6-6" />,
	'chevron-left': <path d="m15 18-6-6 6-6" />,
	'chevron-right': <path d="m9 18 6-6-6-6" />,
	close: <path d="M6 6l12 12M18 6 6 18" />,
	menu: <path d="M4 7h16M4 12h16M4 17h16" />,
	search: (
		<>
			<circle cx="11" cy="11" r="7" />
			<path d="m20 20-3.5-3.5" />
		</>
	),
	calendar: (
		<>
			<rect x="3" y="5" width="18" height="16" rx="2" />
			<path d="M16 3v4M8 3v4M3 10h18" />
		</>
	),
	'map-pin': (
		<>
			<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
			<circle cx="12" cy="9.5" r="2.5" />
		</>
	),
	clock: (
		<>
			<circle cx="12" cy="12" r="9" />
			<path d="M12 7v5l3 2" />
		</>
	),
	mail: (
		<>
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<path d="m3 7 9 6 9-6" />
		</>
	),
	phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
	check: <path d="m5 12 5 5 9-10" />,
	images: (
		<>
			<rect x="3" y="5" width="15" height="12" rx="2" />
			<path d="M21 8v11a2 2 0 0 1-2 2H7M3 14l4-4 4 4 3-3 4 4" />
		</>
	),
	expand: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
	pause: <path d="M9 5v14M15 5v14" />,
	play: <path d="m7 5 12 7-12 7Z" />,
	briefcase: (
		<>
			<rect x="3" y="7" width="18" height="13" rx="2" />
			<path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
		</>
	),
	flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
	rocket: (
		<>
			<path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M9 17l-2-2c1-4 4-9 12-12-3 8-8 11-12 12Z" />
			<circle cx="14.5" cy="9.5" r="1.5" />
		</>
	),
	users: (
		<>
			<circle cx="9" cy="8" r="3.5" />
			<path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" />
		</>
	),
	handshake: <path d="m11 17 2 2a1.5 1.5 0 0 0 2-2M14 14l2.5 2.5a1.5 1.5 0 0 0 2-2L15 11M3 13l4-4 4 1 4-4 6 6M7 9l5 5-2 2a1.5 1.5 0 0 1-2-2" />,
	trophy: <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />,
	chip: (
		<>
			<rect x="6" y="6" width="12" height="12" rx="2" />
			<path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
		</>
	),
	school: <path d="M22 10 12 5 2 10l10 5 10-5ZM6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 10v6" />,
	newspaper: (
		<>
			<rect x="3" y="4" width="15" height="16" rx="2" />
			<path d="M18 8h3v10a2 2 0 0 1-2 2M7 8h7M7 12h7M7 16h4" />
		</>
	),
	facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
	linkedin: (
		<>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
			<path d="M2 9h4v12H2z" />
			<circle cx="4" cy="4" r="2" />
		</>
	),
	youtube: (
		<>
			<rect x="2" y="5" width="20" height="14" rx="4" />
			<path d="m10 9 5 3-5 3Z" />
		</>
	)
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.75 }: { name: IconName; className?: string; strokeWidth?: number }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
			{paths[name]}
		</svg>
	);
}
