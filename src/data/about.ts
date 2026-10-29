import type { Milestone, Recognition } from './types.ts';

const WEB = 'https://iriic.uiu.ac.bd';

export const centres = [
	{ name: 'AIMS Lab', full: 'Advanced Intelligent Multidisciplinary Systems Lab', detail: 'UIU’s computer science research lab since 2014, working on machine learning, natural language processing, intelligent systems, biomedical engineering and embedded systems.', url: 'https://aimsl.uiu.ac.bd/' },
	{ name: 'BCI Research Lab', full: 'Brain Computer Interface Research Lab', detail: 'Bangladesh’s first lab dedicated to brain–computer interfaces, for neurorehabilitation, cognitive enhancement and human–computer interaction.' },
	{ name: 'University Innovation Hub', full: 'UIHP@UIU', detail: 'UIU’s hub under the national University Innovation Hub Program, which runs the LaunchPad startup incubation cohorts.', url: 'https://uihp.org/' },
	{ name: 'CDHIPR', full: 'Center for Digital Health Innovation & Policy Research', detail: 'Research and policy analysis on digital health: AI, telemedicine and health data, aimed at better and fairer care.' },
	{ name: 'IACC', full: 'Industry & Academia Collaboration Center for 4IR', detail: 'Brings academia, industry and government together on research, talent and commercialisation in AI, IoT and robotics.' }
] as const;

export const milestones: Milestone[] = [
	{ dateLabel: 'December 2014', title: 'AIMS Lab founded', detail: 'UIU’s Department of Computer Science and Engineering starts the Advanced Intelligent Multidisciplinary Systems Lab.', sources: [`${WEB}/about-us/`] },
	{ dateLabel: '12 December 2021', title: 'Bangladesh’s first BCI Research Lab', detail: 'Opened at UIU with funding from the Bangladesh Hi-Tech Park Authority under the ICT Division.', sources: ['https://www.tbsnews.net/economy/corporates/countrys-first-brain-computer-interface-bci-research-lab-launched-uiu-342919'] },
	{ dateLabel: '2023', title: 'IRIIC launched', detail: 'The labs and centres come together as one institute for research, innovation, incubation and commercialisation.', sources: ['https://www.tbsnews.net/economy/corporates/uiu-launches-new-institute-advanced-tech-research-592794'] },
	{ dateLabel: 'September 2024', title: 'First LaunchPad cohort', detail: 'A national startup incubation call opens to teams from every university.', sources: ['https://www.tbsnews.net/economy/corporates/startup-innovation-cohort-starts-all-universities-uiu-944181'] },
	{ dateLabel: 'April 2025', title: 'Harvard HSIL Hackathon hub', detail: 'IRIIC hosts Bangladesh’s first hub for Harvard’s Health Systems Innovation Lab hackathon, and does so again in 2026.', sources: [`${WEB}/harvard-hsil-hackthon-2025/`] }
];

/** Awards documented on IRIIC's achievements page, credited to whoever received them. */
export const recognition: Recognition[] = [
	{ year: 2025, title: 'Award for contributions to telecom and ICT, World Telecommunication and Information Society Day', recipient: 'Prof. Khondaker A. Mamun', sources: [`${WEB}/achievements/`, 'https://www.tbsnews.net/economy/corporates/uiu-received-telecom-and-ict-award-2025-1145516'] },
	{ year: 2025, title: 'Champion, Harvard HSIL Hackathon Dhaka hub', recipient: 'SmartEndo team', sources: [`${WEB}/team-nurix-team-smartendo-becomes-the-champion-of-the-inaugural-harvard-hsil-hackathon-2025/`] },
	{ year: 2024, title: 'Study UK Alumni Awards 2023–24, Business and Innovation', recipient: 'Prof. Khondaker A. Mamun', sources: [`${WEB}/achievements/`] },
	{ year: 2022, title: 'Digital Bangladesh Award, Technical-Private (Best Individual)', recipient: 'Prof. Khondaker A. Mamun', sources: [`${WEB}/achievements/`] },
	{ year: 2022, title: 'BASIS National ICT Awards', recipient: 'AIMS Lab, for Deep Depression', sources: [`${WEB}/achievements/`] },
	{ year: 2021, title: 'Mujib 100 Idea Contest: four of the top ten ideas', recipient: 'AIMS Lab', sources: [`${WEB}/achievements/`] },
	{ year: 2019, title: 'APICTA Awards, Merit in Healthcare', recipient: 'CMED Health', sources: [`${WEB}/achievements/`] },
	{ year: 2018, title: 'Innovation Fund Grand Awards, Research and Development', recipient: 'PVDoctor', sources: [`${WEB}/achievements/`] },
	{ year: 2017, title: 'National ICT Awards in three categories', recipient: 'Bolte Chai, CMED Health and Autism Barta', sources: [`${WEB}/achievements/`] },
	{ year: 2016, title: 'National Mobile App Award, Inclusion', recipient: 'Autism Barta', sources: [`${WEB}/achievements/`] }
];
