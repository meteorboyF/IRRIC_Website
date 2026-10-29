import { Reveal } from './Reveal';

interface Props {
	/** Short label shown as a circuit node above the title. */
	eyebrow?: string;
	title: string;
	lede?: string;
	align?: 'left' | 'center';
	/** Heading id, for aria-labelledby on the section. */
	id?: string;
	/** Lighter lede colour for dark surfaces. */
	onDark?: boolean;
}

export function SectionHead({ eyebrow, title, lede, align = 'left', id, onDark = false }: Props) {
	const centred = align === 'center';
	return (
		<Reveal className={centred ? 'text-center' : ''}>
			{eyebrow && <p className="node-label mb-4">{eyebrow}</p>}
			<h2 id={id} className={`max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] text-balance ${centred ? 'mx-auto' : ''}`}>
				{title}
			</h2>
			{lede && <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${onDark ? 'text-white/80' : 'text-ink-600'} ${centred ? 'mx-auto' : ''}`}>{lede}</p>}
		</Reveal>
	);
}
