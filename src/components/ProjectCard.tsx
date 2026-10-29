import { Link } from 'react-router';
import type { Project } from '../data/types';
import { Icon } from './Icon';
import { ProjectImage } from './ProjectImage';
import { StatusTag } from './StatusTag';

/**
 * Card for the projects index and home page. The whole card is one link
 * (the title's link stretches over it), so its hover lift signals a real
 * click target. The optional gallery button sits above the stretched link.
 */
export function ProjectCard({ project, onOpenGallery, headingLevel = 'h3' }: { project: Project; onOpenGallery?: (project: Project) => void; headingLevel?: 'h2' | 'h3' }) {
	const Heading = headingLevel;
	return (
		<article className="card group relative flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-lg focus-within:shadow-card-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
			{project.image ? (
				<ProjectImage image={project.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="aspect-[16/10]" decorative />
			) : (
				<div className="traces flex aspect-[16/10] items-end bg-ocean-50 p-5" aria-hidden="true">
					<span className="font-display text-2xl font-bold text-ocean-800">{project.type}</span>
				</div>
			)}
			<div className="flex flex-1 flex-col p-6">
				<div className="flex flex-wrap items-center gap-2">
					<span className="tag">{project.type}</span>
					<StatusTag status={project.status} />
					{project.dateLabel && (
						<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600">
							<Icon name="calendar" className="h-3.5 w-3.5" />
							{project.dateLabel}
						</span>
					)}
				</div>
				<Heading className="mt-4 font-display text-xl leading-snug font-bold text-ink-900">
					<Link to={`/projects/${project.slug}/`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
						{project.title}
					</Link>
				</Heading>
				<p className="mt-2 text-sm leading-relaxed text-ink-600">{project.tagline}</p>
				<p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-ocean-700">
					Read more
					<Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
				</p>
			</div>
			{onOpenGallery && project.gallery && project.gallery.length > 0 && (
				<button
					type="button"
					onClick={() => onOpenGallery(project)}
					className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-white hover:bg-ink-950"
					aria-label={`View photos of ${project.title} (${project.gallery.length + 1})`}
				>
					<Icon name="images" className="h-4 w-4" />
					{project.gallery.length + 1}
				</button>
			)}
		</article>
	);
}
