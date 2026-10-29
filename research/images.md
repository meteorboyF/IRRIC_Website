# Image provenance

Every image on the site comes from IRIIC's own website, iriic.uiu.ac.bd
(its WordPress media library), downloaded with the owner's permission on
29 October 2026. Nothing is hotlinked: each file was converted to WebP and
is served from this site. Partner logos are the versions IRIIC itself shows
on its project pages.

The conversion keeps native aspect ratios, never upscales, and writes a
`-sm` variant for `srcset`:

| Kind | Full size | `-sm` | Notes |
|---|---|---|---|
| hero | 1920 px wide (max) | 960 px | page intro photos |
| cover | 1600 px (max) | 800 px | project covers |
| gallery | 1200 px (max) | 600 px | project galleries |
| portrait | 720 px (max) | 360 px | team photos |
| logo | trimmed, 240 px tall (max) | none | transparent where the source was |

Many research-project sources are app screenshots between 100 and 650 px
wide; they are shown whole on a tinted panel (`fit: 'contain'`) rather
than enlarged.

Alt text lives with each image in `src/data/*.ts` and was written after
looking at every file.

## Held back for a consent decision

These IRIIC research photos show children taking part in studies, with no
caption about consent. They were downloaded but are **not** published:

- `2025/01/Access-Teledentistry-img-02.png`: a child having a dental check with a phone camera.
- `2025/01/Focusmind-Image-04-1.png`: two children wearing EEG headsets.
- `2025/01/Concentrate-Today-image-02-1.png`: children wearing EEG caps at a demonstration.
- `2025/01/Bolte-Chai-Interface-01-2.png`: the Bolte Chai splash screen, which shows a child’s face.
- `2025/01/Concentrate-Today-image-03-1.png`: exhibition photo with people at a UIU booth; held back with the set above.

## Missing logo versions

- No monochrome or inverse IRIIC logo was found; the full-colour badge is used on light and dark backgrounds.
- `2025/03/SmartEndo-logo-1.png` and `2025/02/cmed-logo.png` return 404 on the current site.
- Several project partner logos were unlabelled emblems that could not be identified with confidence; they are omitted (see `research/inventory.md`).

## Files

Source of every published image (logical name → original URL):

