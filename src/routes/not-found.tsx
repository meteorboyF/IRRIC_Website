import { NotFoundContent } from '../components/NotFoundContent';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Page not found', description: 'The page you were looking for could not be found on the IRIIC website.', path: '/404/', noindex: true });

export default function NotFound() {
	return <NotFoundContent />;
}
