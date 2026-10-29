import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('about', 'routes/about.tsx'),
	route('about/people', 'routes/people.tsx'),
	route('projects', 'routes/projects.tsx'),
	route('projects/:slug', 'routes/project.tsx'),
	route('programmes', 'routes/programmes.tsx'),
	route('careers', 'routes/careers.tsx'),
	route('careers/:slug', 'routes/vacancy.tsx'),
	route('news', 'routes/news.tsx'),
	route('partners', 'routes/partners.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('privacy', 'routes/privacy.tsx'),
	route('terms', 'routes/terms.tsx'),
	route('cookies', 'routes/cookies.tsx'),
	route('*', 'routes/not-found.tsx')
] satisfies RouteConfig;
