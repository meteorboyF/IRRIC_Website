import type { ImageRef } from '../data/types';
import { img, imageSize, srcSet } from '../lib/img';

interface Props {
	image: ImageRef;
	sizes: string;
	className?: string;
	/** Above-the-fold images load eagerly with high priority. */
	priority?: boolean;
	/** Decorative use (the image is already described nearby). */
	decorative?: boolean;
}

/**
 * Photographs fill their frame; screenshots and diagrams (fit "contain") sit
 * whole on a tinted panel so nothing is cropped or upscaled.
 */
export function ProjectImage({ image, sizes, className = '', priority = false, decorative = false }: Props) {
	const [width, height] = imageSize(image.name);
	const contain = image.fit === 'contain';
	return (
		<div className={`relative overflow-hidden ${contain ? 'bg-ocean-50' : 'bg-ocean-100'} ${className}`}>
			<img
				src={img(image.name, 'sm')}
				srcSet={srcSet(image.name)}
				sizes={sizes}
				alt={decorative ? '' : image.alt}
				width={width}
				height={height}
				loading={priority ? 'eager' : 'lazy'}
				fetchPriority={priority ? 'high' : 'auto'}
				decoding="async"
				className={contain ? 'absolute inset-0 m-auto h-[88%] w-[88%] object-contain' : 'absolute inset-0 h-full w-full object-cover'}
			/>
		</div>
	);
}
