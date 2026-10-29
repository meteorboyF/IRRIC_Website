# IRIIC research inventory

Compiled 29 October 2026 for the IRIIC website rebuild. Everything here is
summarised in our own words from the sources listed. **Nothing in this file
is published as-is**: the site renders only items marked *use*, and leaves
out any fact marked *unconfirmed*.

## How the sources were read

| Source | How | Coverage |
|---|---|---|
| https://iriic.uiu.ac.bd/ | Read in the user's signed-in Chrome (the site serves a hosting bot check to scripts). The site's public WordPress REST API returned every post (166), page (86) and media item (1,074). | Complete |
| https://www.facebook.com/profile.php?id=61555389324566 | Read as text in the user's signed-in Chrome; only "See more" was expanded. No reactions, comments or admin actions. | Back to about April 2025 (120 posts); the feed stopped loading older posts. Older history is covered by the website. |
| https://www.uiu.ac.bd/career/ | Read in Chrome. | Current listings (October 2026) |
| Press | Web search for the English-language articles named on IRIIC's "In Media" page, then the articles themselves. | See *Press* below |

Facebook does not expose post dates in the page text, so a Facebook item has
a date only when the post itself states one.

### Data-quality problems found on the current website

- **Spam post.** "How Chance and Strategy Shape Rewards Today" (post 18603,
  9 April 2025, uncategorised) is gambling SEO spam. It suggests the
  WordPress install has been compromised or has a rogue account. Excluded;
  reported to the owner.
- **Placeholder theme text.** The five centre pages under
  `/concerned-departments/` contain the theme's demo copy (Lorem ipsum,
  "We are Marity…", "patients supported daily"). Only the real introductory
  paragraphs (BCI Lab, CDHIPR, IACC) are used. The AIMS Lab and University
  Innovation Hub pages have no real copy. Many demo pages (shop, pricing,
  portfolio, "Dummy", "Sample Page") are still published.
- **Copied bodies.** All 31 "In Media" posts and four "Research works" posts
  have the body of an unrelated WTISD 2025 post. Their titles and dates are
  real; their text is not. Original article URLs were found by search instead.
- **Wrong description.** The MindWave Analytics page reuses CMED's
  description paragraph. Only its specification list is used.
- **Inconsistent name.** Centre pages call IRIIC the "International Research
  & Innovation and Incubation Center". The official name used everywhere
  else, and on this site, is *Institute of Research, Innovation, Incubation
  and Commercialization (IRIIC)*.
- **Unfinished investor page.** `/life-at-iriic/investor/` ends with
  "[email]" and "[website link]" placeholders. Not used.
- **Conflicting numbers.** CMED Health reach is given as "2 million+ monthly
  users" (About page) and "over 4 million people" (Facebook). Neither is
  published on the new site.

---

## 1. Organisation

