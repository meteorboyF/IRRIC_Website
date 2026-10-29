import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import { pressByProject } from '../data/press';
import { projectBySlug, projects } from '../data/projects';
import type { ImageRef } from '../data/types';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { Lightbox } from '../components/Lightbox';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectImage } from '../components/ProjectImage';
import { Reveal } from '../components/Reveal';
import { SmartLink } from '../components/SmartLink';
import { StatusTag } from '../components/StatusTag';
import { NAV } from '../components/nav';
import { img, imageSize, srcSet } from '../lib/img';
import { seo } from '../lib/seo';
import { NotFoundContent } from '../components/NotFoundContent';
import type { Route } from './+types/project';

export function meta({ params }: Route.MetaArgs) {
	const project = projectBySlug.get(params.slug);
	if (!project) return seo({ title: 'Page not found', description: 'This page does not exist.', path: '/404/', noindex: true });
	return seo({ title: project.title, description: project.tagline.endsWith('.') ? project.tagline : `${project.tagline}. ${project.summary.split('. ')[0]}.`, path: `/projects/${project.slug}/`, image: project.image?.name, type: 'article' });
}

const PREVIEW = 12;

const PLURAL: Record<string, string> = {
	'Research and innovation': 'research and innovation projects',
	Incubation: 'incubation programmes',
	Competition: 'competitions',
	Event: 'events',
	Training: 'training programmes',
	Partnership: 'partnership agreements',
	Visit: 'visits'
};

