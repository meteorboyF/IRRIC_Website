import { partnerKinds, partners } from '../data/partners';
import { CtaBand } from '../components/CtaBand';
import { PageIntro } from '../components/PageIntro';
import { PartnerLogo } from '../components/PartnerLogo';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SmartLink } from '../components/SmartLink';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Partners', description: 'Organisations IRIIC works with: signed agreements, programme partners, funders and research collaborators in Bangladesh and abroad.', path: '/partners/', image: 'hero/partners' });

const TITLES: Record<(typeof partnerKinds)[number], string> = {
	'Agreement partner': 'Agreement partners',
	'Programme partner': 'Programme partners',
	'Funder or government': 'Funders and government',
	'Research collaborator': 'Research collaborators'
};

const LEDES: Record<(typeof partnerKinds)[number], string> = {
	'Agreement partner': 'Organisations that have signed a memorandum of understanding with IRIIC.',
	'Programme partner': 'Partners in programmes IRIIC hosts or runs.',
	'Funder or government': 'Government bodies that fund or support IRIIC’s work.',
	'Research collaborator': 'Institutions shown as partners on IRIIC’s project pages.'
};

export default function Partners() {
	return (
		<>
			<PageIntro eyebrow="Partners" title="Who IRIIC works with" lede="Universities, hospitals, companies and government bodies, as documented in IRIIC’s agreements, programmes and project records." photo="hero/partners" photoAlt="Group photo of a World Bank delegation with UIU and IRIIC hosts" />
			{partnerKinds.map((kind, index) => {
				const group = partners.filter((partner) => partner.kind === kind);
				if (group.length === 0) return null;
				return (
					<section key={kind} className={`${index % 2 ? 'bg-white' : 'bg-paper'} py-20 lg:py-24`} aria-labelledby={`kind-${index}`}>
						<div className="container-page">
							<SectionHead id={`kind-${index}`} title={TITLES[kind]} lede={LEDES[kind]} />
							<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
								{group.map((partner, i) => (
									<Reveal as="li" key={partner.name} delay={(i % 3) as 0 | 1 | 2} className="card flex flex-col gap-4 p-6">
										{partner.logo && <PartnerLogo partner={partner} compact />}
										<div>
											<h3 className="font-display text-lg leading-snug font-bold">{partner.name}</h3>
											<p className="mt-1.5 text-sm leading-relaxed text-ink-600">{partner.note}</p>
											{partner.url && (
												<SmartLink href={partner.url} className="link mt-3 inline-block text-sm">
													Website
												</SmartLink>
											)}
										</div>
									</Reveal>
								))}
							</ul>
						</div>
					</section>
				);
			})}
			<CtaBand title="Partner with IRIIC" text="Research collaborations, sponsored hackathons, training programmes and agreements start with a conversation." />
		</>
	);
}
