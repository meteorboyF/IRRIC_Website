import { Link } from 'react-router';
import { LegalShell } from '../components/LegalShell';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Cookies', description: 'The IRIIC website sets no cookies and uses no tracking or analytics.', path: '/cookies/' });

export default function Cookies() {
	return (
		<LegalShell title="Cookies" intro="This website sets no cookies, so there is nothing to accept or decline.">
			<h2>What this site stores on your device</h2>
			<p>Nothing. The site sets no cookies and does not use local storage, session storage or any similar technology. It loads no analytics, advertising or social media scripts.</p>
			<h2>Third parties</h2>
			<p>
				If you send the contact form, your browser talks to EmailJS to deliver it. That request does not set cookies on this site. Links to other websites, such as Facebook or news outlets, take you to services with their own cookie policies.
			</p>
			<p>
				For how messages are handled, see the <Link className="link" to="/privacy/">privacy policy</Link>.
			</p>
		</LegalShell>
	);
}
