import { Link } from 'react-router';
import { img, imageSize, srcSet } from '../lib/img';
import { Reveal } from './Reveal';

export interface MosaicItem {
	photo: string;
	alt: string;
	/** Short caption shown on the photo. */
	caption: string;
	/** Project slug the tile links to. */
	slug: string;
}

/** Tile shapes for a four-column grid: one large, then a rhythm of wide and square. */
const SHAPES = ['sm:col-span-2 sm:row-span-2', '', '', 'sm:col-span-2', '', '', 'sm:col-span-2'];

/** A grid of photographs from IRIIC's own events, each linking to its project page. */
export function PhotoMosaic({ items, label }: { items: MosaicItem[]; label: string }) {
	return (
		<ul className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 lg:grid-cols-4" aria-label={label}>
			{items.map((item, index) => {
				const [width, height] = imageSize(item.photo);
				return (
					<Reveal as="li" key={item.photo} delay={(index % 4) as 0 | 1 | 2 | 3} className={`${SHAPES[index % SHAPES.length]} ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
						<Link to={`/projects/${item.slug}/`} className="mosaic-tile frame group block h-full">
							<img src={img(item.photo, 'sm')} srcSet={srcSet(item.photo)} sizes={index === 0 ? '(min-width: 1024px) 42vw, 100vw' : '(min-width: 1024px) 21vw, 50vw'} alt={item.alt} width={width} height={height} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
							<span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" aria-hidden="true" />
							<span className="absolute inset-x-0 bottom-0 p-4 text-sm leading-snug font-semibold text-white sm:p-5 sm:text-base">{item.caption}</span>
						</Link>
					</Reveal>
				);
			})}
		</ul>
	);
}
