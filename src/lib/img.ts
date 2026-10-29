import rawSizes from '../data/image-sizes.json';

const BASE = import.meta.env.BASE_URL;

/** URL of an optimised image by logical name, e.g. img('hero/home') or img('hero/home', 'sm'). */
export function img(name: string, variant?: 'sm'): string {
	return `${BASE}images/${name}${variant ? '-sm' : ''}.webp`;
}

/** [width, height] of the full-size file, plus the -sm width when one exists. */
type Size = [width: number, height: number, smallWidth?: number];
const sizes = rawSizes as unknown as Record<string, Size>;

/** Intrinsic [width, height] of the full-size file. */
export function imageSize(name: string): [number, number] {
	const size = sizes[name];
	if (!size) throw new Error(`No size recorded for image "${name}"`);
	return [size[0], size[1]];
}

/** srcset for an image with a -sm variant, using the real widths of both files. */
export function srcSet(name: string): string {
	const size = sizes[name];
	if (!size) throw new Error(`No size recorded for image "${name}"`);
	const [width, , small] = size;
	if (!small || small >= width) return `${img(name)} ${width}w`;
	return `${img(name, 'sm')} ${small}w, ${img(name)} ${width}w`;
}

/** Same-origin URL for a file in public/, e.g. asset('favicon.png'). */
export function asset(path: string): string {
	return `${BASE}${path.replace(/^\//, '')}`;
}
