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
export function ProjectCard({ project, onOpenGallery, headingLevel = 'h3', size = 'normal' }: { project: Project; onOpenGallery?: (project: Project) => void; headingLevel?: 'h2' | 'h3'; size?: 'normal' | 'large' }) {
	const Heading = headingLevel;
	const large = size === 'large';
	const media = large ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[20rem] lg:flex-1' : 'aspect-[16/10]';
	return (
		<article className="card group relative flex h-full flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-ocean-700/35 hover:shadow-card-lg focus-within:shadow-card-lg motion-reduce:transition-none">
			{project.image ? (
				<ProjectImage image={project.image} sizes={large ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw'} className={media} decorative />
			) : (
				<div className={`traces flex items-end bg-ocean-50 p-5 ${media}`} aria-hidden="true">
					<span className="font-display text-2xl font-bold text-ocean-800">{project.type}</span>
				</div>
			)}
			<div className={`flex flex-col p-6 ${large ? 'lg:p-8' : 'flex-1'}`}>
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
				<Heading className={`mt-4 leading-snug text-ink-900 ${large ? 'text-[clamp(1.6rem,2.6vw,2.25rem)]' : 'text-xl'}`}>
					<Link to={`/projects/${project.slug}/`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
						{project.title}
					</Link>
				</Heading>
				{large ? (
					<>
						<p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600 lg:hidden">{project.tagline}</p>
						<p className="mt-2 hidden text-lg leading-relaxed text-ink-600 lg:block">{project.summary}</p>
					</>
				) : (
					<p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{project.tagline}</p>
				)}
				<p className="mt-auto flex items-center gap-2 pt-5 font-display text-[0.9375rem] font-semibold text-ocean-700" aria-hidden="true">
					<span className="grid h-8 w-8 place-items-center rounded-full bg-ocean-50 transition-colors group-hover:bg-ocean-700 group-hover:text-white motion-reduce:transition-none">
						<Icon name="arrow-right" className="h-4 w-4" />
					</span>
					Read more
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
