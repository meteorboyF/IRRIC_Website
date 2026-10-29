import { Reveal } from './Reveal';

interface Props {
	eyebrow?: string;
	title: string;
	lede?: string;
	align?: 'left' | 'center';
	/** Oversized outlined numeral, e.g. '01'. */
	number?: string;
	/** Heading id, for aria-labelledby on the section. */
	id?: string;
	/** Lighter lede colour for dark bands. */
	onDark?: boolean;
	as?: 'h2' | 'h1';
}

export function SectionHead({ eyebrow, title, lede, align = 'left', number, id, onDark = false, as: Heading = 'h2' }: Props) {
	const ledeColour = onDark ? 'text-white/80' : 'text-ink-600';
	const heading = (
		<>
			{eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
			<Heading id={id} className="font-display text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-bold text-balance">
				{title}
			</Heading>
			{lede && <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${ledeColour} ${align === 'center' ? 'mx-auto' : ''}`}>{lede}</p>}
		</>
	);
	if (number) {
		return (
			<Reveal>
				<div className="rule-tick flex items-start gap-5 pt-6 sm:gap-10">
					<span className="sec-num" aria-hidden="true">
						{number}
					</span>
					<div className="min-w-0 pt-2">{heading}</div>
				</div>
			</Reveal>
		);
	}
	return <Reveal className={align === 'center' ? 'text-center' : ''}>{heading}</Reveal>;
}
