import type { ProjectStatus } from '../data/types';

/** Renders only statuses a source states; unknown status renders nothing. */
export function StatusTag({ status }: { status: ProjectStatus }) {
	if (status === null) return null;
	const style = status === 'Ongoing' ? 'tag-live' : status === 'Commercialised' ? 'tag' : 'tag-muted';
	return <span className={`tag ${style}`}>{status}</span>;
}
