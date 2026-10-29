import { useEffect, useRef, useState, type PointerEvent } from 'react';
import type { ImageRef } from '../data/types';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { img, imageSize } from '../lib/img';
import { Icon } from './Icon';

interface Props {
	photos: ImageRef[];
	index: number;
	onIndexChange: (index: number) => void;
	title: string;
	onClose: () => void;
}

/**
 * Full-screen photo viewer: arrow keys and swipe to move, Escape to close,
 * a "3 of 8" counter announced politely, neighbours preloaded, focus
 * trapped while open and restored to the opener on close.
 */
export function Lightbox({ photos, index, onIndexChange, title, onClose }: Props) {
	const dialog = useRef<HTMLDivElement>(null);
	const closeButton = useRef<HTMLButtonElement>(null);
	const [pointerStart, setPointerStart] = useState<number | null>(null);
	useFocusTrap(dialog, true, onClose, closeButton);

	const count = photos.length;
	const photo = photos[index];
	const prev = (index - 1 + count) % count;
	const next = (index + 1) % count;

	useEffect(() => {
		function onKey(event: KeyboardEvent) {
			if (count < 2) return;
			if (event.key === 'ArrowLeft') onIndexChange(prev);
			if (event.key === 'ArrowRight') onIndexChange(next);
		}
		const node = dialog.current;
		node?.addEventListener('keydown', onKey);
		return () => node?.removeEventListener('keydown', onKey);
	}, [count, prev, next, onIndexChange]);

	if (!photo) return null;
	const [width, height] = imageSize(photo.name);

	function onPointerUp(event: PointerEvent) {
		if (pointerStart === null || count < 2) return;
		const delta = event.clientX - pointerStart;
		setPointerStart(null);
		if (Math.abs(delta) < 48) return;
		onIndexChange(delta > 0 ? prev : next);
	}

	return (
		<div ref={dialog} className="fixed inset-0 z-[120] flex flex-col bg-ink-950/95" role="dialog" aria-modal="true" aria-label={`${title}: photo viewer`}>
			<div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
				<p className="min-w-0 truncate text-sm font-semibold text-white/85" aria-live="polite">
					<span className="hidden sm:inline">{title} · </span>
					<span className="tabular-nums">
						{index + 1} of {count}
					</span>
				</p>
				<div className="flex shrink-0 items-center gap-2">
					<a href={img(photo.name)} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark btn btn-sm">
						<Icon name="expand" className="h-4 w-4" />
						Full size<span className="sr-only"> (opens in a new tab)</span>
					</a>
					<button ref={closeButton} type="button" onClick={onClose} className="btn-ghost-dark btn btn-sm" aria-label="Close photo viewer">
						<Icon name="close" className="h-4 w-4" />
					</button>
				</div>
			</div>

			<div
				className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-2 pb-6 sm:px-20"
				onPointerDown={(event) => setPointerStart(event.clientX)}
				onPointerUp={onPointerUp}
			>
				<img key={photo.name} src={img(photo.name)} alt={photo.alt} width={width} height={height} draggable={false} className="lightbox-img max-h-full max-w-full rounded-lg bg-white object-contain select-none" />
				{count > 1 && (
					<>
						<button type="button" onClick={() => onIndexChange(prev)} aria-label="Previous photo" className="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-white hover:bg-white hover:text-ink-950 sm:left-5">
							<Icon name="chevron-left" />
						</button>
						<button type="button" onClick={() => onIndexChange(next)} aria-label="Next photo" className="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-white hover:bg-white hover:text-ink-950 sm:right-5">
							<Icon name="chevron-right" />
						</button>
					</>
				)}
			</div>

			{count > 1 && (
				<div className="hidden" aria-hidden="true">
					{[photos[prev], photos[next]].map((neighbour) => neighbour && <img key={neighbour.name} src={img(neighbour.name)} alt="" />)}
				</div>
			)}
		</div>
	);
}
