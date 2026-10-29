import { useRef, useState } from 'react';
import { Link } from 'react-router';
import type { ImageRef, Project } from '../data/types';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { img } from '../lib/img';
import { Icon } from './Icon';
import { Lightbox } from './Lightbox';

const PREVIEW = 12;

/** A project's photos in a dialog, capped at 12 with a link to the full page. */
export function GalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
	const dialog = useRef<HTMLDivElement>(null);
	const closeButton = useRef<HTMLButtonElement>(null);
	const [lightbox, setLightbox] = useState<number | null>(null);
	const photos: ImageRef[] = [...(project.image ? [project.image] : []), ...(project.gallery ?? [])];
	// Both traps listen on their own dialog node, so while the lightbox is
	// open only it sees Escape and Tab; closing it returns focus to the
	// thumbnail that opened it, still inside this dialog.
	useFocusTrap(dialog, true, onClose, closeButton);

	return (
		<>
			<div className="fixed inset-0 z-[100] flex items-end bg-ink-950/75 sm:items-center sm:p-6" onClick={(event) => event.target === event.currentTarget && onClose()} role="presentation">
				<div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="gallery-title" className="max-h-[92svh] w-full overflow-y-auto rounded-t-2xl bg-paper shadow-card-lg sm:mx-auto sm:max-w-5xl sm:rounded-2xl">
					<div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink-900/10 bg-paper px-5 py-4 sm:px-8">
						<div>
							<p className="eyebrow">Photos · {photos.length}</p>
							<h2 id="gallery-title" className="mt-1 font-display text-2xl font-bold text-ink-900">
								{project.title}
							</h2>
						</div>
						<button ref={closeButton} type="button" onClick={onClose} className="btn btn-ghost btn-sm" aria-label="Close photo gallery">
							<Icon name="close" className="h-4 w-4" />
						</button>
					</div>
					<div className="px-5 py-6 sm:px-8">
						<ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
							{photos.slice(0, PREVIEW).map((photo, index) => (
								<li key={photo.name}>
									<button type="button" onClick={() => setLightbox(index)} className="block w-full cursor-zoom-in overflow-hidden rounded-lg bg-white" aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.alt}`}>
										<img src={img(photo.name, 'sm')} alt="" loading="lazy" className={`aspect-[4/3] w-full ${photo.fit === 'contain' ? 'object-contain p-2' : 'object-cover'}`} />
									</button>
								</li>
							))}
						</ul>
						<div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900/10 pt-5">
							<p className="text-sm text-ink-600">{photos.length > PREVIEW ? `Showing ${PREVIEW} of ${photos.length} photos. The rest are on the project page.` : 'Details, partners and links are on the project page.'}</p>
							<Link to={`/projects/${project.slug}/`} className="btn btn-primary">
								{project.title}
								<Icon name="arrow-right" className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			{lightbox !== null && <Lightbox photos={photos} index={lightbox} onIndexChange={setLightbox} title={project.title} onClose={() => setLightbox(null)} />}
		</>
	);
}
