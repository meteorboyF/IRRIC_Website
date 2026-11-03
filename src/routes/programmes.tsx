import { Link } from 'react-router';
import { projectBySlug } from '../data/projects';
import { CtaBand } from '../components/CtaBand';
import { Icon, type IconName } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { NAV } from '../components/nav';
import { img, imageSize, srcSet } from '../lib/img';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Programmes', description: 'How to work with IRIIC: startup incubation through LaunchPad, the Harvard HSIL Hackathon Dhaka hub, research collaboration with industry and government, training, and internships.', path: '/programmes/', image: 'hero/programmes' });

/** Links to a project always carry that project's own title. */
function projectLink(slug: string) {
	const project = projectBySlug.get(slug);
	if (!project) throw new Error(`Unknown project ${slug}`);
	return { label: project.title, to: `/projects/${slug}/` };
}

interface Programme {
	id: string;
	icon: IconName;
	photo: { name: string; alt: string };
	eyebrow: string;
	title: string;
	text: string;
	points: string[];
	who: string;
	links: { label: string; to: string }[];
}

const PROGRAMMES: Programme[] = [
	{
		id: 'incubation',
		icon: 'rocket',
		photo: { name: 'projects/launchpad-cycle-1/1', alt: 'A winning LaunchPad team holding a seed funding cheque' },
		eyebrow: 'Incubation',
		title: 'LaunchPad by UIHP@UIU',
		text: 'The startup incubation programme of UIU’s University Innovation Hub, hosted by IRIIC and supported by the DEIED project of the Bangladesh Hi-Tech Park Authority, the ICT Division and the World Bank.',
		points: ['National calls open to students, faculty and alumni of any university.', 'Teams of three to five, including at least one woman.', 'Months of mentorship and prototype support, ending in a pitch for seed or pre-seed funding.'],
		who: 'Student and early-stage founding teams.',
		links: [
			projectLink('launchpad-cycle-1'),
			projectLink('launchpad-cycle-2')
		]
	},
	{
		id: 'hackathon',
		icon: 'trophy',
		photo: { name: 'projects/harvard-hsil-hackathon-2025/2', alt: 'A hackathon team discussing ideas over their laptops' },
		eyebrow: 'Competition',
		title: 'Harvard HSIL Hackathon, Dhaka hub',
		text: 'IRIIC is Bangladesh’s hub for the Health Systems Innovation Lab Hackathon run by the Harvard T.H. Chan School of Public Health. Teams spend two days building AI solutions for health system problems, with winners going on to HSIL’s venture programme.',
		points: ['Hosted in 2025 and 2026.', 'Mentors from hospitals, government, industry and universities.', 'Winning teams join the HSIL venture-building track.'],
		who: 'Students, clinicians, engineers, designers and early-stage startups.',
		links: [
			projectLink('harvard-hsil-hackathon-2026'),
			projectLink('harvard-hsil-hackathon-2025')
		]
	},
	{
		id: 'research',
		icon: 'flask',
		photo: { name: 'projects/focus-mind/cover', alt: 'Adults in a meeting room, some wearing EEG headbands, during a Focus Mind research session' },
		eyebrow: 'Research collaboration',
		title: 'Research with industry and government',
		text: 'Through its Industry & Academia Collaboration Center and its labs, IRIIC works with companies, public bodies and universities on research that can become products, policy or intellectual property.',
		points: ['Memoranda of understanding with companies and research centres.', 'Joint projects in digital health, BCI, NLP and energy.', 'Showcases and workshops for visiting delegations.'],
		who: 'Companies, government bodies, NGOs and research institutions.',
		links: [
			{ label: NAV.projects.label, to: NAV.projects.to },
			{ label: NAV.partners.label, to: NAV.partners.to }
		]
	},
	{
		id: 'training',
		icon: 'school',
		photo: { name: 'projects/ai-essentials-capital-markets-2025/cover', alt: 'Trainer talking with LankaBangla Securities officials around a table at the AI training' },
		eyebrow: 'Training and events',
		title: 'Training, talks and seminars',
		text: 'Hands-on training for professional teams, and public talks and seminars on research, innovation and intellectual property.',
		points: ['AI Essentials for Capital Market Professionals, run with AI Forum Bangladesh in October 2025.', 'Innovation Talks with industry leaders.', 'UIU Research and Innovation Week, and the World IP Day seminar.'],
		who: 'Organisations, students and the public.',
		links: [
			projectLink('ai-essentials-capital-markets-2025'),
			projectLink('research-innovation-week-2024')
		]
	}
];

