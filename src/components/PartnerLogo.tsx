import type { Partner } from '../data/types';
import { img, imageSize } from '../lib/img';

/**
 * Logos are trimmed to their artwork and keep their native aspect ratio; the
 * landscape box with object-contain evens out optical weight between wide
 * wordmarks and round seals. Partners without a logo get a text lockup.
 */
export function PartnerLogo({ partner, compact = false }: { partner: Partner; compact?: boolean }) {
	if (!partner.logo) {
		return (
			<div className={`partner-logo ${compact ? 'compact' : ''}`}>
				<span className="text-center font-display text-sm leading-tight font-bold text-ink-800">{partner.name}</span>
			</div>
		);
	}
	const [width, height] = imageSize(partner.logo);
	return (
		<div className={`partner-logo ${compact ? 'compact' : ''}`}>
			<img src={img(partner.logo)} alt={partner.name} width={width} height={height} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
		</div>
	);
}
