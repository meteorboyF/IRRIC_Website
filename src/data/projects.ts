import type { ImageRef, Project } from './types.ts';

/**
 * IRIIC's work: research and innovation projects, programmes, events,
 * visits and agreements, in one searchable index.
 *
 * Website post dates are publishing dates, not project dates, so research
 * projects carry no date unless a source states one (sortKey 0). Data order
 * is the "Featured" order on /projects/.
 */

const WEB = 'https://iriic.uiu.ac.bd';
const FB = 'https://www.facebook.com/profile.php?id=61555389324566';

/** Cover image; screenshots and diagrams are shown whole. */
const cover = (slug: string, alt: string, fit: ImageRef['fit'] = 'contain'): ImageRef => ({ name: `projects/${slug}/cover`, alt, fit });

/** Numbered gallery images 1..n with their alt text. */
const gallery = (slug: string, alts: string[], fit: ImageRef['fit'] = 'contain'): ImageRef[] =>
	alts.map((alt, index) => ({ name: `projects/${slug}/${index + 1}`, alt, fit }));

export const projects: Project[] = [
	{
		slug: 'cmed',
		title: 'CMED',
		tagline: 'Cloud-based health monitoring for rural communities, now CMED Health',
		type: 'Research and innovation',
		status: 'Commercialised',
		areas: ['Artificial intelligence', 'Internet of Things', 'Generative AI'],
		sortKey: 0,
		summary:
			'CMED links community health workers, portable diagnostic devices and a cloud record so people in rural and remote areas can be checked regularly at home. Each reading sorts a patient into healthy, alarming or emergency, and complex cases are referred to a specialist. The research became CMED Health, the first AIMS Lab project to be commercialised.',
		highlights: [
			'Community health workers collect readings with portable and stationary devices during routine visits.',
			'Patients are triaged as healthy, alarming or emergency, with referral to specialist doctors for complex cases.',
			'Machine-learning models estimate the risk of stroke, heart attack and diabetes and prompt preventive advice.',
			'Health records sit in a cloud system and are protected with identity-based encryption.'
		],
		partners: ['CMED Health', 'Palli Karma-Sahayak Foundation (PKSF)', 'United Trust', 'ICT Division, Government of Bangladesh', 'Grameenphone'],
		outcomes: [
			'Sailunaz K. et al., "CMED: Cloud based medical system framework for rural health monitoring in developing countries", Computers & Electrical Engineering 53 (2016) 469–481.',
			'National ICT Award 2017 (Health and Wellbeing) and Bangladesh Innovation Award 2018 (SDG Inclusion).',
			'Merit Award in Healthcare at the 10th APICTA Awards, November 2019.',
			'An evaluation of the community-health-worker model was published in BMC Public Health.'
		],
		image: cover('cmed', 'CMED web dashboard showing patient health summaries and risk charts'),
		gallery: gallery('cmed', [
			'CMED Health app home screen with health screening shortcuts',
			'CMED Health app home screen showing recent blood pressure readings',
			'CMED Health app screen of a patient’s latest measurements on a body outline',
			'CMED health screening report listing test results and status',
			'CMED analytics dashboard with bar charts of screening data',
			'Diagram of CMED linking sensors, health workers, an AI cloud, doctors and hospitals'
		]),
		links: [
			{ label: 'Project page on the previous IRIIC site', url: `${WEB}/cmed/` },
			{ label: 'Research paper (2016)', url: 'https://doi.org/10.1016/j.compeleceng.2016.02.005' }
		],
		featured: true,
		sources: [`${WEB}/cmed/`, `${WEB}/about-us/`, `${WEB}/achievements/`, `${FB} (post on BMC Public Health paper)`]
	},
	{
		slug: 'smartendo',
		title: 'SmartEndo',
		tagline: 'AI-assisted screening for early endometriosis risk',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Endometriosis often goes undiagnosed for years because menstrual pain is normalised and services are hard to reach. SmartEndo is a self-administered questionnaire, adapted to the Bangladeshi context, that uses AI to flag women at higher risk early and refer them on for care.',
		highlights: [
			'Self-administered risk assessment in Bangla and English.',
			'Built-in referral and follow-up so a high-risk result leads somewhere.',
			'Developed under a tripartite agreement with the Endometriosis-Adenomyosis Society of Bangladesh and Incepta Pharmaceuticals.',
			'Taken to medical students and nurses at an awareness and screening workshop at Kumudini Women’s Medical College in June 2025.'
		],
		partners: ['Endometriosis-Adenomyosis Society of Bangladesh', 'Incepta Pharmaceuticals Ltd'],
		outcomes: [
			'Champion team, Harvard HSIL Hackathon 2025, Dhaka hub.',
			'Champion in Biotech, BEAR Summit and National Semiconductor Symposium 2025 demo contest.',
			'Presented at the Second International Conference on Primary Health Care, Addis Ababa, October 2025.'
		],
		image: cover('smartendo', 'SmartEndo app welcome screen with an illustration of a woman'),
		gallery: gallery('smartendo', [
			'SmartEndo questionnaire screen about the user’s background',
			'SmartEndo questionnaire screen with multiple-choice answers',
			'SmartEndo questionnaire screen about symptoms',
			'SmartEndo screen with an illustration of a woman and a symptom question',
			'SmartEndo screen asking about pain levels',
			'Diagram of SmartEndo linking self-screening, the cloud, risk levels and referral'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/smartendo/` }],
		featured: true,
		sources: [`${WEB}/smartendo/`, `${WEB}/mou-between-iriicuiu-and-esb-incepta-pharmaceuticals-ltd-2/`, `${WEB}/team-nurix-team-smartendo-becomes-the-champion-of-the-inaugural-harvard-hsil-hackathon-2025/`, `${FB} (BEAR Summit, Addis Ababa posts)`]
	},
	{
		slug: 'susastho-ai',
		title: 'SuSastho.AI',
		tagline: 'A Bangla medical chatbot for adolescent health',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Generative AI', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Many adolescents in Bangladesh cannot easily ask about sexual, reproductive or mental health. SuSastho.AI is a Bangla-language medical chatbot and app that offers confidential information, self-screening and routes to appropriate care, combining a generative AI engine with speech recognition and speech synthesis.',
		highlights: [
			'Confidential Bangla chatbot for sexual and reproductive health, rights and mental health questions.',
			'Education, screening and referral features in one app.',
			'Validated for clinical, cultural and inclusion considerations.',
			'Funded by the Bill & Melinda Gates Foundation, according to the dissemination report.'
		],
		partners: ['Bill & Melinda Gates Foundation (funding)', 'CMED Health'],
		outcomes: [
			'Publicly disseminated to journalists at the Dhaka Reporters Unity after trial use in schools, colleges and universities.',
			'Its lead was one of 100 innovators invited to the Gates Foundation’s Grand Challenges AI convening in Kigali, April 2025, for this project.',
			'Demonstrated to a World Bank delegation in February 2025.'
		],
		image: cover('susastho-ai', 'Panel of speakers at the SuSastho.AI launch at the Dhaka Reporters Unity', 'cover'),
		gallery: gallery('susastho-ai', [
			'SuSastho.AI app screen with a robot assistant greeting',
			'SuSastho.AI chat screen with a Bangla message',
			'SuSastho.AI sign-in screen',
			'SuSastho.AI registration form screen',
			'SuSastho.AI chat conversation screen',
			'SuSastho.AI chat screen with a Bangla keyboard'
		]),
		links: [
			{ label: 'Project page on the previous IRIIC site', url: `${WEB}/susastho-ai/` },
			{ label: 'The Daily Star: Africa’s AI movement and what Bangladesh can learn', url: 'https://www.thedailystar.net/next-step/news/africas-ai-movement-and-what-bangladesh-can-learn-3904761' }
		],
		featured: true,
		sources: [`${WEB}/susastho-ai/`, `${WEB}/susastho-ai-bangla-gpt-offers-teen-health-solutions/`, 'https://www.thedailystar.net/next-step/news/africas-ai-movement-and-what-bangladesh-can-learn-3904761', `${WEB}/world-bank-delegation-visits-iriic-at-uiu-to-explore-innovation-and-entrepreneurship-in-bangladesh/`]
	},
	{
		slug: 'aimscribe',
		title: 'AIMScribe',
		tagline: 'Turning Bangla doctor–patient conversations into clinical records',
		type: 'Research and innovation',
		status: 'Ongoing',
		areas: ['Artificial intelligence', 'Generative AI', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Doctors in Bangladesh spend scarce consultation time writing notes and prescriptions by hand. AIMScribe listens to the consultation and produces a structured, EHR-ready record and a draft prescription. It combines speaker diarisation, Bangla speech recognition, named-entity recognition and summarisation, and is building a Bengali clinical speech dataset along the way. It is now a sub-project of the World Bank-supported HEAT project.',
		highlights: [
			'Generates prescriptions and structured records automatically from the conversation.',
			'Builds a large Bengali dataset for clinical speech recognition and information extraction.',
			'Aims to free up time for counselling patients and to widen the use of electronic health records.',
			'A consultative co-design workshop on 23 April 2026 drew more than 50 doctors, engineers, officials and academics.'
		],
		partners: ['HEAT project (Ministry of Education and the World Bank)', 'Department of Computer Science and Engineering, UIU', 'CMED Health', 'North South University', 'Rutgers University', 'Deakin University', 'Imperial College London'],
		outcomes: ['Presented at the International Health Economics Conference 2023 on progress towards universal health coverage.'],
		image: cover('aimscribe', 'Illustration of a doctor and patient in consultation with an AI scribe recording'),
		gallery: gallery('aimscribe', [
			'Diagram of the AIMScribe workflow from recorded speech to a prescription',
			'Diagram of an integrated telemedicine hub for doctor–patient interaction'
		]),
		links: [
			{ label: 'Project page on the previous IRIIC site', url: `${WEB}/aimscribe/` },
			{ label: 'Open roles on this project', url: '/careers/' }
		],
		featured: true,
		sources: [`${WEB}/aimscribe/`, `${FB} (AIMScribe co-design workshop post)`, 'https://www.uiu.ac.bd/career/']
	},
	{
		slug: 'smartamr',
		title: 'SmartAMR',
		tagline: 'AI to cut prescription errors and antimicrobial resistance',
		type: 'Research and innovation',
		status: 'Ongoing',
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'SmartAMR is an AI-driven digital health system that checks prescriptions as they are written, alerting prescribers to likely dosage errors and harmful drug interactions, and supports patients to take medicines as directed. Its wider aim is to reduce antimicrobial resistance by encouraging responsible antibiotic use. It is run with UIU’s Department of Pharmacy under the HEAT project.',
		highlights: [
			'A hybrid AI framework analyses patient data while a prescription is being created.',
			'Real-time alerts for incorrect dosages and harmful drug interactions.',
			'Supports medication adherence and responsible antibiotic use.',
			'A consultative co-design workshop was held on 26 April 2026 at Hotel Sarina, Dhaka.'
		],
		partners: ['Department of Pharmacy, UIU', 'HEAT project (Ministry of Education and the World Bank)'],
		outcomes: ['IRIIC’s AI-supported antimicrobial stewardship platform was featured in the health compendium of AI Impact Casebooks released at the India AI Impact Summit 2026.'],
		links: [{ label: 'IRIIC on Facebook', url: FB }],
		sources: [`${FB} (SmartAMR co-design workshop post; India AI Impact Summit post)`, 'https://www.uiu.ac.bd/career/']
	},
	{
		slug: 'mindwave-analytics',
		title: 'MindWave Analytics',
		tagline: 'Neuromarketing with brain–computer interfaces',
		type: 'Research and innovation',
		status: null,
		areas: ['Brain–computer interface', 'Artificial intelligence'],
		sortKey: 0,
		summary:
			'Surveys and focus groups are costly and do not always reflect what people actually feel. MindWave Analytics, also called Market Brain, records brain signals with an EEG headset while people respond to marketing material, and uses machine learning to predict their choices. The aim is an affordable neuromarketing service built for local businesses.',
		highlights: [
			'Records EEG signals with brain–computer interface hardware.',
			'Predicts consumer responses to marketing stimuli.',
			'Designed as a cost-efficient, customisable service for Bangladeshi businesses.'
		],
		partners: ['Imperial College London', 'Penn State', 'University of Toronto', 'Institute of Business Administration, University of Dhaka', 'CMED Health', 'ICT Division, Government of Bangladesh'],
		outcomes: [
			'Mashrur F. R. et al., "An EEG-based intelligent neuromarketing system for predicting consumers’ choice" (2023), doi:10.1007/978-981-19-8032-9_3.',
			'Demonstrated to a World Bank delegation in February 2025.'
		],
		image: cover('mindwave-analytics', 'Graphic of a human head silhouette filled with brain-map patterns', 'cover'),
		gallery: gallery('mindwave-analytics', [
			'MindWave Analytics logo with the tagline "Marketing in the brain"',
			'Diagram of the BCI neuromarketing pipeline from signal acquisition to prediction'
		]),
		links: [
			{ label: 'Project page on the previous IRIIC site', url: `${WEB}/mindwave-analytics/` },
			{ label: 'Research paper (2023)', url: 'https://doi.org/10.1007/978-981-19-8032-9_3' }
		],
		featured: true,
		sources: [`${WEB}/mindwave-analytics/`, `${WEB}/world-bank-delegation-visits-iriic-at-uiu-to-explore-innovation-and-entrepreneurship-in-bangladesh/`]
	},
	{
		slug: 'ai-reception',
		title: 'AI Reception',
		tagline: 'A Bengali-speaking reception assistant',
		type: 'Research and innovation',
		status: null,
		areas: ['Generative AI', 'Robotics and automation', 'Artificial intelligence'],
		sortKey: 0,
		summary:
			'AI Reception, shown to visitors as SARA (Smart AI Reception Assistant), answers questions at front desks in banks, universities and hospitals in Bengali. It recognises returning faces, understands spoken Bengali queries and replies in a synthesised human voice.',
		highlights: [
			'Face detection and recognition that remembers returning visitors.',
			'Bengali speech recognition for spoken queries.',
			'Bengali text-to-speech for spoken replies.',
			'Related work produced AIMS TALK, a Bangla call-centre system with speaker authentication.'
		],
		partners: ['University of Liberal Arts Bangladesh', 'North South University', 'ICT Division, Government of Bangladesh'],
		outcomes: [
			'One of four AIMS Lab winners in the Mujib 100 Idea Contest 2021, entered as AI Customer Service.',
			'Pranto S. I. et al., "AIMS TALK: Intelligent call center support in Bangla language with speaker authentication", ETCCE 2021, doi:10.1109/ETCCE54784.2021.9689831.'
		],
		image: cover('ai-reception', 'Illustration of a robot surrounded by service icons'),
		gallery: gallery('ai-reception', [
			'AI Reception robot with uses for education, hospitals, banks and offices',
			'Workflow of AI Reception: face recognition, speech recognition, conversation agent and text to speech'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/ai-reception/` }],
		featured: true,
		sources: [`${WEB}/ai-reception/`, `${WEB}/achievements/`, `${WEB}/world-bank-delegation-visits-iriic-at-uiu-to-explore-innovation-and-entrepreneurship-in-bangladesh/`]
	},
	{
		slug: 'deep-depression',
		title: 'Deep Depression',
		tagline: 'EEG biomarkers to support depression diagnosis',
		type: 'Research and innovation',
		status: null,
		areas: ['Brain–computer interface', 'Artificial intelligence'],
		sortKey: 0,
		summary:
			'Diagnosing depression usually relies on questionnaires and observation, which take time. Deep Depression analyses EEG brain signals and neural connectivity to find biomarkers of depression and estimate its severity, as a painless decision-support tool for clinicians. It was developed at the BCI Research Lab.',
		highlights: [
			'Indicates whether a person is likely to have depression, and how severe it may be.',
			'Works from brain signals rather than interviews alone.',
			'Designed for clinical settings with limited specialist time.'
		],
		partners: ['National Institute of Mental Health and Hospital', 'Independent University, Bangladesh', 'University of Liberal Arts Bangladesh', 'Bangladesh Hi-Tech Park Authority', 'ICT Division, Government of Bangladesh'],
		outcomes: [
			'BASIS National ICT Awards 2022.',
			'One of four AIMS Lab winners in the Mujib 100 Idea Contest 2021.',
			'Featured under "AI for predictive analysis in health" in the health compendium released at the India AI Impact Summit 2026.',
			'Dev A. et al., "Exploration of EEG-based depression biomarkers identification techniques and their applications: a systematic review", IEEE Access 10 (2022), doi:10.1109/ACCESS.2022.3146711.'
		],
		image: cover('deep-depression', 'Three views of research participants wearing EEG caps during a recording session', 'cover'),
		gallery: gallery('deep-depression', [
			'Deep Depression graphic of a hand reaching to someone, captioned "Help them to survive"',
			'Diagram of the Deep Depression pipeline from EEG signal to classification'
		]),
		links: [
			{ label: 'Project page on the previous IRIIC site', url: `${WEB}/deep-depression/` },
			{ label: 'Systematic review (2022)', url: 'https://doi.org/10.1109/ACCESS.2022.3146711' }
		],
		sources: [`${WEB}/deep-depression/`, `${WEB}/achievements/`, `${FB} (India AI Impact Summit post)`]
	},
	{
		slug: 'virtual-eye-doc',
		title: 'Virtual Eye Doc',
		tagline: 'Eye screening that trained volunteers can run in villages',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'Blindness is a public health issue in Bangladesh, and many eye problems go unnoticed until late. Virtual Eye Doc is a smartphone app that lets health volunteers run basic eye screening in rural areas and refer people to specialists or hospitals. It also explains common eye conditions in plain language.',
		highlights: [
			'Tests for near- and far-sightedness, colour blindness and colour contrast.',
			'Questionnaires for common sight disorders, with specialist referral.',
			'Eye exercises and eye-health information in Bangla and English.',
			'Initial clinical validation took place at Sheikh Fazilatunnessa Mujib Eye Hospital and Training Institute, Gopalganj.'
		],
		partners: ['ICT Division, Government of Bangladesh (funding)'],
		image: cover('virtual-eye-doc', 'Virtual Eye Doc web dashboard listing screening records'),
		gallery: gallery('virtual-eye-doc', [
			'Virtual Eye Doc app menu of eye tests',
			'Virtual Eye Doc app side menu',
			'Virtual Eye Doc app list of screening options',
			'Virtual Eye Doc app screen with instructions in Bangla',
			'Virtual Eye Doc web dashboard listing doctors'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/virtual-eye-doc/` }],
		sources: [`${WEB}/virtual-eye-doc/`]
	},
	{
		slug: 'bolte-chai',
		title: 'Bolte Chai',
		tagline: 'A communication app for non-verbal autistic children',
		type: 'Research and innovation',
		status: null,
		sortKey: 0,
		summary:
			'Bolte Chai ("I want to speak") is an Android app that helps non-verbal children with autism communicate using pictures that the device speaks aloud. It connects children with their parents, teachers and speech therapists, tracks progress, and works in both Bangla and English.',
		highlights: [
			'Picture-exchange communication with speech output.',
			'A shared platform for parents, teachers and speech and language therapists.',
			'Progress monitoring and analytics.',
			'Bangla and English, with a simple interface.'
		],
		partners: ['Tauri Foundation', 'Holland Bloorview Kids Rehabilitation Hospital', 'University of Toronto', 'Neuro-Developmental Disability Protection Trust', 'ICT Division, Government of Bangladesh (funding)'],
		outcomes: [
			'National ICT Award 2017 and APICTA Award 2017 (Research and Development).',
			'Merit Award, BASIS National ICT Award 2020, and honourable mention at the Bangladesh Innovation Award 2021.',
			'Khan M. N. R. et al., "Bolte Chai: An augmentative and alternative communication device for enhancing communication for nonverbal children", MediTec 2016, doi:10.1109/MEDITEC.2016.7835391.'
		],
		image: cover('bolte-chai', 'Bolte Chai app screen asking the user to choose an account type'),
		gallery: gallery('bolte-chai', [
			'Bolte Chai app home screen with photo tiles for communication',
			'Bolte Chai app showing a kitten photo used as a picture prompt',
			'Bolte Chai dashboard with daily usage charts'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/bolte-chai/` }],
		sources: [`${WEB}/bolte-chai/`, `${WEB}/achievements/`]
	},
	{
		slug: 'autism-barta',
		title: 'Autism Barta',
		tagline: 'Community screening for early signs of autism',
		type: 'Research and innovation',
		status: null,
		sortKey: 0,
		summary:
			'Autism Barta is a mobile and web screening tool that helps parents, doctors and health workers spot early signs of autism, including in rural areas, and connects families to the nearest services. AIMS Lab developed the screening questionnaire for the Bangladeshi context.',
		highlights: [
			'Interactive risk assessment for early identification.',
			'Connects families to nearby hospitals and autism resources.',
			'Information for parents, physicians and health professionals on what to do after screening.'
		],
		partners: ['a2i, Prime Minister’s Office (funding)', 'Centre for Neurodevelopment and Autism in Children, BSMMU', 'Jatiyo Protibondhi Unnayan Foundation', 'University of Toronto', 'Holland Bloorview Kids Rehabilitation Hospital'],
		outcomes: [
			'National Mobile App Award 2016 (Inclusion).',
			'National ICT Award 2017 and APICTA Award 2017 (Inclusion and Community).',
			'Recognised with Bolte Chai on World Autism Awareness Day, 2 April 2022.'
		],
		image: cover('autism-barta', 'Autism Barta app home screen in Bangla'),
		gallery: gallery('autism-barta', [
			'Autism Barta app screening question screen in Bangla',
			'Autism Barta app home screen in Bangla',
			'Autism Barta website home page in Bangla',
			'Autism Barta website sign-in page',
			'Diagram of Autism Barta screening by parents and health workers, with referral'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/autism-barta/` }],
		sources: [`${WEB}/autism-barta/`, `${WEB}/achievements/`]
	},
	{
		slug: 'pvdoctor',
		title: 'PVDoctor',
		tagline: 'Parkinson’s screening from a smartphone recording',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'PVDoctor (Parkinson’s Virtual Doctor) screens for Parkinson’s disease by analysing a short voice recording and hand tremor captured on a phone. It points people with symptoms to nearby care and lets physicians follow patients remotely, which matters where specialists are scarce.',
		highlights: [
			'Analyses voice and tremor recorded on a smartphone.',
			'Simple test: hold the phone and read a passage aloud.',
			'Alerts users to symptoms and lists nearby health centres.',
			'Lets physicians track and manage patients remotely.'
		],
		partners: ['University of Toronto', 'Imperial College London', 'ICT Division, Government of Bangladesh'],
		outcomes: [
			'Innovation Fund Grand Award 2018 (Research and Development), funded by the ICT Division.',
			'One of four AIMS Lab winners in the Mujib 100 Idea Contest 2021.',
			'Ehsan M. T., Pranto S. I. and Mamun K. A., "Real-time screening of Parkinson’s disease based on speech analysis using smartphone", IEEE/EMBS NER 2021, doi:10.1109/NER49283.2021.9441145.'
		],
		image: cover('pvdoctor', 'Illustration of a doctor with an older patient'),
		gallery: gallery('pvdoctor', [
			'Diagram of PVDoctor recording voice and tremor on a phone and sending it to a cloud for analysis'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/pvdoctor/` }],
		sources: [`${WEB}/pvdoctor/`, `${WEB}/achievements/`]
	},
	{
		slug: 'focus-mind',
		title: 'Focus Mind',
		tagline: 'Neurofeedback to help students learn',
		type: 'Research and innovation',
		status: null,
		areas: ['Brain–computer interface', 'Artificial intelligence', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Focus Mind measures students’ attention, stress, working memory and engagement with EEG, including brain-to-brain synchrony across a group, and feeds this back to students and teachers. The goal is a more personalised way of learning. It was one of the first projects of the BCI Research Lab.',
		highlights: [
			'Tracks attention and engagement in classrooms and meetings in real time.',
			'Uses synchrony measures to gauge group engagement.',
			'A dashboard gives teachers and students relevant feedback.',
			'Neurofeedback training to help students focus and relax.'
		],
		partners: ['University of Toronto', 'Imperial College London', 'BrainCo', 'ICT Division, Government of Bangladesh'],
		image: cover('focus-mind', 'Adults seated in a meeting room, some wearing EEG headbands, during a Focus Mind session', 'cover'),
		gallery: gallery(
			'focus-mind',
			[
			'Two people wearing EEG headbands while recordings show on laptops',
			'A person wearing an EEG headband at a laptop',
			'Focus Mind graphic of a lightbulb and a head with colourful brain activity',
			'Diagram of the Focus Mind experiment from EEG recording to engagement metrics'
		],
			'cover'
		),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/focus-mind/` }],
		sources: [`${WEB}/focus-mind/`, 'https://www.tbsnews.net/economy/corporates/countrys-first-brain-computer-interface-bci-research-lab-launched-uiu-342919']
	},
	{
		slug: 'concentrate-today',
		title: 'Concentrate Today',
		tagline: 'Real-time neurofeedback for sustained attention',
		type: 'Research and innovation',
		status: null,
		areas: ['Brain–computer interface', 'Artificial intelligence'],
		sortKey: 0,
		summary:
			'Concentrate Today trains sustained attention with EEG neurofeedback. Every few seconds it compares a person’s brain activity with a target and shows the result, so they learn to bring their focus closer to it. It is meant for students, researchers and anyone who wants to concentrate better, with regular practice over about a month.',
		highlights: [
			'Detects sustained attention from brain signals.',
			'Gives feedback every five seconds against a personal target.',
			'Builds habits through regular sessions over at least 30 days.'
		],
		partners: ['OpenBCI', 'ICT Division, Government of Bangladesh'],
		outcomes: ['Parbez R. M. S. and Mamun K. A., "BlinkFruity: a real-time EEG based neurofeedback game for brain–computer interface", ICAICT 2020.'],
		image: cover('concentrate-today', 'Abstract illustration of a glowing human head and brain', 'cover'),
		gallery: gallery('concentrate-today', [
			'Diagram of the Concentrate Today experimental setup across training sessions',
			'Diagram of the Concentrate Today study methodology'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/concentrate-today/` }],
		sources: [`${WEB}/concentrate-today/`]
	},
	{
		slug: 'symptom-checker',
		title: 'Symptom Checker',
		tagline: 'Helping patients decide between a pharmacy and a doctor',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Limited access to doctors leads many people in Bangladesh to self-medicate, including with antibiotics. This AI symptom checker uses age, gender, symptoms, their duration and severity to recommend whether over-the-counter care is enough or a doctor’s consultation is needed. Pilots with pharmacies are planned to test it in practice.',
		highlights: [
			'Trained on a curated dataset covering 1,816 symptoms.',
			'Combines several machine-learning models for a single recommendation.',
			'Designed to discourage irrational use of medicines.'
		],
		partners: ['CMED Health'],
		image: cover('symptom-checker', 'SymptomSense poster describing the AI symptom checker'),
		gallery: gallery('symptom-checker', [
			'SymptomSense poster on AI-driven primary health care decisions'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/symptom-checker/` }],
		sources: [`${WEB}/symptom-checker/`]
	},
	{
		slug: 'prescription-audit-system',
		title: 'Prescription Audit System',
		tagline: 'Automated checks for prescription errors',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Generative AI'],
		sortKey: 0,
		summary:
			'Manual prescription audits are slow and error-prone. This system uses machine learning to check prescriptions against guidelines, confirm dosages and flag likely drug interactions, starting with primary care. It is building a dataset of Bangladeshi prescriptions and a pilot that could inform a national audit programme.',
		highlights: [
			'Detects and prioritises prescription errors.',
			'Creates a dataset of prescriptions from Bangladesh.',
			'Pilot audit system for primary health care facilities.'
		],
		image: cover('prescription-audit-system', 'Illustration of an AI system checking a prescription'),
		gallery: gallery('prescription-audit-system', [
			'Research poster on the prescription audit study',
			'Diagram of the AI prescription audit workflow'
		]),
		links: [
			{ label: 'Project page on the previous IRIIC site', url: `${WEB}/ai-based-prescription-audit-system/` },
			{ label: 'Try the demo', url: 'https://dosage.iriic.uiu.ac.bd/' }
		],
		sources: [`${WEB}/ai-based-prescription-audit-system/`]
	},
	{
		slug: 'icrp',
		title: 'iCRP',
		tagline: 'Early warning for heart attack and stroke risk',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Generative AI', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Heart attack and stroke are leading causes of death in Bangladesh. iCRP (intelligent cardiovascular risk profiling) uses machine learning on demographic, behavioural, physiological and clinical data to estimate a person’s risk early, map risk geographically and help plan services.',
		highlights: ['Alerts people to lifestyle factors that raise their risk.', 'Risk mapping to support public health planning.', 'Designed to reach people at their doorstep at low cost.'],
		partners: ['Rutgers University', 'University of Toronto'],
		image: cover('icrp', 'Illustration of a head with a brain, gears and data screens'),
		gallery: gallery('icrp', [
			'Diagram mapping risk factors such as gender and age to conditions like diabetes and high blood pressure',
			'iCRP dashboard with pie charts of risk factors',
			'Diagram of the iCRP platform data flow from devices to the cloud'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/icrp/` }],
		sources: [`${WEB}/icrp/`]
	},
	{
		slug: 'ckd',
		title: 'CKD',
		tagline: 'Predicting chronic kidney disease before it advances',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Chronic kidney disease often progresses unnoticed where early diagnosis is hard to get. This project builds a machine-learning system that estimates a person’s risk from demographic, clinical, physiological and behavioural data, so care can start earlier.',
		highlights: ['Personalised risk assessment and early warnings.', 'Risk mapping to target support where it is most needed.', 'Runs within existing low-resource systems.'],
		partners: ['Rutgers University', 'University of Toronto'],
		image: cover('ckd', 'Illustration of a head with a brain, gears and data screens'),
		gallery: gallery('ckd', [
			'Diagram mapping risk factors such as gender and age to conditions like diabetes and high blood pressure',
			'CKD dashboard with pie charts of risk factors',
			'Diagram of the CKD research process from data collection to clinical validation'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/ckd/` }],
		sources: [`${WEB}/ckd/`]
	},
	{
		slug: 'cog-i',
		title: 'Cog-i',
		tagline: 'Screening and support for Alzheimer’s disease',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'Cog-i (developed as ADCare) is a smartphone tool for early screening of Alzheimer’s disease in Bangladesh, aimed at people with little access to specialists and at the physicians and carers who support them. It also raises awareness, maps resources and helps with referral and follow-up.',
		highlights: ['Validated screening questionnaire on a smartphone.', 'Educational content to raise awareness.', 'Referral, monitoring and patient management.', 'Data to support future Alzheimer’s research in Bangladesh.'],
		partners: ['CMED Health', 'ICT Division, Government of Bangladesh'],
		outcomes: ['Roy N. et al., "The situation of Alzheimer’s disease in Bangladesh: facilities, expertise, and awareness among general people", Journal of Neurological Disorders 8(7) (2020).'],
		image: cover('cog-i', 'Cog-i app home screen with screening and awareness options'),
		gallery: gallery('cog-i', [
			'Cog-i sign-in screen',
			'Cog-i app home screen with screening options',
			'Cog-i result screen showing a low-risk outcome and referral buttons',
			'Diagram of Cog-i screening, awareness and referral for older people in Bangladesh'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/cog-i/` }],
		sources: [`${WEB}/cog-i/`]
	},
	{
		slug: 'canaware',
		title: 'CanAware',
		tagline: 'Cancer awareness, screening and referral',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'CanAware is an interactive system for cancer awareness, education, screening and referral in Bangladesh. Its first tool, the BScan app, screens for breast cancer risk with a culturally tailored questionnaire on risk factors, family history and early symptoms, and has been clinically validated.',
		highlights: ['BScan breast cancer screening app.', 'Culturally tailored risk questionnaire.', 'Referral for early identification and intervention.'],
		partners: ['Community Oncology Centre', 'CMED Health', 'ICT Division, Government of Bangladesh'],
		image: cover('canaware', 'CanAware BScan app welcome screen'),
		gallery: gallery('canaware', [
			'CanAware app sign-in and home screens',
			'CanAware app questionnaire screens'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/canaware/` }],
		sources: [`${WEB}/canaware/`]
	},
	{
		slug: 'access-teledentistry',
		title: 'Access Teledentistry',
		tagline: 'Remote oral health screening and referral',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'Access Teledentistry brings oral health screening, consultation and referral online, to narrow the gap between urban, rural and underprivileged patients and to catch serious conditions such as oral cancer earlier. The project set out to develop the service, pilot it and test its feasibility.',
		highlights: ['Remote screening and consultation.', 'Stronger referral to dental care.', 'A tool for professional training and primary health care.'],
		image: cover('access-teledentistry', '3D model of a molar tooth on a stand'),
		gallery: gallery('access-teledentistry', [
			'Diagram of the proposed teledentistry model in Bangladesh linking people, health workers and dentists',
			'Graphic of barriers to dental care, such as cost and lack of awareness'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/access-teledentistry/` }],
		sources: [`${WEB}/access-teledentistry/`]
	},
	{
		slug: 'virtual-hospital',
		title: 'Virtual Hospital',
		tagline: 'Home health monitoring and referral over IoT',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Internet of Things'],
		sortKey: 0,
		summary:
			'Virtual Hospital is an intelligent home health monitoring and referral system that connects connected devices at home to clinicians, so patients can be watched over and referred without travelling.',
		highlights: ['Home monitoring with connected devices.', 'Referral to clinicians when readings need attention.', 'The project lists health-data standards it follows, including HL7 and FHIR.'],
		image: cover('virtual-hospital', 'Patient in a video consultation with a doctor on a laptop', 'cover'),
		gallery: gallery('virtual-hospital', [
			'Virtual Hospital app and dashboard screens with live health readings',
			'Virtual Hospital web dashboard listing patients',
			'Virtual Hospital web dashboard with status panels',
			'Diagram of the Virtual Hospital system linking patients, hospitals and specialists'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/virtual-hospital/` }],
		sources: [`${WEB}/virtual-hospital/`]
	},
	{
		slug: 'i-power',
		title: 'i Power',
		tagline: 'Forecasting and optimising electricity demand',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence'],
		sortKey: 0,
		summary:
			'As industry and households grow, Bangladesh needs to predict electricity demand better. i Power forecasts demand at national, regional, local, organisational and household levels, taking temperature and humidity into account, and suggests ways for consumers to cut their bills.',
		highlights: ['Demand forecasts from national to household level.', 'Consumption strategies for businesses, factories and homes.', 'Accounts for climate factors such as temperature and humidity.'],
		outcomes: ['One of four AIMS Lab winners in the Mujib 100 Idea Contest 2021.'],
		image: cover('i-power', 'Electricity pylons silhouetted against a sunset sky', 'cover'),
		gallery: gallery('i-power', [
			'i Power graphic on flattening the demand curve and improving power quality',
			'i Power graphic of the benefits of better demand forecasting',
			'i Power diagram of data sources and the AI engine'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/i_power/` }],
		sources: [`${WEB}/i_power/`, `${WEB}/achievements/`]
	},
	{
		slug: 'whats-next',
		title: 'What’s Next',
		tagline: 'Study guidance for students after HSC',
		type: 'Research and innovation',
		status: null,
		areas: ['Artificial intelligence', 'Robotics and automation'],
		sortKey: 0,
		summary:
			'Choosing a subject after the Higher Secondary Certificate is a big decision. What’s Next is an analytics-based advisory system that matches students’ interests, aptitudes and personality to study options beyond the conventional ones, to reduce stress and lead to better outcomes.',
		highlights: ['Recommendations based on interests and personality.', 'Covers options beyond the usual subjects.', 'Aims to raise engagement and motivation.'],
		partners: ['ICT Division, Government of Bangladesh'],
		outcomes: ['Kamal N., Sarker F., Mukta M. S. H. and Mamun K. A., "Predictive analysis of the effects of personality traits on an academic program", ICAICT 2020, doi:10.1109/ICAICT51780.2020.9333455.'],
		image: cover('whats-next', 'What’s Next web page introducing the academic advisory system'),
		gallery: gallery('whats-next', [
			'What’s Next app welcome screen',
			'What’s Next sign-in screen',
			'What’s Next web form with study preference questions',
			'Graphic of the themes behind What’s Next, from data collection to recommendations'
		]),
		links: [{ label: 'Project page on the previous IRIIC site', url: `${WEB}/whats-next/` }],
		sources: [`${WEB}/whats-next/`]
	},
	{
		slug: 'igp-model',
		title: 'Intelligent General Practitioner (iGP) model',
		tagline: 'AI-supported primary care led by community health workers',
		type: 'Research and innovation',
		status: null,
		sortKey: 0,
		summary:
			'The iGP model is a people-centred approach to primary care in low- and middle-income countries: community health workers, supported by AI and connected diagnostic tools, provide screening, risk assessment and referral at the doorstep. It draws on IRIIC’s and CMED Health’s work in Bangladesh and has been presented internationally.',
		highlights: [
			'Workshop on AI and digital tools for primary care at the Second International Conference on Primary Health Care, Addis Ababa, 7 October 2025.',
			'Featured in the health compendium of AI Impact Casebooks at the India AI Impact Summit 2026.',
			'Selected as a case study for a flash presentation at the Third Meeting of the Global Initiative on AI for Health, Hangzhou, 16–18 September 2026.'
		],
		partners: ['CMED Health'],
		links: [{ label: 'IRIIC on Facebook', url: FB }],
		sources: [`${FB} (Addis Ababa, India AI Impact Summit and GI-AI4H posts)`]
	},

	// ---------- programmes, competitions and events ----------
	{
		slug: 'harvard-hsil-hackathon-2026',
		title: 'Harvard HSIL Hackathon 2026, Dhaka hub',
		tagline: 'The second year as Bangladesh’s only hub for Harvard’s health systems hackathon',
		type: 'Competition',
		status: 'Completed',
		dateLabel: '10–11 April 2026',
		sortKey: 20260410,
		summary:
			'IRIIC hosted the Dhaka hub of the seventh Harvard Health Systems Innovation Lab Hackathon, themed "Building High-Value Health Systems: Leveraging Artificial Intelligence". From more than 650 applications, 98 participants in 22 teams and four individuals were selected from 23 universities, medical colleges and research institutions, and worked with mentors on AI solutions for health system problems.',
		highlights: [
			'Challenge areas included critical care, infectious diseases, maternal and child health, diagnostics and access to care.',
			'Winners: Team Maverick (MIST and UIU), with an AI platform for early detection and support of dyslexia in children, and ShigellaAI Diagnostics Bangladesh (icddr,b), with clinical decision support for Shigella-related diarrhoeal disease.',
			'On day two, participants visited United Healthcare Services and attended a CPR seminar.'
		],
		partners: ['Harvard T.H. Chan School of Public Health, Health Systems Innovation Lab', 'Prime Bank', 'United Healthcare Services Ltd', 'Embassy of Sweden', 'Aparajeyo Tarunno', 'RHSTEPS', 'CMED Health', 'Ispahani Mirzapore Tea', 'The Business Standard', 'Bonik Barta'],
		image: cover('harvard-hsil-hackathon-2026', 'HSIL Hackathon seventh edition poster listing the global hubs and partners', 'cover'),
		links: [
			{ label: 'New Age: UIU holds HSIL Hackathon 2026', url: 'https://www.newagebd.net/post/campus-bites/297361/uiu-holds-hsil-hackathon-2026' },
			{ label: 'Hackathon page on the previous IRIIC site', url: `${WEB}/harvard-hsil-hackthon-2026/` }
		],
		featured: true,
		sources: [`${WEB}/harvard-hsil-hackthon-2026/`, `${WEB}/selected-participants-list-hsil-2026/`, 'https://www.newagebd.net/post/campus-bites/297361/uiu-holds-hsil-hackathon-2026', `${FB} (HSIL 2026 posts)`]
	},
	{
		slug: 'harvard-hsil-hackathon-2025',
		title: 'Harvard HSIL Hackathon 2025, Dhaka hub',
		tagline: 'Bangladesh’s first hub for Harvard’s health systems hackathon',
		type: 'Competition',
		status: 'Completed',
		dateLabel: '11–12 April 2025',
		sortKey: 20250411,
		summary:
			'In March 2025 Harvard’s Health Systems Innovation Lab named IRIIC its first regional hub in Bangladesh for the sixth edition of its global hackathon. Over two days at UIU, 101 participants formed teams, worked with mentors and pitched AI-driven ideas for stronger health systems to a jury.',
		highlights: [
			'Winners: Team NURIX, using brain–computer interfaces for mental health, and Team SmartEndo, for endometriosis screening and personalised care.',
			'Both winning teams received prize money, certificates and places in Harvard HSIL’s four-week venture incubation programme.',
			'A strategy dialogue on AI in life sciences and a panel on women in health technology ran alongside the hacking.'
		],
		partners: ['Harvard T.H. Chan School of Public Health, Health Systems Innovation Lab', 'DEIED project, Bangladesh Hi-Tech Park Authority', 'ICT Division, Government of Bangladesh', 'MIS, Directorate General of Health Services', 'PATH'],
		image: cover('harvard-hsil-hackathon-2025', 'Hackathon participants working together at laptops at the IRIIC Dhaka hub', 'cover'),
		gallery: gallery(
			'harvard-hsil-hackathon-2025',
			[
			'Participants working at laptops around tables',
			'A team discussing ideas over their laptops',
			'Team members talking through a solution',
			'Participants concentrating on their work, one wearing headphones',
			'A participant working at a laptop in the hub',
			'Two participants at a laptop during the hackathon',
			'Participants gathered around a mentor',
			'Teams at work across the hub floor'
		],
			'cover'
		),
		links: [
			{ label: 'The Business Standard: UIU became first-ever Bangladesh hub', url: 'https://www.tbsnews.net/economy/corporates/uiu-became-first-ever-bangladesh-hub-harvard-hsil-hackathon-2025-1090151' },
			{ label: 'The Daily Star: winners honoured at IRIIC', url: 'https://www.thedailystar.net/campus/noticeboard/news/winners-honoured-iriic-uiu-the-dhaka-hub-the-harvard-hsil-hackathon-2025-3875666' },
			{ label: 'Hackathon page on the previous IRIIC site', url: `${WEB}/harvard-hsil-hackthon-2025/` }
		],
		featured: true,
		sources: [`${WEB}/harvard-hsil-hackthon-2025/`, `${WEB}/team-nurix-team-smartendo-becomes-the-champion-of-the-inaugural-harvard-hsil-hackathon-2025/`, 'https://www.tbsnews.net/economy/corporates/uiu-became-first-ever-bangladesh-hub-harvard-hsil-hackathon-2025-1090151', `${FB} (HSIL 2025 posts)`]
	},
	{
		slug: 'strategy-dialogue-ai-life-sciences-2025',
		title: 'Strategy dialogue: unlocking AI’s potential in life sciences',
		tagline: 'Policy panel held during the HSIL Hackathon 2025',
		type: 'Event',
		status: 'Completed',
		dateLabel: '12 April 2025',
		sortKey: 20250412,
		summary:
			'A hybrid policy dialogue on how Bangladesh could use AI in health and life sciences, covering regulation, data governance, ethics and investment. It opened the final day of the HSIL Hackathon 2025 in Dhaka.',
		highlights: ['Panellists included Wu Jianbo (PATH, China) and Md. Shadman Sakib (Sheba Platform), among others.', 'Questions covered priority AI applications, data governance and privacy, and the investment needed for health AI.'],
		partners: ['PATH'],
		image: cover('strategy-dialogue-ai-life-sciences-2025', 'Poster for the strategy dialogue on AI in life sciences'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/unlocking-ais-potential-in-life-sciences-strategy-dialogue-highlights-innovation-at-harvard-hsil-hackathon-2025-bangladesh-round/` }],
		sources: [`${WEB}/strategy-dialogue-on-unlocking-ais-potential-in-life-sciences/`, `${WEB}/unlocking-ais-potential-in-life-sciences-strategy-dialogue-highlights-innovation-at-harvard-hsil-hackathon-2025-bangladesh-round/`]
	},
	{
		slug: 'launchpad-cycle-1',
		title: 'LaunchPad by UIHP@UIU, cycle 1',
		tagline: 'A national startup incubation cohort open to every university',
		type: 'Incubation',
		status: 'Completed',
		dateLabel: 'September 2024 to early 2025',
		sortKey: 20240918,
		summary:
			'LaunchPad is the startup incubation programme of UIU’s University Innovation Hub, hosted by IRIIC. The first cycle invited teams of three to five, each including at least one woman, from any university in Bangladesh. Shortlisted teams received about 16 weeks of mentorship before a final pitch for seed funding.',
		highlights: [
			'45 nominated teams; 18 winners shared BDT 7.5 lakh in seed funding, with awards from BDT 10,000 to BDT 100,000.',
			'Ventures spanned health technology, sustainable energy, consumer products and assistive technology.',
			'Examples: Team Neurons (a BCI neuromarketing platform), Team PELTIERS (a low-cost, energy-efficient air-conditioning module) and Team SoundVision (AI smart glasses for visually impaired people).'
		],
		partners: ['DEIED project, Bangladesh Hi-Tech Park Authority', 'ICT Division, Government of Bangladesh', 'The World Bank'],
		image: cover('launchpad-cycle-1', 'LaunchPad finalists, mentors and judges in a group photo on stage', 'cover'),
		gallery: gallery(
			'launchpad-cycle-1',
			[
			'A winning team holding a LaunchPad seed funding cheque',
			'A LaunchPad team with judges and their cheque',
			'A LaunchPad team receiving an award on stage',
			'A LaunchPad team holding their cheque',
			'Audience at the LaunchPad final pitch day'
		],
			'cover'
		),
		links: [
			{ label: 'The Business Standard: startup innovation cohort starts at UIU', url: 'https://www.tbsnews.net/economy/corporates/startup-innovation-cohort-starts-all-universities-uiu-944181' },
			{ label: 'University Innovation Hub', url: 'https://uihp.org/' }
		],
		featured: true,
		sources: ['https://www.tbsnews.net/economy/corporates/startup-innovation-cohort-starts-all-universities-uiu-944181', `${WEB}/final-pitch-day-of-launchpad-by-uihpuiu-showcases-bangladeshs-emerging-startup-talent/`]
	},
	{
		slug: 'launchpad-cycle-2',
		title: 'LaunchPad by UIHP@UIU, cycle 2',
		tagline: 'The second national call for student and early-stage startups',
		type: 'Incubation',
		status: null,
		dateLabel: 'Launched 23 April 2025',
		sortKey: 20250423,
		summary:
			'The second LaunchPad cycle opened with a launch event at IRIIC on 23 April 2025, with applications open until 27 April. It offered a four-month incubation programme with mentorship, prototype support and access to investors, and BDT 1,50,000 in prizes plus pre-seed funding.',
		highlights: ['Open to Bangladeshi students from second year onwards, faculty and alumni.', 'Teams of three to five with at least one female member; cross-university teams welcome.', 'Registration was free.'],
		partners: ['DEIED project, Bangladesh Hi-Tech Park Authority'],
		links: [{ label: 'University Innovation Hub', url: 'https://uihp.org/' }],
		sources: [`${WEB}/get-ready-for-launchpad-by-uihpuiu-bangladeshs-biggest-startup-competition-returns/`]
	},
	{
		slug: 'innovation-conclave-2025',
		title: 'Innovation Conclave 2025',
		tagline: 'Building an innovation ecosystem from research to commercialisation',
		type: 'Event',
		status: 'Completed',
		dateLabel: 'January 2025',
		sortKey: 20250100,
		summary:
			'A flagship event of the University Innovation Hub Program, themed "Building Innovation Ecosystem for Bangladesh 2.0: Journey of Research to Commercialization". Guests from government and universities toured IRIIC’s projects and discussed startup ecosystems, youth innovation and university–industry links.',
		highlights: ['Attended by the ICT Secretary, UIU’s Vice-Chancellor and DEIED project leaders.', 'Delegates came from universities across Bangladesh.'],
		partners: ['ICT Division, Government of Bangladesh', 'Bangladesh Hi-Tech Park Authority', 'The World Bank'],
		image: cover('innovation-conclave-2025', 'A presenter showing IRIIC projects on a screen to Innovation Conclave guests', 'cover'),
		gallery: gallery('innovation-conclave-2025', [
			'Audience listening to a presentation at the Innovation Conclave',
			'Guests in discussion around a meeting table',
			'Guests watching a project demonstration'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/2025-innovation-conclave-at-iriic-accelerating-bangladesh-2-0-through-research-to-commercialization/` }],
		sources: [`${WEB}/2025-innovation-conclave-at-iriic-accelerating-bangladesh-2-0-through-research-to-commercialization/`, `${WEB}/innovation-conclave/`]
	},
	{
		slug: 'ai-essentials-capital-markets-2025',
		title: 'AI Essentials for Capital Market Professionals',
		tagline: 'Two days of hands-on AI training for LankaBangla Securities',
		type: 'Training',
		status: 'Completed',
		dateLabel: '3–4 October 2025',
		sortKey: 20251003,
		summary:
			'Thirty officials from LankaBangla Securities PLC, including its managing director, CEO and CTO, took part in a two-day hands-on programme at UIU’s Innovation Hub on applying AI to financial operations, risk management, trade execution and decision-making. IRIIC ran it with AI Forum Bangladesh.',
		highlights: ['Participants came from management, digital transformation, finance, trading, risk, operations and research.', 'Sessions combined exercises, discussion and demonstrations on real capital-market scenarios.'],
		partners: ['AI Forum Bangladesh', 'LankaBangla Securities PLC'],
		image: cover('ai-essentials-capital-markets-2025', 'Trainer talking with LankaBangla Securities officials around a table at the AI training', 'cover'),
		gallery: gallery('ai-essentials-capital-markets-2025', [
			'Participants working together at laptops',
			'The training room during a session',
			'The training room from the back, with participants at tables',
			'A participant presenting during the training'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/lankabangla-securities-participates-in-bangladeshs-first-real-life-ai-training-for-capital-market-professionals-at-iriic-uiu/` }],
		sources: [`${WEB}/lankabangla-securities-participates-in-bangladeshs-first-real-life-ai-training-for-capital-market-professionals-at-iriic-uiu/`]
	},
	{
		slug: 'endometriosis-ai-workshop-2025',
		title: 'Endometriosis and AI awareness and screening workshop',
		tagline: 'Bringing AI screening to future doctors and nurses in Tangail',
		type: 'Event',
		status: 'Completed',
		dateLabel: '29 June 2025',
		sortKey: 20250629,
		summary:
			'A workshop at BP Pati Hall, Kumudini Women’s Medical College, on how AI can support earlier detection of endometriosis. Medical and nursing students heard about symptoms, diagnostic delays and AI-assisted screening and referral, with live demonstrations.',
		highlights: ['Organised with the Obstetrical and Gynaecological Society of Bangladesh, its Tangail branch, Kumudini Women’s Medical College and Kumudini Nursing College.', 'Renata PLC was the scientific partner; CMED Health collaborated.'],
		partners: ['Obstetrical and Gynaecological Society of Bangladesh', 'Kumudini Women’s Medical College', 'Kumudini Nursing College', 'CMED Health', 'Renata PLC'],
		image: cover('endometriosis-ai-workshop-2025', 'A speaker addressing the endometriosis and AI workshop at Kumudini Women’s Medical College', 'cover'),
		gallery: gallery('endometriosis-ai-workshop-2025', [
			'Panel of speakers under the workshop banner',
			'A full hall of students at the workshop',
			'Students in the audience at the workshop',
			'A speaker presenting into a microphone'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/empowering-womens-health-with-ai-endometriosis-awareness-screening-workshop-held-at-kumudini-womens-medical-college/` }],
		sources: [`${WEB}/empowering-womens-health-with-ai-endometriosis-awareness-screening-workshop-held-at-kumudini-womens-medical-college/`]
	},
	{
		slug: 'world-ip-day-2025',
		title: 'World Intellectual Property Day 2025 seminar',
		tagline: 'Protecting creative work, from music to software',
		type: 'Event',
		status: 'Completed',
		dateLabel: '26 April 2025',
		sortKey: 20250426,
		summary:
			'A seminar at IRIIC’s Smart Auditorium on intellectual property in the digital age, following that year’s World IP Day focus on music. Lawyers, technologists, founders and musicians discussed protecting creative and technical work and building respect for IP rights.',
		highlights: ['Speakers included constitutional lawyer Arif Khan, Barrister Tasnuva Shelley and composer Khayam Sanu Sandhi.', 'The Director chaired the programme.'],
		partners: ['Standing Committee on IPR, BASIS', 'Medhashum'],
		image: cover('world-ip-day-2025', 'Speaker presenting in front of slides at the World IP Day 2025 seminar', 'cover'),
		gallery: gallery('world-ip-day-2025', [
			'A speaker in front of the World IP Day banner',
			'Two speakers in conversation on stage',
			'Audience at the World IP Day seminar',
			'A speaker presenting a slide on innovation and IP',
			'Speakers and organisers in front of the seminar banner'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/irric-celebrates-creativity-and-innovation-on-world-intellectual-property-day-2025/` }],
		sources: [`${WEB}/irric-celebrates-creativity-and-innovation-on-world-intellectual-property-day-2025/`, `${FB} (World IP Day posts)`]
	},
	{
		slug: 'world-bank-delegation-2025',
		title: 'World Bank delegation visit',
		tagline: 'A regional vice-president tours IRIIC’s flagship projects',
		type: 'Visit',
		status: 'Completed',
		dateLabel: '12 February 2025',
		sortKey: 20250212,
		summary:
			'A World Bank delegation led by Martin Raiser, Regional Vice-President for South Asia, and Gayle Martin, then Interim Country Director for Bangladesh and Bhutan, visited IRIIC. They saw demonstrations of the AI reception assistant, the MindWave neuromarketing platform and SuSastho.AI, and discussed universities’ role in startup ecosystems.',
		partners: ['The World Bank'],
		image: cover('world-bank-delegation-2025', 'World Bank delegation being welcomed at UIU', 'cover'),
		gallery: gallery(
			'world-bank-delegation-2025',
			[
			'Group photo of the World Bank delegation with UIU and IRIIC hosts',
			'Delegation members listening to a presentation',
			'A speaker addressing the delegation',
			'Delegation members talking with IRIIC hosts',
			'A presenter speaking to the delegation in front of a slide',
			'Delegation and hosts in a meeting room in front of a screen'
		],
			'cover'
		),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/world-bank-delegation-visits-iriic-at-uiu-to-explore-innovation-and-entrepreneurship-in-bangladesh/` }],
		sources: [`${WEB}/world-bank-delegation-visits-iriic-at-uiu-to-explore-innovation-and-entrepreneurship-in-bangladesh/`, `${WEB}/world-bank-visits-uihpuiu/`]
	},
	{
		slug: 'aston-university-visit-2025',
		title: 'Visit by Aston University’s Deputy Vice-Chancellor',
		tagline: 'Prof. Osama Khan tours IRIIC and AIMS Lab',
		type: 'Visit',
		status: 'Completed',
		dateLabel: '16 February 2025',
		sortKey: 20250216,
		summary:
			'Professor Osama Khan, Deputy Vice-Chancellor (Academic) at Aston University in the UK, visited IRIIC and AIMS Lab, toured the research facilities and met faculty and student innovators.',
		partners: ['Aston University'],
		image: cover('aston-university-visit-2025', 'Visitors looking at research project posters in the IRIIC hub', 'cover'),
		gallery: gallery('aston-university-visit-2025', [
			'Visitors at research posters in the IRIIC hub',
			'Two visitors in the IRIIC office',
			'A visitor trying a headset at an interactive kiosk',
			'Visitors in front of the Smart Unbayon display'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/prof-osama-khandeputy-vice-chancellor-academic-at-aston-university-uk-visits-iriic-at-uiu-applauds-bangladeshs-innovation-momentum/` }],
		sources: [`${WEB}/prof-osama-khandeputy-vice-chancellor-academic-at-aston-university-uk-visits-iriic-at-uiu-applauds-bangladeshs-innovation-momentum/`]
	},
	{
		slug: 'innovation-talks-satellite-2025',
		title: 'Innovation Talks: the Bangladeshi satellite industry',
		tagline: 'With Imadur Rahman of Bangladesh Satellite Company',
		type: 'Event',
		status: 'Completed',
		dateLabel: '28 January 2025',
		sortKey: 20250128,
		summary:
			'An Innovation Talks session in the Smart Auditorium of UIU’s Innovation Hub with Imadur Rahman, Managing Director and CEO of Bangladesh Satellite Company Limited and a former principal researcher at Ericsson Research, on the present and future of the country’s satellite industry.',
		partners: ['Bangladesh Satellite Company Limited'],
		image: cover('innovation-talks-satellite-2025', 'Poster for the Innovation Talks session on the Bangladeshi satellite industry'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/innovation-talks-with-imadur-rahman-a-visionary-outlook-on-bangladeshs-satellite-industry/` }],
		sources: [`${WEB}/innovation-talks-with-imadur-rahman-a-visionary-outlook-on-bangladeshs-satellite-industry/`]
	},
	{
		slug: 'research-innovation-week-2024',
		title: 'UIU Research and Innovation Week 2024',
		tagline: 'Three days on research careers, opened by Princeton’s Prof. M. Zahid Hasan',
		type: 'Event',
		status: 'Completed',
		dateLabel: '1–4 December 2024',
		sortKey: 20241201,
		summary:
			'A week of seminars for undergraduates on doing research, opened with a talk on the Fourth Industrial Revolution and future society by Prof. M. Zahid Hasan of Princeton University. Themed days brought academic and industry researchers together, including speakers from bKash, HSBC, Axentec, Pharmasia and Friendship.',
		highlights: ['Day 1 (1 December): research overview, experience and industry research.', 'Day 2: research methods workshop and industry perspectives.', 'Day 3 (4 December): life sciences and environmental science research.'],
		image: cover('research-innovation-week-2024', 'Audience at the opening seminar of UIU Research and Innovation Week', 'cover'),
		gallery: gallery('research-innovation-week-2024', [
			'Speakers and guests in a group photo on stage',
			'A guest being welcomed with flowers in front of the event banner'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/uiu-launches-research-and-innovation-week-with-seminar-2/` }],
		sources: [`${WEB}/invitation-to-uiu-research-innovation-week-special-session-with-prof-m-zahid-hasan/`, `${WEB}/day-01-research-innovation-week/`, `${WEB}/day-03-research-innovation-week/`, `${WEB}/uiu-launches-research-and-innovation-week-with-seminar-2/`]
	},
	{
		slug: 'water-resources-iot-workshop',
		title: 'Ministry of Water Resources visit and IoT workshop',
		tagline: 'AI and IoT for flood prediction and river monitoring',
		type: 'Visit',
		status: 'Completed',
		sortKey: 0,
		summary:
			'A delegation from the Ministry of Water Resources, led by Additional Secretary (Administration) Abdul Latif Molla, visited IRIIC for a workshop on the use of the Internet of Things in modern governance, focused on flood prediction, riverbank erosion monitoring and better water resource data.',
		partners: ['Ministry of Water Resources, Government of Bangladesh'],
		image: cover('water-resources-iot-workshop', 'Poster for the Ministry of Water Resources visit and IoT workshop'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/delegation-from-the-ministry-of-water-resources-visits-uiu/` }],
		sources: [`${WEB}/delegation-from-the-ministry-of-water-resources-visits-uiu/`]
	},
	{
		slug: 'dhaka-university-vc-visit',
		title: 'Visit by the Vice-Chancellor of the University of Dhaka',
		tagline: 'Prof. Dr. Niaz Ahmed Khan tours IRIIC and AIMS Lab',
		type: 'Visit',
		status: 'Completed',
		sortKey: 0,
		summary:
			'Prof. Dr. Niaz Ahmed Khan, Vice-Chancellor of the University of Dhaka, visited IRIIC and AIMS Lab and was shown ongoing work in digital health, AI platforms and student entrepreneurship.',
		image: cover('dhaka-university-vc-visit', 'Guests being shown around the IRIIC lab during the visit', 'cover'),
		gallery: gallery('dhaka-university-vc-visit', [
			'Guests and hosts in conversation in the IRIIC office'
		], 'cover'),
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/prof-dr-niaz-ahmed-khan-visits-iriic-and-aims-lab-at-uiu/` }],
		sources: [`${WEB}/prof-dr-niaz-ahmed-khan-visits-iriic-and-aims-lab-at-uiu/`]
	},
	{
		slug: 'youth-colab-springboard-6',
		title: 'Youth Co:Lab Springboard Programme 6.0',
		tagline: 'Support for young social entrepreneurs, hosted at IRIIC',
		type: 'Event',
		status: 'Completed',
		dateLabel: 'March 2024',
		sortKey: 20240300,
		summary:
			'IRIIC hosted the sixth Youth Co:Lab Springboard Programme, which offered young entrepreneurs mentorship, networking and skills workshops to refine ideas with social and sustainable impact.',
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/youth-colab-springboard-program-6-0-2/` }],
		sources: [`${WEB}/youth-colab-springboard-program-6-0-2/`]
	},
	{
		slug: 'design-thinking-seminar-2023',
		title: 'Seminar: design thinking for connecting your customers',
		tagline: 'With independent consultant Nitin Kumar',
		type: 'Event',
		status: 'Completed',
		dateLabel: '1 August 2023',
		sortKey: 20230801,
		summary: 'A seminar at the University Innovation Hub in which consultant Nitin Kumar shared design-thinking methods for understanding and connecting with customers, aimed mainly at students.',
		links: [{ label: 'Report on the previous IRIIC site', url: `${WEB}/design-thinking-for-connecting-your-customers-2/` }],
		sources: [`${WEB}/design-thinking-for-connecting-your-customers-2/`]
	},

	// ---------- agreements ----------
	{
		slug: 'mou-onnorokom-edtech',
		title: 'Agreement with Onnorokom EdTech',
		tagline: 'Research and commercialisation in educational technology',
		type: 'Partnership',
		status: null,
		dateLabel: '29 October 2024',
		sortKey: 20241029,
		summary: 'IRIIC and Onnorokom EdTech Ltd signed a memorandum of understanding at UIU to collaborate on research, development and commercialisation in educational technology.',
		partners: ['Onnorokom EdTech Ltd'],
		links: [{ label: 'Announcement on the previous IRIIC site', url: `${WEB}/mou-between-iriicuiu-and-onnorokom-edtech-ltd-2/` }],
		sources: [`${WEB}/mou-between-iriicuiu-and-onnorokom-edtech-ltd-2/`]
	},
	{
		slug: 'mou-lankabangla-finance',
		title: 'Agreement with LankaBangla Finance',
		tagline: 'Industry–academia research collaboration',
		type: 'Partnership',
		status: null,
		dateLabel: 'September 2024',
		sortKey: 20240900,
		summary: 'IRIIC and LankaBangla Finance Ltd signed a memorandum of understanding at UIU for industry–academia research collaboration.',
		partners: ['LankaBangla Finance Ltd'],
		links: [{ label: 'Announcement on the previous IRIIC site', url: `${WEB}/mou-was-signed-between-iriicuiu-and-lankabangla-finance-ltd/` }],
		sources: [`${WEB}/mou-was-signed-between-iriicuiu-and-lankabangla-finance-ltd/`]
	},
	{
		slug: 'mou-ipric',
		title: 'Agreement with the Intelligent Police Research Center',
		tagline: 'Research and innovation for police services',
		type: 'Partnership',
		status: null,
		dateLabel: '28 July 2024',
		sortKey: 20240728,
		summary: 'IRIIC and the Intelligent Police Research Center (IPRIC) signed a memorandum of understanding to collaborate on research and innovation for police services.',
		partners: ['Intelligent Police Research Center (IPRIC)'],
		links: [{ label: 'Announcement on the previous IRIIC site', url: `${WEB}/mou-between-iriicuiu-and-intelligent-police-research-center-ipric/` }],
		sources: [`${WEB}/mou-between-iriicuiu-and-intelligent-police-research-center-ipric/`]
	},
	{
		slug: 'mou-fbcci-irc',
		title: 'Agreement with the FBCCI Innovation and Research Centre',
		tagline: 'Innovation and research across public and private sectors',
		type: 'Partnership',
		status: null,
		dateLabel: '8 July 2024',
		sortKey: 20240708,
		summary: 'IRIIC and the FBCCI Innovation and Research Centre signed a memorandum of understanding at FBCCI IRC to foster innovation and research activity in government and non-government sectors.',
		partners: ['FBCCI Innovation and Research Centre'],
		links: [{ label: 'Announcement on the previous IRIIC site', url: `${WEB}/mou-between-iriicuiu-and-fbcci-innovation-research-centre-fbcci-irc-2/` }],
		sources: [`${WEB}/mou-between-iriicuiu-and-fbcci-innovation-research-centre-fbcci-irc-2/`]
	},
	{
		slug: 'mou-esb-incepta',
		title: 'Tripartite agreement with ESB and Incepta Pharmaceuticals',
		tagline: 'AI screening for endometriosis and adenomyosis',
		type: 'Partnership',
		status: null,
		dateLabel: '3 August 2023',
		sortKey: 20230803,
		summary:
			'IRIIC, the Endometriosis-Adenomyosis Society of Bangladesh and Incepta Pharmaceuticals signed a tripartite memorandum of understanding to develop AI-based screening protocols and interventions for endometriosis and adenomyosis. This work led to SmartEndo.',
		partners: ['Endometriosis-Adenomyosis Society of Bangladesh', 'Incepta Pharmaceuticals Ltd'],
		links: [
			{ label: 'Announcement on the previous IRIIC site', url: `${WEB}/mou-between-iriicuiu-and-esb-incepta-pharmaceuticals-ltd-2/` },
			{ label: 'SmartEndo', url: '/projects/smartendo/' }
		],
		sources: [`${WEB}/mou-between-iriicuiu-and-esb-incepta-pharmaceuticals-ltd-2/`]
	}
];

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

export const projectTypes = [...new Set(projects.map((project) => project.type))];

/** Calendar year from the sort key, or null when no date is known. */
export function projectYear(project: Project): number | null {
	return project.sortKey > 0 ? Math.floor(project.sortKey / 10000) : null;
}