| Published name | Kind | Source |
|---|---|---|
| `brand/iriic-logo` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2024/11/IRIIC-Logo-PNG.png |
| `brand/uiu-logo-white` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/12/UIU-White.png |
| `hero/home` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/05.jpg |
| `hero/about` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-04.jpg |
| `hero/projects` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/03.jpg |
| `hero/programmes` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-06.jpg |
| `hero/careers` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/07.jpg |
| `hero/news` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-03.jpg |
| `hero/partners` | hero | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-03.jpg |
| `projects/cmed/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-Interface-04.png |
| `projects/cmed/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-Interface-01.png |
| `projects/cmed/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-Interface-02.png |
| `projects/cmed/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-Interface-03.png |
| `projects/cmed/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-Interface-05-1.png |
| `projects/cmed/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-Interface-07.png |
| `projects/cmed/6` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/CMED-Diagram-01.png |
| `projects/mindwave-analytics/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Market-Brain-Still-2.jpg |
| `projects/mindwave-analytics/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/57a10683-4432-4f31-9bb8-59283223a4a0.jpg |
| `projects/mindwave-analytics/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Market-Brain-Diagram-1.png |
| `projects/ai-reception/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Reception-image-01.png |
| `projects/ai-reception/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Reception-diagram-01.png |
| `projects/ai-reception/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Reception-diagram-02.png |
| `projects/susastho-ai/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Screenshot-2025-01-24-214308.jpg |
| `projects/susastho-ai/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Susastho.AI-App-Interface-01.jpg |
| `projects/susastho-ai/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Susastho.AI-App-Interface-02.jpg |
| `projects/susastho-ai/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Susastho.AI-App-Interface-03.jpg |
| `projects/susastho-ai/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Susastho.AI-App-Interface-05.jpg |
| `projects/susastho-ai/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Susastho.AI-App-Interface-06.jpg |
| `projects/susastho-ai/6` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Susastho.AI-App-Interface-07.jpg |
| `projects/virtual-hospital/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Hospital-image-01.png |
| `projects/virtual-hospital/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Hospital-interface-01.png |
| `projects/virtual-hospital/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Hospital-interface-02.png |
| `projects/virtual-hospital/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Hospital-interface-03.png |
| `projects/virtual-hospital/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Hospital-diagram-01.png |
| `projects/icrp/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/iCRP-image-01-1.png |
| `projects/icrp/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/iCRP-Interface-01.png |
| `projects/icrp/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/iCRP-Interface-02.png |
| `projects/icrp/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/iCRP-diagram-01.png |
| `projects/cog-i/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Cog-i-interface-01.png |
| `projects/cog-i/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Cog-i-interface-02.png |
| `projects/cog-i/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Cog-i-interface-03.png |
| `projects/cog-i/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Cog-i-interface-04.png |
| `projects/cog-i/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Cog-i-diagram.png |
| `projects/ckd/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CKD-image-01.png |
| `projects/ckd/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CKD-Interface-01.png |
| `projects/ckd/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CKD-Interface-02.png |
| `projects/ckd/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CKD-diagram-01.png |
| `projects/symptom-checker/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/White-and-Yellow-Mobile-App-Flyer.png |
| `projects/symptom-checker/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/White-and-Yellow-Mobile-App-Flyer-1.png |
| `projects/aimscribe/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AIMScribe-picture-01-2.png |
| `projects/aimscribe/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AIMScribe-diagram-01.png |
| `projects/aimscribe/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AIMScribe-diagram-02.png |
| `projects/prescription-audit-system/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Based-Prescription-Audit-System-image-01-1.png |
| `projects/prescription-audit-system/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Based-Prescription-Audit-System-image-02.png |
| `projects/prescription-audit-system/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Based-Prescription-Audit-System-diagram.png |
| `projects/access-teledentistry/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Access-Teledentistry-img-01-1.png |
| `projects/access-teledentistry/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Access-Teledentistry-diagram-01.png |
| `projects/access-teledentistry/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Access-Teledentistry-diagram-02.png |
| `projects/bolte-chai/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Bolte-Chai-Interface-02-1.png |
| `projects/bolte-chai/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Bolte-Chai-Interface-03-1.png |
| `projects/bolte-chai/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Bolte-Chai-Interface-04-1.png |
| `projects/bolte-chai/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Bolte-Chai-Interface-05-1.png |
| `projects/focus-mind/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Image-05-1.png |
| `projects/focus-mind/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Image-02-1.png |
| `projects/focus-mind/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Image-03-2.png |
| `projects/focus-mind/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Picture-01.png |
| `projects/focus-mind/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Diagram-01.png |
| `projects/concentrate-today/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Concentrate-Today-image-01.png |
| `projects/concentrate-today/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Concentrate-Today-diagram-01.png |
| `projects/concentrate-today/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Concentrate-Today-diagram-02.png |
| `projects/pvdoctor/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/PVDoctor-image-01.png |
| `projects/pvdoctor/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/PVDoctor-diagram.png |
| `projects/deep-depression/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Deep-Depression-image-02.png |
| `projects/deep-depression/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Deep-Depression-image-01.png |
| `projects/deep-depression/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Deep-Depression-diagram-01.png |
| `projects/autism-barta/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Autism-Barta-Interface-01.png |
| `projects/autism-barta/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Autism-Barta-Interface-02.png |
| `projects/autism-barta/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Autism-Barta-Interface-03.png |
| `projects/autism-barta/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Autism-Barta-Interface-05-1.png |
| `projects/autism-barta/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Autism-Barta-Interface-06-1.png |
| `projects/autism-barta/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Autism-Barta-Diagram.png |
| `projects/smartendo/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Interface-01.jpg |
| `projects/smartendo/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Interface-02.jpg |
| `projects/smartendo/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Interface-03.jpg |
| `projects/smartendo/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Interface-04.jpg |
| `projects/smartendo/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Interface-05.jpg |
| `projects/smartendo/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Interface-06.jpg |
| `projects/smartendo/6` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/SmartEndo-Diagram-01.png |
| `projects/i-power/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/i-Power-still-01-1.png |
| `projects/i-power/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/i-Power-still-03.png |
| `projects/i-power/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/i-Power-still-04.png |
| `projects/i-power/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/i-Power-still-05.png |
| `projects/whats-next/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/What_s-Next-interface-04-3.png |
| `projects/whats-next/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/What_s-Next-interface-01-1.png |
| `projects/whats-next/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/What_s-Next-interface-02-1.png |
| `projects/whats-next/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/What_s-Next-interface-05-3.png |
| `projects/whats-next/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/What_s-Next-diagram-01-2.png |
| `projects/canaware/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CanAware-App-Interface-01.png |
| `projects/canaware/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CanAware-App-Interface-02.png |
| `projects/canaware/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CanAware-App-Interface-03.png |
| `projects/virtual-eye-doc/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Eye-Doc-Interface-07-2.png |
| `projects/virtual-eye-doc/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Eye-Doc-Interface-01-2.png |
| `projects/virtual-eye-doc/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Eye-Doc-Interface-02-2.png |
| `projects/virtual-eye-doc/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Eye-Doc-Interface-03-2.png |
| `projects/virtual-eye-doc/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Eye-Doc-Interface-04-2.png |
| `projects/virtual-eye-doc/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Virtual-Eye-Doc-Interface-08-2.png |
| `projects/harvard-hsil-hackathon-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/01.jpg |
| `projects/harvard-hsil-hackathon-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/02.jpg |
| `projects/harvard-hsil-hackathon-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/04.jpg |
| `projects/harvard-hsil-hackathon-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/06.jpg |
| `projects/harvard-hsil-hackathon-2025/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/08.jpg |
| `projects/harvard-hsil-hackathon-2025/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/10.jpg |
| `projects/harvard-hsil-hackathon-2025/6` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/03.jpg |
| `projects/harvard-hsil-hackathon-2025/7` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/07.jpg |
| `projects/harvard-hsil-hackathon-2025/8` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/05.jpg |
| `projects/harvard-hsil-hackathon-2026/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/12/HSIL-Hackathon-7th-Edition-7.png |
| `projects/launchpad-cycle-1/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-02.jpg |
| `projects/launchpad-cycle-1/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-01.jpg |
| `projects/launchpad-cycle-1/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-03.jpg |
| `projects/launchpad-cycle-1/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-04.jpg |
| `projects/launchpad-cycle-1/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-05.jpg |
| `projects/launchpad-cycle-1/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Final-Pitch-Day-06.jpg |
| `projects/innovation-conclave-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/2025-Innovation-Conclave-at-IRIIC.jpg |
| `projects/innovation-conclave-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/2025-Innovation-Conclave-at-IRIIC02.jpg |
| `projects/innovation-conclave-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/2025-Innovation-Conclave-at-IRIIC03.jpg |
| `projects/innovation-conclave-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/2025-Innovation-Conclave-at-IRIIC04.jpg |
| `projects/world-bank-delegation-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-01.jpg |
| `projects/world-bank-delegation-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-02.jpg |
| `projects/world-bank-delegation-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-03.jpg |
| `projects/world-bank-delegation-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-04.jpg |
| `projects/world-bank-delegation-2025/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-05.jpg |
| `projects/world-bank-delegation-2025/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-06.jpg |
| `projects/world-bank-delegation-2025/6` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/World-Bank-Delegation-Visits-IRIIC-at-UIU-07.jpg |
| `projects/world-ip-day-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-05.jpg |
| `projects/world-ip-day-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-01.jpg |
| `projects/world-ip-day-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-02.jpg |
| `projects/world-ip-day-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-03.jpg |
| `projects/world-ip-day-2025/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-04.jpg |
| `projects/world-ip-day-2025/5` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/IP-06.jpg |
| `projects/endometriosis-ai-workshop-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/06/Empowering-Womens-Health-with-AI-02.jpg |
| `projects/endometriosis-ai-workshop-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/06/Empowering-Women-Through-AI-03.png |
| `projects/endometriosis-ai-workshop-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/06/Empowering-Women-Through-AI-04.png |
| `projects/endometriosis-ai-workshop-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/06/Empowering-Women-Through-AI-05.png |
| `projects/endometriosis-ai-workshop-2025/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/06/Empowering-Womens-Health-with-AI-06.png |
| `projects/ai-essentials-capital-markets-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/10/LankaBangla-AI-Essentials-For-Capital-Market-Professionals-01.png |
| `projects/ai-essentials-capital-markets-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/10/LankaBangla-AI-Essentials-For-Capital-Market-Professionals-02.png |
| `projects/ai-essentials-capital-markets-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/10/LankaBangla-AI-Essentials-For-Capital-Market-Professionals-03.png |
| `projects/ai-essentials-capital-markets-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/10/LankaBangla-AI-Essentials-For-Capital-Market-Professionals-04.png |
| `projects/ai-essentials-capital-markets-2025/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/10/LankaBangla-05.jpg |
| `projects/research-innovation-week-2024/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/468621633_957357719779481_6918554634602974713_n.jpg |
| `projects/research-innovation-week-2024/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/468620980_957357813112805_7610622138535380725_n.jpg |
| `projects/research-innovation-week-2024/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/468813315_957357689779484_4845881118889073491_n.jpg |
| `projects/innovation-talks-satellite-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Bangladeshi-Satellite-Industry-The-present-and-the-future.jpeg |
| `projects/strategy-dialogue-ai-life-sciences-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/04/Strategy-Dialogue-on-Unlocking-AIs-Potential-in-Life-Sciences-02.png |
| `projects/aston-university-visit-2025/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Prof.-Osama-Khan-Visits-IRIIC-at-UIU01.jpg |
| `projects/aston-university-visit-2025/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Prof.-Osama-Khan-Visits-IRIIC-at-UIU02.jpg |
| `projects/aston-university-visit-2025/2` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Prof.-Osama-Khan-Visits-IRIIC-at-UIU03.jpg |
| `projects/aston-university-visit-2025/3` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Prof.-Osama-Khan-Visits-IRIIC-at-UIU04.jpg |
| `projects/aston-university-visit-2025/4` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Prof.-Osama-Khan-Visits-IRIIC-at-UIU05.jpg |
| `projects/dhaka-university-vc-visit/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Prof-Dr-Niaz-Ahmed-Khan-Visits-IRIIC-and-AIMS-Lab-02.png |
| `projects/dhaka-university-vc-visit/1` | gallery | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Prof-Dr-Niaz-Ahmed-Khan-Visits-IRIIC-and-AIMS-Lab-03.png |
| `projects/water-resources-iot-workshop/cover` | cover | https://iriic.uiu.ac.bd/wp-content/uploads/2025/02/Delegation-from-the-Ministry-of-Water-Resources-visits-UIU-2.png |
| `people/khondaker-a-mamun` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Director-Mamun.png |
| `people/abul-kashem-mia` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/VC-Kashem.png |
| `people/m-rezwan-khan` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Advisor-Rizwan.png |
| `people/mohammad-nurul-huda` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Advisor-Huda.png |
| `people/sumaiya-mutiatur-rasul` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Administration-MutiaturSumaiya.png |
| `people/nabila-binte-ayub` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Administration-Nabila.png |
| `people/sadik-e-tawheed` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Administration-Sadik.png |
| `people/marzia-zaman` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2026/02/Marzia-Zaman.png |
| `people/israt-jahan` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Dr.-Israt-Jahan.png |
| `people/farhan-ishtiaque` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Farhan-Ishtiaque.png |
| `people/ferdous-wahid-anik` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Ferdous-Wahid.png |
| `people/jobayer-rahman` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Md.-Jobayer-Rahman.png |
| `people/abdullah-al-mashud` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Md-Abdullah-Al-Mashud.png |
| `people/sakib-zaman` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Sakib-zaman.png |
| `people/shamim-ahamed` | portrait | https://iriic.uiu.ac.bd/wp-content/uploads/2025/03/Team-Shamim-Ahamed.png |
| `partners/ict-division` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Cog-i-partner-04.png |
| `partners/bhtpa` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Deep-Depression-partner-07.png |
| `partners/a2i` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Autism-Barta-partner-03.png |
| `partners/harvard-hsil` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2026/01/HSPH_HSIL_logo_Vertical_1_RGB.png |
| `partners/cmed-health` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AIMScribe-partner-01.png |
| `partners/university-of-toronto` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Autism-Barta-partner-06.png |
| `partners/imperial-college-london` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Partner-04.png |
| `partners/rutgers` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CKD-partner-05.png |
| `partners/penn-state` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Market-Brain-Partner-02-1.png |
| `partners/deakin-university` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AIMScribe-partner-06.png |
| `partners/north-south-university` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Reception-partner-04.png |
| `partners/ulab` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/AI-Reception-partner-03.png |
| `partners/iub` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Deep-Depression-partner-03.png |
| `partners/iba-du` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Market-Brain-Partner-05-1.png |
| `partners/nimh` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Deep-Depression-partner-05.png |
| `partners/holland-bloorview` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Autism-Barta-partner-07.png |
| `partners/tauri-foundation` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Bolte-Chai-Partner-02.png |
| `partners/pksf` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CMED-partner-06.png |
| `partners/community-oncology-centre` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/CanAware-Partner-04.png |
| `partners/openbci` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Concentrate-Today-logo-partner-04.png |
| `partners/brainco` | logo | https://iriic.uiu.ac.bd/wp-content/uploads/2025/01/Focusmind-Partner-03.png |
