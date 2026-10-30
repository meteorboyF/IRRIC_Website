import { useId, useMemo, useState } from 'react';
import { projectTypes, projectYear, projects } from '../data/projects';
import type { Project, ProjectStatus, ProjectType } from '../data/types';
import { CtaBand } from '../components/CtaBand';
import { GalleryModal } from '../components/GalleryModal';
import { Icon } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { ProjectCard } from '../components/ProjectCard';
import { seo } from '../lib/seo';

export const meta = () =>
	seo({
		title: 'Projects',
		description: 'Research and innovation projects, incubation cohorts, hackathons, events and partnerships from IRIIC at United International University, searchable by type, year and status.',
		path: '/projects/',
		image: 'hero/projects'
	});

type Sort = 'featured' | 'newest' | 'oldest' | 'az';
const STATUSES: Exclude<ProjectStatus, null>[] = ['Ongoing', 'Commercialised', 'Completed'];
const YEARS = [...new Set(projects.map(projectYear).filter((year): year is number => year !== null))].sort((a, b) => b - a);

function matches(project: Project, query: string): boolean {
	if (!query) return true;
	const haystack = [project.title, project.tagline, project.type, project.summary, project.dateLabel, ...(project.areas ?? []), ...(project.partners ?? [])].filter(Boolean).join(' ').toLocaleLowerCase('en-GB');
	return query
		.toLocaleLowerCase('en-GB')
		.split(/\s+/)
		.every((word) => haystack.includes(word));
}

function sortProjects(list: Project[], sort: Sort): Project[] {
	if (sort === 'featured') return list;
	const copy = [...list];
	if (sort === 'az') return copy.sort((a, b) => a.title.localeCompare(b.title, 'en-GB'));
	return copy.sort((a, b) => {
		// Undated items sink to the end in both date orders.
		if (a.sortKey === 0 && b.sortKey === 0) return a.title.localeCompare(b.title, 'en-GB');
		if (a.sortKey === 0) return 1;
		if (b.sortKey === 0) return -1;
		return sort === 'newest' ? b.sortKey - a.sortKey : a.sortKey - b.sortKey;
	});
}

function FilterGroup<T extends string | number>({ label, options, value, onChange, format = String }: { label: string; options: readonly T[]; value: T | null; onChange: (value: T | null) => void; format?: (value: T) => string }) {
	return (
		<fieldset className="min-w-0">
			<legend className="mb-2 text-xs font-semibold text-ink-700">{label}</legend>
			<div className="flex flex-wrap gap-2">
				<button type="button" className="chip" aria-pressed={value === null} onClick={() => onChange(null)}>
					All
				</button>
				{options.map((option) => (
					<button key={option} type="button" className="chip" aria-pressed={value === option} onClick={() => onChange(value === option ? null : option)}>
						{format(option)}
					</button>
				))}
			</div>
		</fieldset>
	);
}

export default function Projects() {
	const searchId = useId();
	const sortId = useId();
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState<Sort>('featured');
	const [type, setType] = useState<ProjectType | null>(null);
	const [year, setYear] = useState<number | null>(null);
	const [status, setStatus] = useState<Exclude<ProjectStatus, null> | null>(null);
	const [gallery, setGallery] = useState<Project | null>(null);

	const results = useMemo(() => {
		const query_ = query.trim();
		const filtered = projects.filter((project) => (type === null || project.type === type) && (year === null || projectYear(project) === year) && (status === null || project.status === status) && matches(project, query_));
		return sortProjects(filtered, sort);
	}, [query, sort, type, year, status]);

	const filtersActive = query.trim() !== '' || type !== null || year !== null || status !== null;
	function clearFilters() {
		setQuery('');
		setType(null);
		setYear(null);
		setStatus(null);
	}

	return (
		<>
			<PageIntro eyebrow="Projects" title="Everything IRIIC has built, run and signed" lede="Research projects, incubation cohorts, hackathons, events, visits and partnership agreements." photo="hero/projects" photoAlt="Hackathon participants discussing a solution around a laptop" />

			<section className="bg-white py-20 lg:py-24" aria-labelledby="index-heading">
				<div className="container-page">
					<h2 id="index-heading" className="sr-only">
						Project index
					</h2>
					<div className="card flex flex-col gap-6 bg-paper p-5 sm:p-6">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div className="w-full sm:max-w-md">
								<label htmlFor={searchId} className="mb-1.5 block text-sm font-semibold text-ink-800">
									Search projects
								</label>
								<div className="relative">
									<input id={searchId} type="search" value={query} onChange={(event) => setQuery(event.target.value.slice(0, 80))} maxLength={80} placeholder="Try ‘endometriosis’, ‘BCI’ or ‘Toronto’" className="field pr-10" autoComplete="off" />
									<Icon name="search" className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-ink-500" />
								</div>
							</div>
							<div>
								<label htmlFor={sortId} className="mb-1.5 block text-sm font-semibold text-ink-800">
									Sort
								</label>
								<select id={sortId} value={sort} onChange={(event) => setSort(event.target.value as Sort)} className="field sm:w-48">
									<option value="featured">Featured</option>
									<option value="newest">Newest first</option>
									<option value="oldest">Oldest first</option>
									<option value="az">A to Z</option>
								</select>
							</div>
						</div>
						<FilterGroup label="Type" options={projectTypes} value={type} onChange={setType} />
						<div className="grid gap-6 lg:grid-cols-2">
							<FilterGroup label="Year" options={YEARS} value={year} onChange={setYear} />
							<FilterGroup label="Status" options={STATUSES} value={status} onChange={setStatus} />
						</div>
					</div>

					<div className="mt-6 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm font-medium text-ink-700" aria-live="polite" aria-atomic="true">
							{results.length} of {projects.length} {projects.length === 1 ? 'item' : 'items'}
						</p>
						{filtersActive && (
							<button type="button" className="link text-sm" onClick={clearFilters}>
								Clear filters
							</button>
						)}
					</div>

					{results.length > 0 ? (
						<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{results.map((project) => (
								<li key={project.slug}>
									<ProjectCard project={project} onOpenGallery={setGallery} />
								</li>
							))}
						</ul>
					) : (
						<div className="mt-8 rounded-2xl border border-dashed border-ink-900/20 bg-paper p-10 text-center">
							<p className="font-display text-xl font-bold text-ink-900">Nothing matches those filters</p>
							<p className="mt-2 text-sm text-ink-600">Try a broader search, or clear the filters to see everything.</p>
							<button type="button" className="btn btn-ghost btn-sm mt-5" onClick={clearFilters}>
								Clear filters
							</button>
						</div>
					)}
				</div>
			</section>

			{gallery && <GalleryModal project={gallery} onClose={() => setGallery(null)} />}

			<CtaBand />
		</>
	);
}
