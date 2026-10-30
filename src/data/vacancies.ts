import type { Vacancy } from './types.ts';

/**
 * IRIIC vacancies, from IRIIC's Facebook page, its previous website and
 * UIU's careers site. Responsibilities and requirements are condensed in our
 * own words; "how to apply" follows each post's instructions.
 *
 * Status is never stored. A role is open while the build date (Asia/Dhaka)
 * is on or before its deadline; the daily scheduled rebuild moves expired
 * roles into the archive. A role with no stated deadline is treated as
 * closed unless it is re-listed with one, so it can never appear open
 * indefinitely.
 */

const FB = 'https://www.facebook.com/profile.php?id=61555389324566';
const UIU = 'https://www.uiu.ac.bd/career';

const AIMSCRIBE_PROJECT = 'AIMScribe (HEAT sub-project)';
const AIMSCRIBE_ABOUT =
	'AIMScribe is an IRIIC research project building an AI scribing system that turns doctor–patient conversations into clinical records and prescriptions. This post sits in its sub-project under the Higher Education Acceleration and Transformation (HEAT) project, managed by Prof. Mohammad Nurul Huda of UIU’s Department of Computer Science and Engineering, and is contractual for the duration of the project.';

export const vacancies: Vacancy[] = [
	{
		slug: 'aimscribe-office-secretary-2026',
		title: 'Office Secretary / Administrative Officer',
		project: AIMSCRIBE_PROJECT,
		type: 'Full-time, contractual',
		location: 'United International University, Dhaka',
		deadline: '2026-11-05',
		openings: 1,
		about: AIMSCRIBE_ABOUT,
		responsibilities: [
			'Run day-to-day office operations, logistics and project administration.',
			'Act as the main point of contact for project communication, scheduling and coordination.',
			'Keep project documentation, records and reporting systems in order.',
			'Help organise meetings, workshops, field visits and training sessions.',
			'Support procurement, inventory and vendor coordination.',
			'Handle correspondence with project partners, funders and UIU departments.',
			'Assist with HR tasks such as attendance, leave records and onboarding.',
			'Keep work in line with institutional policy, compliance requirements and timelines, and support the principal investigator and research staff.'
		],
		requirements: [
			'Bachelor’s degree in business administration, management or a related field.',
			'At least two years’ experience in office administration or project coordination; experience with government projects is preferred.',
			'Strong written and spoken Bangla and English.',
			'Proficiency in Word, Excel and PowerPoint, and familiarity with project management tools.',
			'Organised, detail-minded and able to work alone or in a team.',
			'Experience on academic, research or donor-funded projects is an advantage.'
		],
		howToApply: {
			steps: ['Apply through the online application form.'],
			url: 'https://forms.gle/phCiZGWX6FKNJ6iC9',
			urlLabel: 'Open the application form'
		},
		sourceUrl: `${UIU}/office-secretary-administrative-officer-2/`,
		sources: [`${UIU}/office-secretary-administrative-officer-2/`, `${UIU}/`, `${FB} ("Career Opportunities at IRIIC, UIU" post listing AIMScribe roles)`]
	},
	{
		slug: 'aimscribe-accountant-2026',
		title: 'Accountant',
		project: AIMSCRIBE_PROJECT,
		type: 'Full-time, contractual',
		location: 'United International University, Dhaka',
		deadline: '2026-11-05',
		openings: 1,
		about: AIMSCRIBE_ABOUT,
		responsibilities: [
			'Keep accurate records of project transactions in line with UIU and donor policies.',
			'Prepare monthly, quarterly and annual financial statements and reports.',
			'Manage budgets, track spending and support financial planning and forecasting.',
			'Process disbursements, reimbursements and vendor payments, with documentation ready for audit.',
			'Support procurement with cost comparisons, invoice checks and contract monitoring.',
			'Work with auditors, funders and UIU’s finance office on compliance.',
			'Maintain payroll records for project staff and consultants, and give project leaders financial insight.'
		],
		requirements: [
			'Bachelor’s degree in accounting, finance or a related field; a master’s is preferred.',
			'At least two years’ accounting experience, preferably on research or development projects or in NGOs; government project experience is preferred.',
			'Sound knowledge of accounting standards, financial reporting and audit.',
			'Accounting software such as Tally, QuickBooks or an ERP, and advanced Excel.',
			'Organised, punctual and detail-minded; familiarity with donor-funded finance is a plus.',
			'Strong integrity and commitment to financial transparency.'
		],
		howToApply: {
			steps: ['Apply through the online application form.'],
			url: 'https://forms.gle/iKXpiY2YQBHGGms58',
			urlLabel: 'Open the application form'
		},
		sourceUrl: `${UIU}/accountant-heat-project/`,
		sources: [`${UIU}/accountant-heat-project/`, `${UIU}/`]
	},
	{
		slug: 'aimscribe-data-entry-operator-2026',
		title: 'Data Entry / Computer Operator',
		project: AIMSCRIBE_PROJECT,
		type: 'Full-time, contractual',
		location: 'United International University, Dhaka',
		deadline: '2026-11-05',
		openings: 1,
		about: AIMSCRIBE_ABOUT,
		responsibilities: [
			'Enter and update project administrative data accurately in databases and systems.',
			'Check data for errors and inconsistencies, correct them and quality-check the output.',
			'Look after project hardware and digital files so they are secure and easy to find.',
			'Produce reports, file completed work and run regular backups.',
			'Help the team compile, clean and prepare data for analysis.',
			'Give general administrative support to the project team.'
		],
		requirements: [
			'Diploma in computer science or computer applications, or a relevant bachelor’s degree.',
			'At least one year’s experience as a data entry operator, computer operator or similar; research, healthcare or technology experience is highly desirable.',
			'Fast, accurate typing and a keen eye for detail.',
			'Proficiency in Microsoft Office, especially Excel and Word.',
			'Audio transcription and data management experience is a strong plus.',
			'Organised, trustworthy with confidential data, and a good team communicator.'
		],
		howToApply: {
			steps: ['Apply through the online application form.'],
			url: 'https://forms.gle/W5F7QmXiiQCwsMHq6',
			urlLabel: 'Open the application form'
		},
		sourceUrl: `${UIU}/data-entry-computer-operator-2/`,
		sources: [`${UIU}/data-entry-computer-operator-2/`, `${UIU}/`]
	},
	{
		slug: 'aimscribe-field-research-intern-2026',
		title: 'Data Collector – Field Research Intern',
		project: AIMSCRIBE_PROJECT,
		type: 'Internship',
		location: 'Participating GP clinics in and around Dhaka',
		deadline: '2026-10-22',
		openings: 20,
		about:
			'A two-month, shift-based field internship collecting consented doctor–patient consultation recordings for AIMScribe in participating GP clinics. There were 14 regular and 6 relief positions across Badda and Mohakhali, Mirpur 11 and 12, Ershadnagar and Tongi, Dholpur and Jatrabari, Shyampur, Narayanganj and Dakshinkhan.',
		responsibilities: [
			'Check the recording setup in each consultation room before every shift.',
			'Facilitate informed consent and confirm each recording and its records are complete.',
			'Monitor recordings, fix basic problems and escalate the rest.',
			'Keep accurate daily logs and complete formal shift handovers.',
			'Safeguard equipment, consent forms and data, and never copy project data to personal devices.'
		],
		requirements: [
			'Current final-year undergraduate who can commit to the full two months.',
			'Preferred subjects: CSE, IT/ICT, EEE, data science, public health, health sciences, statistics or related.',
			'Comfortable with Windows laptops, audio devices and web forms.',
			'Strong spoken Bangla and enough English to follow project instructions.',
			'Punctual, careful with confidential information, and comfortable in busy clinics.',
			'Shortlisted candidates complete orientation, ethics and equipment training and a competency check before deployment.'
		],
		howToApply: {
			steps: ['Apply through the online application form.'],
			url: 'https://forms.gle/cDNtoFTVYcnn5nEf7',
			urlLabel: 'Open the application form'
		},
		sourceUrl: `${UIU}/data-collector-field-research-intern/`,
		sources: [`${UIU}/data-collector-field-research-intern/`]
	},
	{
		slug: 'research-engineer-nlp-2026',
		title: 'Research Engineer (NLP)',
		project: 'AIMS Lab, IRIIC',
		type: 'Research engineer',
		location: 'United International University, Dhaka',
		deadline: '2026-09-17',
		about:
			'AIMS Lab at IRIIC recruited research engineers in natural language processing to work on Bengali language technologies and large language models, on projects including Smart Reception (AI for citizen services) and Police GPT (an assistant for police-related information). The role was 40 hours a week with weekly group meetings.',
		responsibilities: [
			'Run research and experiments in NLP, LLMs and language modelling.',
			'Develop and evaluate Bengali NLP and LLM-based applications.',
			'Design, build and improve AI models and research prototypes.',
			'Work on speech-to-text, text-to-speech, retrieval-augmented generation, summarisation and conversational AI.',
			'Analyse results and contribute to papers and technical reports.'
		],
		requirements: [
			'BSc or MSc in CSE, EEE or a related field, with a CGPA of at least 3.00 out of 4.00.',
			'Strong Python, with at least two years’ experience.',
			'Good understanding of NLP, machine learning and language models.',
			'PyTorch, Hugging Face Transformers or similar is preferred; software development and Git are a plus.'
		],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://forms.gle/oJtSz89xqNK45RGc9', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Research Engineer (NLP) post, deadline 17 September 2026)`]
	},
	{
		slug: 'project-coordinator-2026-09',
		title: 'Project Coordinator',
		project: 'IRIIC',
		type: 'Full-time',
		location: 'IRIIC, United International University, Madani Avenue, Dhaka',
		deadline: '2026-09-17',
		responsibilities: [
			'Coordinate and monitor ongoing projects and activities.',
			'Support research, innovation, incubation and commercialisation initiatives.',
			'Prepare project documents, reports, proposals and presentations.',
			'Coordinate meetings, workshops, training, hackathons and other events.',
			'Follow up with internal and external stakeholders.',
			'Support research, data collection, reporting, budgeting and documentation, and deliver on time.'
		],
		requirements: [
			'Completed graduation; fresh graduates were welcome.',
			'Preferred background in BBA, CSE, EEE or a related discipline.',
			'Organised, a clear communicator, and confident with documentation and presentations.',
			'Able to prepare reports, proposals, minutes and official correspondence.',
			'Comfortable working with researchers, faculty, industry and external organisations under pressure and with little supervision.'
		],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://forms.gle/36qoYdn9QsbtFyU89', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Project Coordinator post, deadline 17 September 2026)`]
	},
	{
		slug: 'project-coordinator-full-time-intern-2026',
		title: 'Project Coordinator (Full Time / Intern)',
		project: 'IRIIC',
		type: 'Full-time or internship',
		location: 'United City, Madani Avenue, Dhaka',
		deadline: '2026-05-16',
		responsibilities: [
			'Help plan, run, schedule and monitor projects.',
			'Prepare reports, proposals, presentations and minutes.',
			'Coordinate with researchers, internal teams and external collaborators.',
			'Support workshops, training and institutional innovation programmes.',
			'Assist with research, data collection and analysis, and improve processes.'
		],
		requirements: [
			'Open to fresh graduates, final-trimester students and candidates with only an internship remaining.',
			'Preferred background in CSE, EEE, BBA or a related discipline.',
			'Strong communication, organisation and multitasking.',
			'Proficient in Microsoft Office and professional documentation, with basic research and reporting skills.'
		],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://forms.gle/Ux74PggTFFetg5ZF6', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Project Coordinator (Full Time/Intern) post, deadline 16 May 2026)`]
	},
	{
		slug: 'video-content-creator-2026',
		title: 'Video Content Creator',
		project: 'IRIIC',
		type: 'Full-time',
		location: 'IRIIC, United International University, Madani Avenue, Dhaka',
		postedLabel: '27 January 2026',
		deadline: '2026-04-25',
		about: 'A hands-on creative role producing podcasts, short reels, promotional videos, advertisements and campaigns about IRIIC’s research and innovation work.',
		responsibilities: [
			'Shoot and produce video for podcasts, interviews, events and institutional activities.',
			'Edit promotional videos, advertisements, reels and campaign content.',
			'Create short-form video for social media and package long-form talks and documentaries.',
			'Publish and optimise video for each platform, including captions and resolution.',
			'Work with the social media, design and communications teams, cover live events and field shoots, and keep the video archive organised.'
		],
		requirements: [
			'Strong videography, editing and visual storytelling skills.',
			'Experience with Premiere Pro, DaVinci Resolve, After Effects, CapCut or similar.',
			'Understanding of framing, lighting, sound, stabilisation and basic colour correction on phones and professional cameras.',
			'Experience with short-form and long-form formats and with YouTube, Facebook, LinkedIn and Instagram standards.',
			'Able to manage several projects and deadlines independently.'
		],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://docs.google.com/forms/d/e/1FAIpQLSdOl6puFPJrDuIBg84XBTeBje1BjgKznS8NGvWUXD7fvzGy4g/viewform?usp=header', urlLabel: 'Open the application form' },
		sourceUrl: 'https://iriic.uiu.ac.bd/video-content-creator/',
		sources: ['https://iriic.uiu.ac.bd/video-content-creator/']
	},
	{
		slug: 'social-media-content-manager-2026',
		title: 'Social Media Content Manager',
		project: 'IRIIC',
		type: 'Full-time',
		location: 'IRIIC, United International University, Madani Avenue, Dhaka',
		deadline: '2026-01-25',
		responsibilities: [
			'Create content for Facebook, LinkedIn and YouTube.',
			'Plan monthly content calendars and support promotional campaigns.',
			'Engage the online community and track analytics with insight reports.',
			'Work with internal teams and manage digital assets.'
		],
		requirements: [
			'Able to write compelling posts in both English and Bangla.',
			'Basic design and editing skills, and an eye for capturing events on the ground.',
			'Understanding of how social media trends work.'
		],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://tinyurl.com/36pr8c3n', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Social Media Content Manager post, deadline 25 January 2026)`]
	},
	{
		slug: 'project-coordinator-2025-12',
		title: 'Project Coordinator',
		project: 'IRIIC',
		type: 'Full-time',
		location: 'IRIIC, United International University, Madani Avenue, Dhaka',
		deadline: '2025-12-05',
		responsibilities: [
			'Plan, schedule and track project progress.',
			'Prepare reports, proposals and meeting minutes.',
			'Coordinate with researchers, teams and external partners.',
			'Support workshops, training and IRIIC programmes, and help with research, data collection and analysis.',
			'Improve internal workflows and processes.'
		],
		requirements: ['Proactive, organised and a clear communicator; fresh graduates were encouraged to apply.', 'Comfortable with Microsoft Office, documentation, coordination and basic research.'],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://tinyurl.com/nwe2k98x', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Project Coordinator post, deadline 5 December 2025)`]
	},
	{
		slug: 'research-engineer-nlp-2025',
		title: 'Research Engineer (NLP), five posts',
		project: 'AIMS Lab, IRIIC',
		type: 'Research engineer',
		location: 'United International University, Dhaka',
		deadline: '2025-09-30',
		openings: 5,
		about: 'Five research engineer posts on Smart Reception, an AI system for citizen services at police stations, and Police GPT, an assistant for police-related information for staff and the public. 40 hours a week with weekly group meetings.',
		responsibilities: [
			'Run experimental research on NLP and large language model projects.',
			'Design and implement Bengali language models, summarisation, speech-to-text and text-to-speech systems.',
			'Apply NLP, signal processing and machine learning to real problems, and write up findings.'
		],
		requirements: ['BSc or MSc in CSE or EEE with a CGPA of at least 3.00 out of 4.00.', 'At least two years of Python.', 'Proficiency in NLP, language modelling and machine learning; software development experience is a plus.'],
		howToApply: { steps: ['Apply through the online application form.', 'Select "NLP" as the preferred track.'], url: 'https://tinyurl.com/8wab2dew', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Research Engineer (NLP) five positions post, deadline 30 September 2025)`]
	},
	{
		slug: 'research-engineers-data-science-energy-2025',
		title: 'Research Engineer (Data Science; AI in Power and Energy)',
		project: 'AIMS Lab, IRIIC',
		type: 'Research engineer',
		location: 'United International University, Dhaka',
		deadline: '2025-09-20',
		about: 'Research engineer posts on AIMS Lab projects in data science and in AI for power and energy.',
		responsibilities: [],
		requirements: [],
		howToApply: { steps: ['Apply through the online application form.'], url: 'https://tinyurl.com/8wab2dew', urlLabel: 'Open the application form' },
		sourceUrl: FB,
		sources: [`${FB} (Research Engineer Data Science / AI in Power & Energy post, deadline 20 September 2025)`]
	},
	{
		slug: 'research-engineers-2025-08',
		title: 'Research Engineers (Data Science, NLP, BCI, AI in Power and Energy)',
		project: 'AIMS Lab, IRIIC',
		type: 'Research engineer',
		location: 'United International University, Dhaka',
		deadline: '2025-08-01',
		about: 'Research engineer posts on AIMS Lab projects in brain–computer interfaces, data science, natural language processing, and AI in power and energy.',
		responsibilities: [],
		requirements: [],
		howToApply: { steps: ['Send your application by email.'], url: 'mailto:aimsl@uiu.ac.bd', urlLabel: 'aimsl@uiu.ac.bd' },
		sourceUrl: FB,
		sources: [`${FB} (Research Engineers post, deadline 1 August 2025)`, `${FB} (earlier cohort, deadline 10 May 2025)`]
	},
	{
		slug: 'project-coordinator-intern-2025',
		title: 'Project Coordinator Intern',
		project: 'IRIIC',
		type: 'Internship',
		location: 'United International University, Dhaka',
		deadline: '2025-08-01',
		responsibilities: [
			'Assist with scheduling, resource management and project tracking.',
			'Maintain project documentation such as proposals, reports and updates.',
			'Support communication among team members and stakeholders.',
			'Organise meetings, workshops and training, and support research and analysis.'
		],
		requirements: [
			'Bachelor’s degree completed, or coursework completed with only an internship remaining.',
			'CSE and BBA preferred; all disciplines eligible.',
			'Strong communication in English and Bengali.',
			'Detail-oriented and proactive; proficient in Microsoft Office, with project management tools a plus.'
		],
		howToApply: { steps: ['Send your application by email.'], url: 'mailto:aimsl@uiu.ac.bd', urlLabel: 'aimsl@uiu.ac.bd' },
		sourceUrl: FB,
		sources: [`${FB} (Project Coordinator Intern post, deadline 1 August 2025)`]
	}
];

export const vacancyBySlug = new Map(vacancies.map((vacancy) => [vacancy.slug, vacancy]));

/** Open on or before the deadline day; no deadline means not shown as open. */
/** `today` is the build date (BUILD_DATE in lib/config.ts), YYYY-MM-DD in Asia/Dhaka. */
export function isOpen(vacancy: Vacancy, today: string): boolean {
	return vacancy.deadline !== null && today <= vacancy.deadline;
}

export function openVacancies(today: string): Vacancy[] {
	return vacancies.filter((vacancy) => isOpen(vacancy, today)).sort((a, b) => (a.deadline ?? '').localeCompare(b.deadline ?? ''));
}

export function pastVacancies(today: string): Vacancy[] {
	return vacancies.filter((vacancy) => !isOpen(vacancy, today)).sort((a, b) => (b.deadline ?? '').localeCompare(a.deadline ?? ''));
}

/** "5 November 2026" from an ISO date, without timezone drift. */
export function formatDeadline(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number);
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return `${day} ${months[(month ?? 1) - 1]} ${year}`;
}
