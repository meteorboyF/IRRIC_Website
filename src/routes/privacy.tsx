import { Link } from 'react-router';
import { LegalShell } from '../components/LegalShell';
import { CONTACT_EMAIL } from '../lib/config';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Privacy', description: 'How the IRIIC website handles personal data: contact form messages sent through EmailJS, hosting logs, careers enquiries, retention and deletion.', path: '/privacy/' });

export default function Privacy() {
	return (
		<LegalShell title="Privacy policy" intro="This website collects as little as it can. There are no analytics, no advertising and no tracking. This page explains the little that is collected and what happens to it.">
			<h2>Who is responsible</h2>
			<p>
				This website is run by the Institute of Research, Innovation, Incubation and Commercialization (IRIIC), United International University, United City, Madani Avenue, Badda, Dhaka 1212, Bangladesh. For any privacy question or request, email <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
			</p>

			<h2>What we collect</h2>
			<h3>When you browse</h3>
			<p>
				The site is a set of static pages hosted on GitHub Pages. Like most web hosts, GitHub records technical access logs, which include your IP address, the page requested, the time and your browser’s user agent, to run and secure its service. IRIIC does not receive or use these logs. GitHub explains its handling in the{' '}
				<a className="link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
					GitHub General Privacy Statement<span className="sr-only"> (opens in a new tab)</span>
				</a>
				.
			</p>
			<p>We do not use analytics, advertising, social media widgets, embedded videos or any other third-party script. Fonts and images are served from this site itself.</p>

			<h3>When you use the contact form</h3>
			<p>The contact form asks for your name, email address and message, and optionally your phone number, organisation and the type of enquiry. We use these only to reply to you and to handle what you asked about.</p>
			<p>
				When you press send, your browser passes the form to{' '}
				<a className="link" href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
					EmailJS<span className="sr-only"> (opens in a new tab)</span>
				</a>
				, a service that delivers it as an email to {CONTACT_EMAIL}. EmailJS acts as our processor for that delivery. The email then sits in IRIIC’s Gmail inbox, provided by Google. Nothing you type is stored by this website or placed in a web address.
			</p>
			<p>If the form is not available, the page offers an email link instead; your message then goes from your own email service to ours in the normal way.</p>

			<h3>Careers enquiries</h3>
			<p>
				This site does not accept job applications or CVs. Each vacancy explains how to apply through the route its original announcement gives, such as an application form or an email address; those routes are run by IRIIC or UIU, and the information you give there is handled for recruitment only. If you choose “Careers or expression of interest” on the contact form, please do not include a CV or sensitive personal information: tell us your interests and how to reach you, and we will reply with the right route.
			</p>

			<h2>How long we keep it</h2>
			<ul>
				<li>Contact messages: kept in the IRIIC inbox for as long as needed to deal with your enquiry, and deleted within 24 months of the last exchange unless an ongoing collaboration needs them.</li>
				<li>Careers enquiries made through the contact form: deleted within 12 months.</li>
				<li>EmailJS: by default keeps a short history of sent messages for delivery and troubleshooting, under its own retention terms.</li>
				<li>Hosting logs: kept by GitHub under its own policy.</li>
			</ul>

			<h2>Your rights and how to ask for deletion</h2>
			<p>
				You can ask to see, correct or delete what you have sent us, or ask us to stop using it. Email <a className="link" href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}>{CONTACT_EMAIL}</a> with the subject “Privacy request” and the email address you used. We will confirm and act within 30 days.
			</p>

			<h2>Cookies</h2>
			<p>
				The site sets no cookies and uses no local storage. See the <Link className="link" to="/cookies/">cookies page</Link>.
			</p>

			<h2>Children</h2>
			<p>The site is not aimed at children, and we do not knowingly collect information from anyone under 18 through the contact form.</p>

			<h2>Changes</h2>
			<p>If this policy changes, the date at the top of the page changes with it.</p>
		</LegalShell>
	);
}
