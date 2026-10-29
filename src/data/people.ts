import type { Person } from './types.ts';

/**
 * People listed on IRIIC's own team page, with the roles shown there.
 * Personal email addresses on that page are deliberately not reproduced.
 */
const TEAM = 'https://iriic.uiu.ac.bd/our-team/';

const photo = (slug: string, name: string) => ({ name: `people/${slug}`, alt: `Portrait of ${name}`, fit: 'cover' as const });

export const people: Person[] = [
	{ name: 'Prof. Khondaker Abdullah Al Mamun, PhD', role: 'Founder and Director, IRIIC; Professor of Digital Health and Intelligent Technology, Department of Computer Science and Engineering, UIU; founder of AIMS Lab and CMED Health', group: 'Director', image: photo('khondaker-a-mamun', 'Prof. Khondaker Abdullah Al Mamun'), sources: [TEAM, 'https://iriic.uiu.ac.bd/about-us/'] },
	{ name: 'Prof. Dr. Md. Abul Kashem Mia', role: 'Vice-Chancellor, United International University; Professor, Department of Computer Science and Engineering', group: 'Advisers', image: photo('abul-kashem-mia', 'Prof. Dr. Md. Abul Kashem Mia'), sources: [TEAM] },
	{ name: 'Dr. M. Rezwan Khan', role: 'Professor Emeritus, Department of Electrical and Electronic Engineering; Executive Director, Institute of Advanced Research, UIU', group: 'Advisers', image: photo('m-rezwan-khan', 'Dr. M. Rezwan Khan'), sources: [TEAM] },
	{ name: 'Dr. Mohammad Nurul Huda', role: 'Professor and Head, Department of Computer Science and Engineering, UIU', group: 'Advisers', image: photo('mohammad-nurul-huda', 'Dr. Mohammad Nurul Huda'), sources: [TEAM] },
	{ name: 'Ummay Sumaiya Mutiatur Rasul', role: 'Head of Communications, Office of the Registrar, UIU', group: 'Administration', image: photo('sumaiya-mutiatur-rasul', 'Ummay Sumaiya Mutiatur Rasul'), sources: [TEAM] },
	{ name: 'Nabila Binte Ayub', role: 'Executive, IRIIC', group: 'Administration', image: photo('nabila-binte-ayub', 'Nabila Binte Ayub'), sources: [TEAM] },
	{ name: 'Sadik-E-Tawheed', role: 'Assistant Executive, IRIIC', group: 'Administration', image: photo('sadik-e-tawheed', 'Sadik-E-Tawheed'), sources: [TEAM] },
	{ name: 'Dr. Marzia Zaman', role: 'Research Physician', group: 'Research team', projects: ['Cog-i', 'Virtual Eye Doc', 'SuSastho.AI', 'SmartEndo'], image: photo('marzia-zaman', 'Dr. Marzia Zaman'), sources: [TEAM] },
	{ name: 'Dr. Israt Jahan', role: 'Research Physician', group: 'Research team', projects: ['SmartEndo'], image: photo('israt-jahan', 'Dr. Israt Jahan'), sources: [TEAM] },
	{ name: 'Farhan Ishtiaque', role: 'Research Engineer, brain–computer interfaces', group: 'Research team', projects: ['MindWave Analytics'], image: photo('farhan-ishtiaque', 'Farhan Ishtiaque'), sources: [TEAM] },
	{ name: 'Ferdous Wahid Anik', role: 'Research Engineer, AI and data science', group: 'Research team', projects: ['Prescription Audit System'], image: photo('ferdous-wahid-anik', 'Ferdous Wahid Anik'), sources: [TEAM] },
	{ name: 'Md. Jobayer Rahman', role: 'Research Engineer, AI and data science', group: 'Research team', projects: ['Symptom Checker'], image: photo('jobayer-rahman', 'Md. Jobayer Rahman'), sources: [TEAM] },
	{ name: 'Md Abdullah Al Mashud', role: 'Research Engineer, AI and generative AI', group: 'Research team', projects: ['SuSastho.AI', 'AI Reception'], image: photo('abdullah-al-mashud', 'Md Abdullah Al Mashud'), sources: [TEAM] },
	{ name: 'Sakib Zaman', role: 'Research Engineer, AI, generative AI and IoT', group: 'Research team', projects: ['AIMScribe'], image: photo('sakib-zaman', 'Sakib Zaman'), sources: [TEAM] },
	{ name: 'Shamim Ahamed', role: 'Research Engineer, AI and generative AI', group: 'Research team', projects: ['SuSastho.AI'], image: photo('shamim-ahamed', 'Shamim Ahamed'), sources: [TEAM] }
];

export const peopleGroups = ['Director', 'Advisers', 'Administration', 'Research team'] as const;