export default function Programmes() {
	return (
		<>
			<PageIntro eyebrow="Programmes" title="Ways to work with IRIIC" lede="Incubation for founders, a Harvard hackathon hub, research collaboration for partners, training for teams, and internships for students." photo="hero/programmes" photoAlt="Audience at the LaunchPad final pitch day" inset={{ photo: 'projects/harvard-hsil-hackathon-2025/4', alt: 'Hackathon participants concentrating on their work' }} />

			<section className="bg-paper py-24 lg:py-32">
				<div className="container-page grid gap-8">
					{PROGRAMMES.map((programme, index) => (
						<Reveal as="article" key={programme.id} delay={(index % 2) as 0 | 1} className="card grid gap-8 p-7 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
							<div>
								<div className="flex items-center gap-3">
									<span className="grid h-11 w-11 place-items-center rounded-xl bg-ocean-50 text-ocean-700">
										<Icon name={programme.icon} className="h-6 w-6" />
									</span>
									<p className="eyebrow">{programme.eyebrow}</p>
								</div>
								<h2 id={programme.id} className="mt-4 scroll-mt-24 font-display text-3xl font-bold">
									{programme.title}
								</h2>
								<p className="mt-3 max-w-2xl leading-relaxed text-ink-700">{programme.text}</p>
								<ul className="mt-5 grid gap-2.5">
									{programme.points.map((point) => (
										<li key={point} className="flex gap-3">
											<Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-700" strokeWidth={2} />
											<span className="leading-relaxed text-ink-700">{point}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="flex flex-col gap-6 overflow-hidden rounded-xl bg-paper">
								<div className="frame aspect-[16/10] rounded-none">
									<img src={img(programme.photo.name, 'sm')} srcSet={srcSet(programme.photo.name)} sizes="(min-width: 1024px) 34vw, 100vw" alt={programme.photo.alt} width={imageSize(programme.photo.name)[0]} height={imageSize(programme.photo.name)[1]} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
								</div>
								<div className="px-6">
									<p className="text-sm font-semibold text-ink-700">Who it is for</p>
									<p className="mt-1 leading-relaxed text-ink-900">{programme.who}</p>
								</div>
								<ul className="mt-auto grid gap-2 px-6 pb-6">
									{programme.links.map((link) => (
										<li key={link.to}>
											<Link to={link.to} className="link inline-flex items-center gap-1.5">
												{link.label}
												<Icon name="arrow-right" className="h-4 w-4" />
											</Link>
										</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			<section className="border-t border-ink-900/8 bg-white py-20 lg:py-24" aria-labelledby="internships">
				<div className="container-page grid gap-10 lg:grid-cols-2">
					<SectionHead id="internships" eyebrow="Internships" title="Internships at IRIIC" lede="IRIIC takes students and recent graduates on internships in AI and machine learning, brain–computer interfaces, natural language processing and health technology, with mentoring and weekly group meetings." />
					<Reveal delay={1} className="card p-7">
						<h3 className="font-display text-xl font-bold">How to apply</h3>
						<p className="mt-2 text-sm leading-relaxed text-ink-600">To apply:</p>
						<ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-ink-700">
							<li>Email a CV and cover letter to aimsl@uiu.ac.bd with the subject “Internship Application – [your field of interest]”.</li>
							<li>Attend an interview if shortlisted.</li>
							<li>Receive an offer setting out the position, project and duration.</li>
						</ol>
						<div className="mt-6 flex flex-wrap gap-3">
							<SmartLink href="mailto:aimsl@uiu.ac.bd?subject=Internship%20Application" className="btn btn-primary btn-sm">
								Email aimsl@uiu.ac.bd
							</SmartLink>
							<Link to={NAV.careers.to} className="btn btn-ghost btn-sm">
								{NAV.careers.label}
							</Link>
						</div>
						<p className="mt-4 text-xs text-ink-600">Internship roles with deadlines are listed on the careers page.</p>
					</Reveal>
				</div>
			</section>

			<CtaBand title="Not sure which fits?" text="Tell us what you have in mind and we will point you to the right programme." />
		</>
	);
}
