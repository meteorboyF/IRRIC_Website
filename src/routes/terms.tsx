import { Link } from 'react-router';
import { LegalShell } from '../components/LegalShell';
import { CONTACT_EMAIL } from '../lib/config';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Terms', description: 'Terms of use for the IRIIC website, including content accuracy, external links and intellectual property.', path: '/terms/' });

export default function Terms() {
	return (
		<LegalShell title="Terms of use" intro="By using this website you agree to these terms. They are short and meant to be read.">
			<h2>About the content</h2>
			<p>
				The site describes the work of the Institute of Research, Innovation, Incubation and Commercialization (IRIIC) at United International University. It is general information, not medical, legal or investment advice. The research tools described here are not a substitute for a clinician.
			</p>
			<h2>Vacancies</h2>
			<p>Vacancy pages summarise roles announced by IRIIC and UIU. The original announcement and the employer’s own process take precedence. A role shown as open closes at the end of its deadline day, Dhaka time.</p>
			<h2>Intellectual property</h2>
			<p>Text, photographs and logos on this site belong to IRIIC, United International University or the organisations shown, and are used here to describe IRIIC’s work. Please ask before reusing them.</p>
			<h2>External links</h2>
			<p>Links to other websites are provided for convenience. We are not responsible for their content or their privacy practices.</p>
			<h2>Using the contact form</h2>
			<p>
				Please use the form for genuine enquiries. Automated or bulk submissions are blocked. How we handle what you send is set out in the <Link className="link" to="/privacy/">privacy policy</Link>.
			</p>
			<h2>Contact</h2>
			<p>
				Questions about these terms: <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
			</p>
		</LegalShell>
	);
}