export default function ProjectDetail() {
	const { slug = '' } = useParams();
	const project = projectBySlug.get(slug);
	const [lightbox, setLightbox] = useState<number | null>(null);
	const [showAll, setShowAll] = useState(false);
	const grid = useRef<HTMLUListElement>(null);

	if (!project) return <NotFoundContent />;

	const photos: ImageRef[] = [...(project.image ? [project.image] : []), ...(project.gallery ?? [])];
	const visible = showAll ? photos : photos.slice(0, PREVIEW);
	const coverage = pressByProject(project.slug);
	const related = projects.filter((other) => other.slug !== project.slug && other.type === project.type).slice(0, 3);
	const heroPhoto = project.image && project.image.fit !== 'contain' ? project.image : null;

	function showEverything() {
		setShowAll(true);
		// Keep keyboard users anchored: move focus to the first newly shown photo.
		requestAnimationFrame(() => grid.current?.querySelectorAll<HTMLButtonElement>('button')[PREVIEW]?.focus());
	}

	return (
		<>
			<section className={`on-dark relative flex min-h-[56svh] items-end text-white ${heroPhoto ? 'photo-duo scrim' : 'band-dark grain'}`}>
				{heroPhoto && <img src={img(heroPhoto.name, 'sm')} srcSet={srcSet(heroPhoto.name)} sizes="100vw" alt={heroPhoto.alt} width={imageSize(heroPhoto.name)[0]} height={imageSize(heroPhoto.name)[1]} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />}
				<div className="container-page relative z-10 pt-28 pb-12 lg:pb-16">
					<Link to={NAV.projects.to} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
						<Icon name="arrow-left" className="h-4 w-4" />
						All projects
					</Link>
					<p className="eyebrow">
						{project.type}
						{project.dateLabel && ` · ${project.dateLabel}`}
					</p>
					<h1 className="mt-3 max-w-5xl font-display text-[clamp(2.3rem,6vw,4.75rem)] leading-[1.02] font-bold text-balance">{project.title}</h1>
					<p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{project.tagline}</p>
				</div>
			</section>

			<section className="bg-paper py-16 lg:py-24">
				<div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
					<Reveal>
						<dl className="card grid gap-5 p-6">
							<div>
								<dt className="eyebrow">Type</dt>
								<dd className="mt-1.5 font-semibold">{project.type}</dd>
							</div>
							{project.status && (
								<div className="border-t border-ink-900/8 pt-5">
									<dt className="eyebrow">Status</dt>
									<dd className="mt-2">
										<StatusTag status={project.status} />
									</dd>
								</div>
							)}
							{project.dateLabel && (
								<div className="border-t border-ink-900/8 pt-5">
									<dt className="eyebrow">Date</dt>
									<dd className="mt-1.5 font-semibold">{project.dateLabel}</dd>
								</div>
							)}
							{project.areas && project.areas.length > 0 && (
								<div className="border-t border-ink-900/8 pt-5">
									<dt className="eyebrow">Research areas</dt>
									<dd className="mt-2 flex flex-wrap gap-2">
										{project.areas.map((area) => (
											<span key={area} className="tag tag-muted">
												{area}
											</span>
										))}
									</dd>
								</div>
							)}
						</dl>
						{project.image && project.image.fit === 'contain' && <ProjectImage image={project.image} sizes="(min-width: 1024px) 35vw, 100vw" className="card mt-6 aspect-[4/3]" priority />}
					</Reveal>

					<Reveal delay={1}>
						<p className="text-lg leading-relaxed text-ink-700">{project.summary}</p>
						{project.highlights && project.highlights.length > 0 && (
							<>
								<h2 className="mt-10 font-display text-2xl font-bold">Highlights</h2>
								<ul className="mt-5 grid gap-3">
									{project.highlights.map((item) => (
										<li key={item} className="flex gap-3">
											<Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-700" strokeWidth={2} />
											<span className="leading-relaxed text-ink-700">{item}</span>
										</li>
									))}
								</ul>
							</>
						)}
						{project.outcomes && project.outcomes.length > 0 && (
							<>
								<h2 className="mt-10 font-display text-2xl font-bold">Outcomes and recognition</h2>
								<ul className="mt-5 grid gap-3">
									{project.outcomes.map((item) => (
										<li key={item} className="flex gap-3">
											<Icon name="trophy" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-700" />
											<span className="leading-relaxed text-ink-700">{item}</span>
										</li>
									))}
								</ul>
							</>
						)}
						{project.partners && project.partners.length > 0 && (
							<>
								<h2 className="mt-10 font-display text-2xl font-bold">Partners</h2>
								<ul className="mt-5 flex flex-wrap gap-2">
									{project.partners.map((partner) => (
										<li key={partner} className="tag tag-muted px-3 py-1.5 text-sm">
											{partner}
										</li>
									))}
								</ul>
							</>
						)}
					</Reveal>
				</div>
			</section>

			{photos.length > 1 && (
				<section className="border-y border-ink-900/8 bg-white py-16 lg:py-24" aria-labelledby="photos-heading">
					<div className="container-page">
						<p className="eyebrow">Gallery</p>
						<h2 id="photos-heading" className="mt-2 font-display text-3xl font-bold">
							{photos.length} images
						</h2>
						<ul ref={grid} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
							{visible.map((photo, index) => (
								<li key={photo.name}>
									<button type="button" onClick={() => setLightbox(index)} className="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-ink-900/8 bg-paper" aria-label={`Open image ${index + 1} of ${photos.length}: ${photo.alt}`}>
										<img src={img(photo.name, 'sm')} alt="" loading="lazy" decoding="async" className={`aspect-[4/3] w-full ${photo.fit === 'contain' ? 'object-contain p-2' : 'object-cover'}`} />
									</button>
								</li>
							))}
						</ul>
						{photos.length > PREVIEW && !showAll && (
							<button type="button" className="btn btn-primary mt-8" onClick={showEverything}>
								Show all {photos.length} images
							</button>
						)}
					</div>
				</section>
			)}

			{lightbox !== null && <Lightbox photos={photos} index={lightbox} onIndexChange={setLightbox} title={project.title} onClose={() => setLightbox(null)} />}

			{(project.links.length > 0 || coverage.length > 0) && (
				<section className="bg-paper py-16 lg:py-20" aria-labelledby="links-heading">
					<div className="container-page">
						<h2 id="links-heading" className="font-display text-2xl font-bold">
							Links and coverage
						</h2>
						{coverage.length > 0 && (
							<ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
								{coverage.map((item) => (
									<li key={item.slug} className="card p-5">
										<p className="text-xs font-semibold text-ink-600">
											{item.outlet}
											{item.dateLabel && ` · ${item.dateLabel}`}
										</p>
										<SmartLink href={item.url} className="link mt-1.5 inline-block">
											{item.headline}
										</SmartLink>
									</li>
								))}
							</ul>
						)}
						<ul className="mt-6 flex flex-wrap gap-3">
							{project.links.map((link) => (
								<li key={link.url}>
									<SmartLink href={link.url} className="btn btn-ghost btn-sm">
										{link.label}
										<Icon name={link.url.startsWith('/') ? 'arrow-right' : 'arrow-up-right'} className="h-4 w-4" />
									</SmartLink>
								</li>
							))}
						</ul>
					</div>
				</section>
			)}

			{related.length > 0 && (
				<section className="border-t border-ink-900/8 bg-white py-16 lg:py-20" aria-labelledby="related-heading">
					<div className="container-page">
						<h2 id="related-heading" className="font-display text-2xl font-bold">
							More {PLURAL[project.type] ?? 'work'}
						</h2>
						<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{related.map((other) => (
								<li key={other.slug}>
									<ProjectCard project={other} />
								</li>
							))}
						</ul>
					</div>
				</section>
			)}

			<CtaBand />
		</>
	);
}
