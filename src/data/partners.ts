import type { Partner } from './types.ts';

/**
 * Organisations IRIIC documents working with. Logos are the ones shown on
 * IRIIC's own project pages, trimmed to their artwork; names come from the
 * logo or from post text. Unidentified emblems and standards marks are left
 * out (see research/inventory.md).
 */
const WEB = 'https://iriic.uiu.ac.bd';

export const partners: Partner[] = [
	// ---- signed agreements ----
	{ name: 'Onnorokom EdTech Ltd', kind: 'Agreement partner', note: 'Memorandum of understanding on educational technology research and commercialisation, October 2024.', sources: [`${WEB}/mou-between-iriicuiu-and-onnorokom-edtech-ltd-2/`] },
	{ name: 'LankaBangla Finance Ltd', kind: 'Agreement partner', note: 'Memorandum of understanding on industry–academia research, September 2024.', sources: [`${WEB}/mou-was-signed-between-iriicuiu-and-lankabangla-finance-ltd/`] },
	{ name: 'Intelligent Police Research Center (IPRIC)', kind: 'Agreement partner', note: 'Memorandum of understanding on research for police services, July 2024.', sources: [`${WEB}/mou-between-iriicuiu-and-intelligent-police-research-center-ipric/`] },
	{ name: 'FBCCI Innovation and Research Centre', kind: 'Agreement partner', note: 'Memorandum of understanding on innovation and research, July 2024.', sources: [`${WEB}/mou-between-iriicuiu-and-fbcci-innovation-research-centre-fbcci-irc-2/`] },
	{ name: 'Endometriosis-Adenomyosis Society of Bangladesh', kind: 'Agreement partner', note: 'Tripartite agreement on AI screening for endometriosis, August 2023.', sources: [`${WEB}/mou-between-iriicuiu-and-esb-incepta-pharmaceuticals-ltd-2/`] },
	{ name: 'Incepta Pharmaceuticals Ltd', kind: 'Agreement partner', note: 'Tripartite agreement on AI screening for endometriosis, August 2023.', sources: [`${WEB}/mou-between-iriicuiu-and-esb-incepta-pharmaceuticals-ltd-2/`] },

	// ---- programmes ----
	{ name: 'Harvard T.H. Chan School of Public Health, Health Systems Innovation Lab', logo: 'partners/harvard-hsil', kind: 'Programme partner', note: 'IRIIC is the Bangladesh hub for the HSIL Hackathon (2025 and 2026).', url: 'https://hsph.harvard.edu/', sources: [`${WEB}/harvard-hsil-hackthon-2025/`, `${WEB}/harvard-hsil-hackthon-2026/`] },
	{ name: 'Bangladesh Hi-Tech Park Authority', logo: 'partners/bhtpa', kind: 'Funder or government', note: 'Funded the BCI Research Lab; leads the DEIED project behind LaunchPad and the University Innovation Hub.', sources: ['https://www.tbsnews.net/economy/corporates/countrys-first-brain-computer-interface-bci-research-lab-launched-uiu-342919', `${WEB}/final-pitch-day-of-launchpad-by-uihpuiu-showcases-bangladeshs-emerging-startup-talent/`] },
	{ name: 'ICT Division, Government of Bangladesh', logo: 'partners/ict-division', kind: 'Funder or government', note: 'Funded several AIMS Lab projects and supports the DEIED project.', sources: [`${WEB}/achievements/`, `${WEB}/virtual-eye-doc/`] },
	{ name: 'a2i, Prime Minister’s Office', logo: 'partners/a2i', kind: 'Funder or government', note: 'Funded Autism Barta.', sources: [`${WEB}/achievements/`, `${WEB}/autism-barta/`] },
	{ name: 'AI Forum Bangladesh', kind: 'Programme partner', note: 'Co-delivered AI training for capital-market professionals, October 2025.', url: 'https://www.facebook.com/aiforumbd.official', sources: [`${WEB}/lankabangla-securities-participates-in-bangladeshs-first-real-life-ai-training-for-capital-market-professionals-at-iriic-uiu/`] },
	{ name: 'CMED Health', logo: 'partners/cmed-health', kind: 'Programme partner', note: 'Commercialised CMED; AI health partner for HSIL 2026; collaborator on several projects.', sources: [`${WEB}/about-us/`, `${WEB}/cmed/`] },

	// ---- research collaborators shown on project pages ----
	{ name: 'University of Toronto', logo: 'partners/university-of-toronto', kind: 'Research collaborator', note: 'Research partner on Autism Barta, Bolte Chai, CKD, Focus Mind, iCRP, MindWave Analytics and PVDoctor.', sources: [`${WEB}/autism-barta/`, `${WEB}/pvdoctor/`] },
	{ name: 'Imperial College London', logo: 'partners/imperial-college-london', kind: 'Research collaborator', note: 'Research partner on AIMScribe, Focus Mind, MindWave Analytics and PVDoctor.', sources: [`${WEB}/aimscribe/`, `${WEB}/focus-mind/`] },
	{ name: 'Rutgers University', logo: 'partners/rutgers', kind: 'Research collaborator', note: 'Research partner on AIMScribe, CKD and iCRP.', sources: [`${WEB}/ckd/`, `${WEB}/icrp/`] },
	{ name: 'Penn State', logo: 'partners/penn-state', kind: 'Research collaborator', note: 'Research partner on MindWave Analytics.', sources: [`${WEB}/mindwave-analytics/`] },
	{ name: 'Deakin University', logo: 'partners/deakin-university', kind: 'Research collaborator', note: 'Research partner on AIMScribe.', sources: [`${WEB}/aimscribe/`] },
	{ name: 'North South University', logo: 'partners/north-south-university', kind: 'Research collaborator', note: 'Research partner on AI Reception and AIMScribe.', sources: [`${WEB}/ai-reception/`, `${WEB}/aimscribe/`] },
	{ name: 'University of Liberal Arts Bangladesh', logo: 'partners/ulab', kind: 'Research collaborator', note: 'Research partner on AI Reception and Deep Depression.', sources: [`${WEB}/ai-reception/`, `${WEB}/deep-depression/`] },
	{ name: 'Independent University, Bangladesh', logo: 'partners/iub', kind: 'Research collaborator', note: 'Research partner on Deep Depression.', sources: [`${WEB}/deep-depression/`] },
	{ name: 'Institute of Business Administration, University of Dhaka', logo: 'partners/iba-du', kind: 'Research collaborator', note: 'Research partner on MindWave Analytics.', sources: [`${WEB}/mindwave-analytics/`] },
	{ name: 'National Institute of Mental Health and Hospital', logo: 'partners/nimh', kind: 'Research collaborator', note: 'Research partner on Deep Depression.', sources: [`${WEB}/deep-depression/`] },
	{ name: 'Holland Bloorview Kids Rehabilitation Hospital', logo: 'partners/holland-bloorview', kind: 'Research collaborator', note: 'Research partner on Autism Barta and Bolte Chai.', sources: [`${WEB}/autism-barta/`, `${WEB}/bolte-chai/`] },
	{ name: 'Tauri Foundation', logo: 'partners/tauri-foundation', kind: 'Research collaborator', note: 'Research partner on Bolte Chai.', sources: [`${WEB}/bolte-chai/`] },
	{ name: 'Palli Karma-Sahayak Foundation (PKSF)', logo: 'partners/pksf', kind: 'Research collaborator', note: 'Research partner on CMED.', sources: [`${WEB}/cmed/`] },
	{ name: 'Community Oncology Centre', logo: 'partners/community-oncology-centre', kind: 'Research collaborator', note: 'Research partner on CanAware.', sources: [`${WEB}/canaware/`] },
	{ name: 'OpenBCI', logo: 'partners/openbci', kind: 'Research collaborator', note: 'Research partner on Concentrate Today.', sources: [`${WEB}/concentrate-today/`] },
	{ name: 'BrainCo', logo: 'partners/brainco', kind: 'Research collaborator', note: 'Research partner on Focus Mind.', sources: [`${WEB}/focus-mind/`] }
];

export const partnerKinds = ['Agreement partner', 'Programme partner', 'Funder or government', 'Research collaborator'] as const;