| Field | Value | Source | Confidence |
|---|---|---|---|
| Name | Institute of Research, Innovation, Incubation and Commercialization (IRIIC), United International University | iriic.uiu.ac.bd/about-us/ | High |
| Mission (summary) | Close the gap between academia, industry and government; turn social and industrial problems into innovations; build a skilled 4IR workforce; grow a startup ecosystem. | about-us | High |
| Facebook intro | "bridges academia, industry, and government…" (short quote, attributed) | Facebook intro | High |
| Umbrella units | AIMS Lab; Brain Computer Interface (BCI) Research Lab; University Innovation Hub; Center for Digital Health Innovation & Policy Research (CDHIPR); Industry & Academia Collaboration Center for 4IR (IACC) | about-us; TBS 1 Mar 2023 | High |
| AIMS Lab founded | December 2014, by UIU's CSE department | about-us | High |
| BCI Research Lab | Bangladesh's first; launched 12 Dec 2021; funded by Bangladesh Hi-Tech Park Authority (ICT Division); inaugurated by the then State Minister for ICT | about-us; TBS 13 Dec 2021 | High |
| IRIIC launch | Reported by TBS on 1 Mar 2023 ("UIU launches new institute for advanced tech research"); attended by the then Education Minister and FBCCI and BGMEA presidents | TBS; Daily Star Shout | High (exact day unconfirmed) |
| Projects to date | "more than 25 projects" by AIMS Lab in ten years; CMED Health commercialised; four under commercialisation | about-us | Medium (self-reported) |
| Address | Room 1012, 10th floor, United International University, United City, Madani Avenue, Badda, Dhaka 1212 | contact-us | High |
| Email | director@iriic.uiu.ac.bd, aimsl@uiu.ac.bd (site); iriic.uiu@gmail.com (site owner's instruction for this rebuild) | contact-us; brief | High |
| Phone | 09604 848848, ext. 3140; office hours 8.30 am to 4.30 pm | contact-us (site says "4.30AM", an obvious typo) | High |
| Social | Facebook, LinkedIn (company/institute-of-research-innovation-incubation-and-commercialization-iriic-uiu), YouTube (@IRIIC_UIU) | site footer | High |

### Centres (use only the real introductions)

| Centre | Summary | Source |
|---|---|---|
| AIMS Lab | Research lab of UIU CSE since 2014: machine learning, NLP, intelligent systems, biomedical engineering, bioinformatics, embedded systems. Own site: https://aimsl.uiu.ac.bd/ | about-us |
| BCI Research Lab | Neural interfaces for neurorehabilitation, cognitive enhancement and HCI; Bangladesh's first BCI lab. | concerned-departments/brain-computer-interface-bci-research-lab/ |
| University Innovation Hub (UIHP@UIU) | UIU's hub under the University Innovation Hub Program of the DEIED project (BHTPA, ICT Division, World Bank). Runs LaunchPad. Own site: https://uihp.org/ | news posts; TBS 18 Sep 2024 |
| CDHIPR | Digital health research and policy analysis: AI, telemedicine, health data analytics. | concerned-departments/center-for-digital-health-innovation-policy-research-cdhipr/ |
| IACC | Industry–academia collaboration on 4IR technologies, with roles for academia, industry and government. | concerned-departments/industry-academia-collaboration-center-for-4ir-iacc/ |

## 2. People (public roles only)

From https://iriic.uiu.ac.bd/our-team/. Personal email addresses on that
page (Gmail) are **not** reproduced.

| Name | Role | Photo on source |
|---|---|---|
| Prof. Khondaker Abdullah Al Mamun, PhD | Founder & Director, IRIIC; founder AIMS Lab; founder CMED Health; Professor, CSE, UIU | 2025/03/Director-Mamun.png |
| Prof. Dr. Md. Abul Kashem Mia | Adviser; Vice-Chancellor, UIU | 2025/03/VC-Kashem.png |
| Dr. M. Rezwan Khan | Adviser; Professor Emeritus, EEE; Executive Director, Institute of Advanced Research, UIU | 2025/03/Advisor-Rizwan.png |
| Dr. Mohammad Nurul Huda | Adviser; Professor and Head, CSE, UIU; AIMScribe HEAT sub-project manager | 2025/03/Advisor-Huda.png |
| Ummay Sumaiya Mutiatur Rasul | Head of Communications, Office of the Registrar, UIU | 2025/03/Administration-MutiaturSumaiya.png |
| Nabila Binte Ayub | Executive, IRIIC | 2025/03/Administration-Nabila.png |
| Sadik-E-Tawheed | Assistant Executive, IRIIC | 2025/03/Administration-Sadik.png |
| Dr. Marzia Zaman | Research Physician (Cog-i, Virtual Eye Doc, SuSastho.AI, SmartEndo) | 2026/02/Marzia-Zaman.png |
| Dr. Israt Jahan | Research Physician (SmartEndo) | 2025/03/Team-Dr.-Israt-Jahan.png |
| Farhan Ishtiaque | Research Engineer, BCI (MindWave Analytics) | 2025/03/Team-Farhan-Ishtiaque.png |
| Ferdous Wahid Anik | Research Engineer (Prescription Audit System) | 2025/03/Team-Ferdous-Wahid.png |
| Md. Jobayer Rahman | Research Engineer (Symptom Checker) | 2025/03/Team-Md.-Jobayer-Rahman.png |
| Md Abdullah Al Mashud | Research Engineer (SuSastho.AI, Smart Receptionist) | 2025/03/Team-Md-Abdullah-Al-Mashud.png |
| Sakib Zaman | Research Engineer (AIMScribe) | 2025/03/Team-Sakib-zaman.png |
| Shamim Ahamed | Research Engineer (SuSastho.AI) | 2025/03/Team-Shamim-Ahamed.png |

Twelve further "team-details" posts exist (for example Refat Ahmed, Faed
Ahmed Arnob) but are not on the team page; treated as past members and
omitted.

## 3. Research and innovation projects

Website post dates are publishing dates, **not** project dates; projects
therefore carry no date unless a source gives one. Partner logos on project
pages are unlabelled images; names are recorded only where text states them.

| # | Project | Type | Summary (own words) | Partners / funders (stated in text) | Outcomes / recognition | Source | Images | Confidence |
|---|---|---|---|---|---|---|---|---|
| 1 | CMED | Digital health platform (commercialised) | Cloud-based rural health monitoring: community health workers screen and triage patients as healthy, alarming or emergency, refer complex cases to specialists, AI risk prediction for stroke, heart attack and diabetes; identity-based encryption for records. Became CMED Health. | ICT Division funding and Grameenphone partnership (2017 award text) | Paper: Sailunaz et al., *Computers & Electrical Engineering* 53 (2016), doi:10.1016/j.compeleceng.2016.02.005. Awards: National ICT Award 2017, Bangladesh Innovation Award 2018 (SDG Inclusion), DBS-NUS Social Venture Challenge Asia 2018, BASIS 2019 first runner-up, APICTA 2019 merit, Bangladesh Business Innovation Awards 2019, e-CAB eCMA 2020. BMC Public Health paper on the CHW model (Facebook). | /cmed/; /achievements/; TBS 27 Nov 2021 | interface 01–06 | High |
| 2 | MindWave Analytics (Market Brain) | BCI / neuromarketing | EEG-based prediction of consumer response to marketing stimuli; a local neuromarketing platform. | — | Paper: Mashrur et al. 2023, doi:10.1007/978-981-19-8032-9_3. Shown to the World Bank delegation (Feb 2025). | /mindwave-analytics/ | Market-Brain-Still-2.jpg | High (site description wrong, specs used) |
| 3 | AI Reception (SARA) | Generative AI / robotics | Bengali voice receptionist for banks, universities and hospitals: face recognition, Bangla speech recognition and synthesis. Linked work: AIMS TALK call-centre system. | — | Mujib 100 Idea Contest 2021 award (as "AI Customer Service"). Paper: Pranto et al. 2021 ETCCE, doi:10.1109/ETCCE54784.2021.9689831. Demonstrated to the World Bank (Feb 2025). | /ai-reception/; /achievements/ | AI-Reception-image-01 | High |
| 4 | SuSastho.AI | Generative AI / adolescent health | Bangla medical chatbot and app for adolescent sexual, reproductive and mental health: education, screening, referral. | Bill & Melinda Gates Foundation funding (dissemination report) | Publicly disseminated at Dhaka Reporters Unity ("Monday, May 27", year unstated, so unconfirmed). Director selected among 100 innovators for the Gates Foundation AI convening in Kigali (Apr 2025) for this project (Daily Star). | /susastho-ai/; /susastho-ai-bangla-gpt-offers-teen-health-solutions/; Daily Star | app interface 01–07 | High |
| 5 | Virtual Hospital | IoT health | Home health monitoring and referral system. Very little text on source. | — | — | /virtual-hospital/ | image-01, interface 01–03 | Medium |
| 6 | iCRP | AI / cardiovascular | Machine-learning risk profiling for heart attack and stroke from demographic, behavioural, physiological and clinical data; risk mapping. | — | — | /icrp/ | image-01-1, interface 01–02 | High |
| 7 | Cog-i (ADCare) | AI / dementia | Alzheimer's screening app with awareness content, referral and resource mapping. | — | Paper: Roy et al. 2020, *J. Neurological Disorders* 8(7). | /cog-i/ | interface 01–04 | High |
| 8 | CKD | AI / kidney | Machine-learning early risk prediction for chronic kidney disease. | — | — | /ckd/ | image-01, interface 01–02 | High |
| 9 | Symptom Checker | AI / primary care | Recommends over-the-counter care or a doctor visit from symptoms (1,816-symptom dataset), to curb self-medication and antibiotic misuse; pharmacy pilots planned. | — | Publications listed without years. | /symptom-checker/ | flyer images | High |
| 10 | AIMScribe | Generative AI / clinical NLP | Bangla medical scribe: speech recognition, diarisation, entity extraction and summarisation turn consultations into structured records and prescriptions. Now a HEAT sub-project. | HEAT (Ministry of Education and World Bank) | Co-design workshop, Hotel Sarina, 23 Apr 2026, 50+ participants (Facebook). Recruiting October–November 2026. | /aimscribe/; Facebook; uiu.ac.bd/career | AIMScribe-picture-01-2 | High |
| 11 | Prescription Audit System | AI / medication safety | Automated prescription auditing: dosage checks, interactions, guideline compliance; dataset of Bangladeshi prescriptions; demo at dosage.iriic.uiu.ac.bd. | — | — | /ai-based-prescription-audit-system/ | image-01-1, image-02 | High |
| 12 | SmartAMR | AI / antimicrobial resistance (HEAT sub-project) | Hybrid AI framework flagging prescription errors and harmful interactions in real time, supporting adherence and responsible antibiotic use. | UIU Department of Pharmacy with IRIIC; HEAT (Ministry of Education, World Bank) | Co-design workshop, Hotel Sarina, 26 Apr 2026. Antimicrobial-stewardship platform featured in India AI Impact Summit 2026 health compendium (Facebook). | Facebook #11, #76; uiu.ac.bd/career | Facebook only | High |
| 13 | Access Teledentistry | Digital health / oral | Remote oral-health screening, consultation and referral; develop, pilot and test feasibility. | — | — | /access-teledentistry/ | img-01-1, img-02 | High |
| 14 | Bolte Chai | Assistive technology | Android picture-exchange communication app for non-verbal autistic children, in Bangla and English. | ICT Division funding (award text) | Paper: Khan et al. 2016 MediTec, doi:10.1109/MEDITEC.2016.7835391. National ICT Award 2017, APICTA 2017, BASIS merit 2020, Bangladesh Innovation Award 2021 honourable mention; World Autism Awareness Day 2022 recognition. | /bolte-chai/; /achievements/ | interface 01–05 | High |
| 15 | Focus Mind | BCI / education | Neurofeedback learning support measuring attention, stress and brain-to-brain synchrony in students. | — | One of the BCI Lab's projects at launch (TBS 2021). | /focus-mind/; TBS | Picture-01, Image-02–05 | High |
| 16 | Concentrate Today | BCI / attention | Real-time EEG neurofeedback training for sustained attention. | — | Paper: Parbez & Mamun 2020 ICAICT ("BlinkFruity"). | /concentrate-today/ | image-01–03 | High |
| 17 | PVDoctor | AI / Parkinson's | Smartphone voice and tremor analysis to screen and monitor Parkinson's disease. | ICT Division (Innovation Fund 2018) | Innovation Fund Grand Award 2018; Mujib 100 Idea Contest 2021. Paper: Ehsan, Pranto & Mamun 2021, IEEE/EMBS NER, doi:10.1109/NER49283.2021.9441145. | /pvdoctor/; /achievements/ | image-01 | High |
| 18 | Deep Depression | BCI / mental health | EEG connectivity biomarkers to support depression diagnosis. | — | BASIS National ICT Awards 2022; Mujib 100 Idea Contest 2021; featured in India AI Impact Summit 2026 health compendium. Paper: Dev et al. 2022, *IEEE Access* 10, doi:10.1109/ACCESS.2022.3146711. | /deep-depression/; /achievements/; Facebook #77 | image-01, image-02 | High |
| 19 | Autism Barta | Digital health / autism | Community mobile screening for early autism risk with referral to nearby services. | a2i, Prime Minister's Office (award text) | National Mobile App Award 2016; National ICT Award 2017; APICTA 2017; World Autism Awareness Day 2022 recognition. | /autism-barta/; /achievements/ | interface 01–06 | High |
| 20 | SmartEndo | AI / women's health | Self-administered, culturally adapted questionnaire screening for endometriosis risk, with referral and follow-up, in Bangla and English. | ESB and Incepta Pharmaceuticals (tripartite MoU, 3 Aug 2023) | Champion, Harvard HSIL Hackathon 2025 Dhaka hub; Champion in Biotech, BEAR Summit & National Semiconductor Symposium 2025. Awareness workshop at Kumudini Women's Medical College, 29 Jun 2025. | /smartendo/; HSIL posts; Facebook #103 | Interface-01–07 | High |
| 21 | i Power | AI / energy | Electricity demand forecasting and consumption optimisation, factoring in temperature and humidity. | — | Mujib 100 Idea Contest 2021 award. | /i_power/; /achievements/ | still-01-1, 03–05 | High |
| 22 | What's Next | AI / education | Academic advisory for HSC graduates, matching interests and personality to study options. | — | Paper: Kamal et al. 2020 ICAICT, doi:10.1109/ICAICT51780.2020.9333455. | /whats-next/ | interface | High |
| 23 | CanAware | Digital health / cancer | Cancer awareness and screening; first app BScan for breast cancer, clinically validated. | — | Accuracy figures self-reported; omitted. | /canaware/ | App-Interface 01–03 | High (figures not used) |
| 24 | Virtual Eye Doc | Digital health / eye care | Eye screening app for health volunteers (acuity, colour vision, questionnaires, referral). | ICT Division funding | Initial clinical validation at Sheikh Fazilatunnessa Mujib Eye Hospital, Gopalganj (86% preliminary accuracy, not published on the site). Related paper listed under Research works. | /virtual-eye-doc/ | interface 01–06 | High |
| 25 | iGP (Intelligent General Practitioner) model | Digital health model | AI-supported, community-health-worker-led primary care model for low- and middle-income countries (Bangladesh and India). | CMED Health | Workshop at the 2nd International Conference on Primary Health Care, Addis Ababa (7 Oct 2025); featured in India AI Impact Summit 2026 compendium; selected for flash presentation at GI-AI4H, Hangzhou, 16–18 Sep 2026. | Facebook #2, #75, #92 | Facebook only | High |
| 26 | Smart Reception / Police GPT | NLP | Bengali AI assistant for police-station citizen services and police information. | Intelligent Police Research Center (IPRIC MoU, 28 Jul 2024) is the likely partner (unconfirmed link) | Referenced in internship and Research Engineer (NLP) posts. | /life-at-iriic/internship/; Facebook #3, #98 | none | Medium; no standalone page |

Mentioned but **not used** for lack of sources: "Healthy Mom Healthy Baby"
(team page only), "Covid-19 DSS" (media library only), neonatal-care AI
work (one Facebook visit post, no project name).

## 4. Programmes, events and initiatives

| Item | Type | Date(s) | Partners | Outcome | Named public figures | Sources | Images | Confidence |
|---|---|---|---|---|---|---|---|---|
| Harvard HSIL Hackathon 2025, Dhaka hub | Competition (hub host) | 11–12 Apr 2025 | Harvard T.H. Chan School of Public Health HSIL; DEIED project (BHTPA, ICT Division); MIS, DGHS (health domain partner); PATH | First Bangladesh hub (announced by HSIL 4 Mar 2025). 101 participants. Winners: Team NURIX (BCI for mental health) and Team SmartEndo (endometriosis screening); both entered HSIL's venture incubation programme. | Jury and guests listed in source | /harvard-hsil-hackthon-2025/; winners post; TBS; Daily Star; Facebook | 2025/04/01–08.jpg | High |
| Strategy dialogue: "Unlocking AI's Potential in Life Sciences" | Policy dialogue | 12 Apr 2025 | Part of HSIL 2025 | Hybrid panel moderated by the Director | Wu Jianbo (PATH China), Md. Shadman Sakib (Sheba Platform) and others | strategy-dialogue posts | poster | High |
| Harvard HSIL Hackathon 2026, Dhaka hub | Competition (hub host) | 10–11 Apr 2026 (IRIIC); New Age gives 19 Apr | Prime Bank, United Healthcare Services (strategic); Embassy of Sweden, Aparajeyo Tarunno, RHSTEPS (SRHR); CMED Health; Ispahani Mirzapore Tea; media: TBS, Bonik Barta | 650+ applications; 98 selected (22 teams, 4 individuals) from 23 institutions; 17 teams in final. Winners: Team Maverick (MIST and UIU; dyslexia support) and ShigellaAI Diagnostics Bangladesh (icddr,b). | Jury includes Laura J Reichenbach (BRAC JPGSPH), MD Nurul Hai (Startup Bangladesh) | /harvard-hsil-hackthon-2026/; Facebook #17–#64; New Age 20 Apr 2026 | 2025/12 poster; 2026/04 program flow | High (day: use "April 2026" and the IRIIC dates 10–11 April, which IRIIC itself published) |
| LaunchPad by UIHP@UIU, cycle 1 | Incubation | Call Sep 2024 (submissions by 15 Oct 2024); final pitch early 2025 | DEIED (ICT Division, BHTPA, World Bank) | 45 nominated teams; 18 winners shared BDT 7.5 lakh seed funding (BDT 10,000–100,000 each); ~16 weeks mentorship. | — | TBS 18 Sep 2024; final pitch post | Final-Pitch-Day-01–06 | High |
| LaunchPad cycle 2 | Incubation | Launch event 23 Apr 2025; applications to 27 Apr 2025 | DEIED | BDT 1,50,000 prizes plus pre-seed funding; four-month incubation; teams of 3–5 with at least one woman. Outcome not published. | — | LaunchPad post | — | High (status: completed, outcome unconfirmed) |
| Innovation Conclave 2025 | Conference | Early 2025 (post 19 Jan 2025) | UIHP; ICT Division; BHTPA; World Bank | Theme: research to commercialisation; delegates from many universities. | Shish Haider Chowdhury (then ICT Secretary) | innovation-conclave posts | 2025-Innovation-Conclave-at-IRIIC*.jpg | High (exact date unconfirmed) |
| UIU Research & Innovation Week | Seminar series | 1–4 Dec 2024 | UIU institutes | Opened with a talk by Prof. M. Zahid Hasan (Princeton); three themed days. | Prof. M. Zahid Hasan | Day 1–3 posts; TBS | posters; FB-origin photos | High |
| Innovation Talks: Bangladeshi satellite industry | Talk | 28 Jan 2025 | Bangladesh Satellite Company Ltd | — | Imadur Rahman (MD & CEO, BSCL) | innovation-talks posts | poster | High |
| World Bank delegation visit | Visit / showcase | 12 Feb 2025 | The World Bank | Demonstrations of SARA, MindWave and SuSastho.AI. | Martin Raiser, Gayle Martin | posts; TBS; Prothom Alo | World-Bank-Delegation-01–07.jpg | High |
| World IP Day 2025 seminar | Seminar | 26 Apr 2025 | Standing Committee on IPR of BASIS; Medhashum | IP and music in the digital age. | Barrister Tasnuva Shelley, Arif Khan and others | IP posts; Facebook | IP-01–06.jpg | High |
| Endometriosis & AI awareness workshop | Workshop | 29 Jun 2025 | OGSB, OGSB Tangail, Kumudini Women's Medical College and Nursing College, CMED Health; Renata PLC (scientific partner) | Screening awareness for medical and nursing students. | — | workshop post | Empowering-*.jpg/png | High (photos show students; check consent) |
| AI Essentials for Capital Market Professionals | Training | 3–4 Oct 2025 | AI Forum Bangladesh; LankaBangla Securities PLC | 30 LankaBangla officials trained. | LankaBangla leadership named in post | news post | LankaBangla-01–05 | High |
| AIMScribe and SmartAMR co-design workshops | Workshop | 23 and 26 Apr 2026 | HEAT; UIU CSE and Pharmacy | Requirements validation with clinicians and officials. | — | Facebook #11, #12 | Facebook photos | High |
| Ministry of Water Resources delegation and IoT workshop | Visit / workshop | Not stated (post Feb 2025) | Ministry of Water Resources | Workshop on IoT in governance. | Abdul Latif Molla | delegation post | poster | Medium (no date) |
| Industry–academia visit (Unilever, FICCI) | Visit | Not stated | Unilever Bangladesh; FICCI | Interest in collaboration. | Zaved Akhter | post 11391 | — | Medium (no date) |
| Visits by Prof. Osama Khan (Aston) and Prof. Niaz Ahmed Khan (Dhaka University) | Visit | 16 Feb 2025; date not stated | — | — | named | posts | photos | High / Medium |
| Youth Co:Lab Springboard 6.0 | Programme host | March 2024 | — | Hosted at IRIIC. | — | post | — | Medium (organiser not stated) |
| "Design Thinking for Connecting Your Customers" | Seminar | 1 Aug 2023 | University Innovation Hub | — | Nitin Kumar | post | — | High |
| The Bangladesh Corpus: Public Lecture Series 2024 | Lecture series | Not stated | — | — | — | post | poster | Low (no date or detail) |
| As-Sunnah Foundation visit (about 60 participants) | Visit | Not stated | As-Sunnah Foundation | — | — | Facebook #102 | — | Low; omitted |
| "AI for Business Excellence" seminar | Seminar | 7 Feb 2026 | UIU | IRIIC's role not stated. | — | Facebook #68–#71 | — | Low; omitted |
| Gen Z AI podcast (6 episodes) | Media | Early 2026 | Presented by AI Forum Bangladesh | — | — | Facebook #78–#83 | — | Omitted (AI Forum production) |

## 5. Partnerships (MoUs)

| Partner | Date signed | Purpose | Source |
|---|---|---|---|
| Onnorokom EdTech Ltd | 29 Oct 2024 | Edtech research, development and commercialisation | MoU post |
| LankaBangla Finance Ltd | September 2024 | Industry–academia research | MoU post |
| Intelligent Police Research Center (IPRIC) | 28 Jul 2024 | Research for police services | MoU post |
| FBCCI Innovation & Research Centre | 8 Jul 2024 | Innovation and research collaboration | MoU post |
| Endometriosis-Adenomyosis Society of Bangladesh and Incepta Pharmaceuticals (tripartite) | 3 Aug 2023 | AI screening protocols for endometriosis and adenomyosis | MoU post |
| CMED Health | Reported 24 Jan 2023 | UIU–CMED research agreement (Prothom Alo headline only) | In Media page | 

Programme partners named in text: Harvard T.H. Chan School of Public Health
HSIL; DEIED / Bangladesh Hi-Tech Park Authority / ICT Division; The World
Bank (DEIED, HEAT); Ministry of Education (HEAT); MIS, DGHS; PATH; AI Forum
Bangladesh; CMED Health; BASIS; Medhashum; OGSB; Kumudini Women's Medical
College; Prime Bank; United Healthcare Services; Embassy of Sweden.

## 6. Recognition

Awards in the record belong to the Director, AIMS Lab or CMED Health, not to
IRIIC as an institute (IRIIC was launched in 2023). The site labels them that
way.

| Year | Award | Recipient | Source |
|---|---|---|---|
| 2025 | Award on World Telecommunication and Information Society Day (17 May), Posts and Telecommunications Division | Director | achievements; TBS; New Age |
| 2024 | Study UK Alumni Awards 2023–24, Business and Innovation (8 Feb 2024) | Director | achievements |
| 2022 | Digital Bangladesh Award, Technical-Private (Best Individual), 12 Dec 2022 | Director | achievements; Prothom Alo |
| 2022 | BASIS National ICT Awards (31 Oct 2022) | AIMS Lab, Deep Depression | achievements |
| 2021 | Mujib 100 Idea Contest: four of the top ten (from 1,100+ ideas) | AIMS Lab | achievements; TBS 2021 |
| 2021 | Bangladesh Innovation Award, honourable mention | Bolte Chai | achievements |
| 2018–2020 | Several CMED Health awards (see project 1) | CMED Health | achievements |
| 2016–2018 | Mobile App Award 2016, National ICT Awards 2017, APICTA 2017, Innovation Fund 2018 | Autism Barta, Bolte Chai, CMED, PVDoctor | achievements |
| 2025 | Champion in Biotech, BEAR Summit | SmartEndo | Facebook #103 |

## 7. Vacancies

Status is as of 29 October 2026 (Asia/Dhaka).

| Title | Unit | Type | Location | Posted | Deadline | Status | How to apply (as stated) | Source |
|---|---|---|---|---|---|---|---|---|
| Office Secretary / Administrative Officer | AIMScribe (HEAT sub-project), UIU | Full-time, contractual for the project | Dhaka | Not stated | 5 Nov 2026 | **Open** | "Apply Now" Google Form | https://www.uiu.ac.bd/career/office-secretary-administrative-officer-2/ |
| Accountant | AIMScribe (HEAT), UIU | Full-time, contractual | Dhaka | Not stated | 5 Nov 2026 | **Open** | Google Form | https://www.uiu.ac.bd/career/accountant-heat-project/ |
| Data Entry / Computer Operator | AIMScribe (HEAT), UIU | Full-time, contractual | Dhaka | Not stated | 5 Nov 2026 | **Open** | Google Form | https://www.uiu.ac.bd/career/data-entry-computer-operator-2/ |
| Data Collector – Field Research Intern (20) | AIMScribe (HEAT) | Two-month shift internship | Dhaka GP clinics | Not stated | 22 Oct 2026 | Closed | Google Form | uiu.ac.bd/career/data-collector-field-research-intern/ |
| Research Engineer (NLP) | AIMS Lab, IRIIC | Research engineer, 40 h/week | UIU, Dhaka | Not stated | 17 Sep 2026 | Closed | Google Form | Facebook #3 |
| Project Coordinator | IRIIC | Full-time | IRIIC, Dhaka | Not stated | 17 Sep 2026 | Closed | Google Form | Facebook #5 |
| Project Coordinator (Full Time / Intern) | IRIIC | Full-time or internship | Dhaka | Not stated | 16 May 2026 | Closed | Google Form | Facebook #7 |
| Video Content Creator | IRIIC | Full-time | IRIIC, Dhaka | 27 Jan 2026 (site) | 25 Apr 2026 | Closed | Google Form | iriic.uiu.ac.bd/video-content-creator/ |
| Social Media Content Manager | IRIIC | Full-time (implied) | IRIIC, Dhaka | Not stated | 25 Jan 2026 | Closed | tinyurl link | Facebook #87 |
| Project Coordinator | IRIIC | Not stated | IRIIC, Dhaka | Not stated | 5 Dec 2025 | Closed | tinyurl link | Facebook #89 |
| Research Engineer (Data Science); Research Engineer (AI in Power & Energy) | AIMS Lab, IRIIC | Research engineer | UIU | Not stated | 20 Sep 2025 | Closed | Google Form or iriic.uiu.ac.bd/career | Facebook #101 |
| Research Engineer (NLP), five posts | AIMS Lab, IRIIC | Research engineer | UIU | Not stated | 30 Sep 2025 | Closed | Google Form, "NLP" track | Facebook #98 |
| Research Engineers (Data Science, NLP, BCI, AI in Power & Energy) | AIMS Lab, IRIIC | Research engineer | UIU | Not stated | 1 Aug 2025 | Closed | Email aimsl@uiu.ac.bd | Facebook #104 |
| Project Coordinator Intern | IRIIC | Internship | UIU | Not stated | 1 Aug 2025 | Closed | Email aimsl@uiu.ac.bd or QR form | Facebook #105 |
| HEAT AIMScribe / SmartAMR cohorts (2025–26) | HEAT sub-projects | Contractual | UIU | Not stated | 10 Oct 2025; 28 Jan 2026 | Closed | uiu.ac.bd/career | Facebook #84, #94, #95 |

Full responsibilities and requirements are in `src/data/vacancies.ts`.
Excluded: HEAT roles for projects outside IRIIC (bamboo ferrocement homes;
"HEAT-UIU sub-project" roles with no project named). The Research Engineer
(10 May 2025) post is folded into the August 2025 cohort.

**Confidence note.** The three open AIMScribe postings on uiu.ac.bd do not
name IRIIC. They are included because AIMScribe is an IRIIC project and
IRIIC's own Facebook page advertised the same AIMScribe roles as "Career
Opportunities at IRIIC, UIU" (post #100). Flagged for the owner to confirm.

## 8. Press

Verified English-language articles (URLs opened or confirmed by search):

| Date | Outlet | Headline | URL |
|---|---|---|---|
| 13 Dec 2021 | The Business Standard | Country's first Brain Computer Interface (BCI) research lab launched at UIU | https://www.tbsnews.net/economy/corporates/countrys-first-brain-computer-interface-bci-research-lab-launched-uiu-342919 |
| Dec 2021 | The Daily Star (Shout) | UIU inaugurates first Brain Computer Interface (BCI) Research Lab in Bangladesh | https://www.thedailystar.net/shout/bulletin-board/news/uiu-inaugurates-first-brain-computer-interface-bci-research-lab-bangladesh-2916651 |
| 1 Mar 2023 | The Business Standard | UIU launches new institute for advanced tech research | https://www.tbsnews.net/economy/corporates/uiu-launches-new-institute-advanced-tech-research-592794 |
| 2023 | The Daily Star (Shout) | Institute of Research, Innovation, Incubation and Commercialization (IRIIC) inaugurated at UIU | https://www.thedailystar.net/shout/bulletin-board/news/institute-research-innovation-incubation-and-commercialization-iriic-inaugurated-uiu-3264571 |
| 18 Sep 2024 | The Business Standard | Startup innovation cohort starts for all universities at UIU | https://www.tbsnews.net/economy/corporates/startup-innovation-cohort-starts-all-universities-uiu-944181 |
| 2025 | The Business Standard | World Bank delegates visit the innovation hub at UIU | https://www.tbsnews.net/economy/corporates/world-bank-delegates-visit-innovation-hub-uiu-1067621 |
| Mar 2025 | The Business Standard | UIU became first-ever Bangladesh Hub for Harvard HSIL Hackathon 2025 | https://www.tbsnews.net/economy/corporates/uiu-became-first-ever-bangladesh-hub-harvard-hsil-hackathon-2025-1090151 |
| Apr 2025 | The Business Standard | UIU hosts Bangladesh's first Harvard Health Systems Innovation Lab Hackathon 2025 | https://www.tbsnews.net/economy/corporates/uiu-hosts-bangladeshs-first-harvard-health-systems-innovation-lab-hackathon-2025 |
| Apr 2025 | The Daily Star (Campus) | Winners honoured at IRIIC, UIU – the Dhaka hub of the Harvard HSIL Hackathon 2025 | https://www.thedailystar.net/campus/noticeboard/news/winners-honoured-iriic-uiu-the-dhaka-hub-the-harvard-hsil-hackathon-2025-3875666 |
| May 2025 | The Daily Star (Next Step) | Africa's AI movement and what Bangladesh can learn (by the Director) | https://www.thedailystar.net/next-step/news/africas-ai-movement-and-what-bangladesh-can-learn-3904761 |
| May 2025 | The Business Standard | UIU received the Telecom and ICT Award 2025 | https://www.tbsnews.net/economy/corporates/uiu-received-telecom-and-ict-award-2025-1145516 |
| May 2025 | New Age | UIU professor Mamun receives Telecom, ICT Award 2025 | https://www.newagebd.net/post/country/265266/uiu-professor-mamun-receives-telecom-ict-award-2025 |
| 20 Apr 2026 | New Age | UIU holds HSIL Hackathon 2026 | https://www.newagebd.net/post/campus-bites/297361/uiu-holds-hsil-hackathon-2026 |
| 2026 | The Daily Campus | HSIL 2026 coverage | https://english.thedailycampus.com/private-university/2377 |

The Bangla items on IRIIC's "In Media" page (Prothom Alo, Bonik Barta,
Kaler Kantho, Channel 24 and others) have titles and dates but no working
links. They are listed in the inventory notes and left off the site until
URLs are supplied.

## 9. Proposed information architecture

The material splits naturally into *work* (many items of different kinds),
*what IRIIC offers*, *people*, and *openings*. A single searchable "work"
index scales to the 26 projects and 18 programmes and events without
inventing empty category pages.

| Route | Purpose | Data |
|---|---|---|
| `/` | Hero, what IRIIC is, featured work, HSIL spotlight, partners marquee, open roles teaser, contact CTA | projects, partners, vacancies |
| `/about/` | Mission, history timeline (2014 AIMS Lab, 2021 BCI Lab, 2023 IRIIC, 2025 HSIL hub), the five centres, recognition | about, milestones, awards |
| `/about/people/` | Director, advisers, staff | team |
| `/projects/` | Search, sort, filter chips by type, year and status, `aria-live` count | projects |
| `/projects/:slug/` | Prerendered detail with gallery, partners, outcomes, links | projects |
| `/programmes/` | What IRIIC offers: incubation (LaunchPad/UIHP), research collaboration, hackathon hub, training, internships | programmes and related project slugs |
| `/careers/` | Open roles first, past-vacancies archive, calm empty state | vacancies |
| `/careers/:slug/` | Detail with deadline, apply section verbatim, JobPosting JSON-LD when open | vacancies |
| `/news/` | Press coverage and recent highlights | press, news |
| `/partners/` | MoU partners and programme partners | partners |
| `/contact/` | Contact form (EmailJS) or mailto fallback, enquiry types including careers | config |
| `/privacy/`, `/terms/`, `/cookies/` | Legal | — |
| 404 | Branded not-found | — |

Navigation: Home · About · Projects · Programmes · Careers · News · Contact.
The one gold CTA ("Work with IRIIC") goes to `/contact/`.
