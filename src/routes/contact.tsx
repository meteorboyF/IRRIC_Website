import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Link, useSearchParams } from 'react-router';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { NAV } from '../components/nav';
import { ADDRESS_LINES, CONTACT_EMAIL, FORMS_ENABLED, OFFICE_HOURS, PHONE, SOCIALS } from '../lib/config';
import { COOLDOWN_SECONDS, LIMITS, MAILTO, cooldownRemaining, isValidEmail, isValidPhone, sendEnquiry, type FormStatus } from '../lib/forms';
import { useHydrated } from '../hooks/useHydrated';
import { seo } from '../lib/seo';

export const meta = () => seo({ title: 'Contact', description: 'Contact IRIIC at United International University about partnerships, incubation, research collaboration, media or careers.', path: '/contact/', image: 'hero/about' });

const TOPICS = [
	{ value: 'general', label: 'General enquiry' },
	{ value: 'partnership', label: 'Partnership' },
	{ value: 'incubation', label: 'Incubation and startups' },
	{ value: 'research', label: 'Research collaboration' },
	{ value: 'media', label: 'Media' },
	{ value: 'careers', label: 'Careers or expression of interest' }
] as const;
type Topic = (typeof TOPICS)[number]['value'];

type Field = 'name' | 'email' | 'phone' | 'organisation' | 'topic' | 'message';
const ORDER: Field[] = ['name', 'email', 'phone', 'organisation', 'topic', 'message'];

export default function Contact() {
	const [params] = useSearchParams();
	// The query string is read only after hydration, so the first client
	// render matches the prerendered HTML (which has no query string).
	const hydrated = useHydrated();
	const base = useId();
	const id = (field: Field) => `${base}-${field}`;
	const [values, setValues] = useState({ name: '', email: '', phone: '', organisation: '', topic: '' as Topic | '', message: '' });
	// A link such as /contact/?topic=careers preselects the enquiry type until
	// the reader picks one. Only known topic names are accepted.
	const [topicChosen, setTopicChosen] = useState(false);
	const requested = hydrated ? params.get('topic') : null;
	const requestedTopic = TOPICS.find((item) => item.value === requested)?.value ?? '';
	const topic: Topic | '' = topicChosen ? values.topic : values.topic || requestedTopic;
	const [honeypot, setHoneypot] = useState('');
	const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
	const [status, setStatus] = useState<FormStatus>('idle');
	const [notice, setNotice] = useState('');
	const startedAt = useRef(0);
	const summary = useRef<HTMLParagraphElement>(null);
	const success = useRef<HTMLDivElement>(null);

	useEffect(() => {
		startedAt.current = Date.now();
	}, []);

	useEffect(() => {
		if (status === 'success') success.current?.focus();
	}, [status]);

	function update(field: Field, value: string) {
		if (field === 'topic') setTopicChosen(true);
		setValues((current) => ({ ...current, [field]: value }));
		if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
	}

	function validate() {
		const next: Partial<Record<Field, string>> = {};
		if (values.name.trim().length < 2) next.name = 'Enter your name.';
		if (!isValidEmail(values.email)) next.email = 'Enter an email address in the format name@example.com.';
		if (!isValidPhone(values.phone)) next.phone = 'Enter a phone number of 6 to 20 digits, or leave this blank.';
		if (!topic) next.topic = 'Choose what your enquiry is about.';
		if (values.message.trim().length < 10) next.message = 'Write a message of at least 10 characters.';
		return next;
	}

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setNotice('');
		const next = validate();
		setErrors(next);
		const first = ORDER.find((field) => next[field]);
		if (first) {
			document.getElementById(id(first))?.focus();
			return;
		}
		const wait = cooldownRemaining();
		if (wait > 0) {
			setNotice(`Please wait ${wait} seconds before sending another message.`);
			summary.current?.focus();
			return;
		}

		setStatus('submitting');
		const topicLabel = TOPICS.find((item) => item.value === topic)?.label ?? 'General enquiry';
		const result = await sendEnquiry({
			subject: `Website enquiry: ${topicLabel}`,
			name: values.name,
			email: values.email,
			phone: values.phone,
			fields: [
				['Enquiry type', topicLabel],
				['Organisation', values.organisation],
				['Message', values.message]
			],
			honeypot,
			startedAt: startedAt.current
		});

		if (result === 'sent' || result === 'blocked') {
			setStatus('success');
		} else if (result === 'too-fast') {
			setStatus('idle');
			setNotice('That was very quick. Please check your message, then send it again.');
			summary.current?.focus();
		} else if (result === 'cooldown') {
			setStatus('idle');
			setNotice(`Please wait ${cooldownRemaining()} seconds before sending another message.`);
			summary.current?.focus();
		} else {
			setStatus('error');
			setNotice(`Your message could not be sent. Please try again in ${COOLDOWN_SECONDS} seconds, or email ${CONTACT_EMAIL} directly.`);
			summary.current?.focus();
		}
	}

	function reset() {
		setValues({ name: '', email: '', phone: '', organisation: '', topic: '', message: '' });
		setTopicChosen(true);
		setErrors({});
		setNotice('');
		setStatus('idle');
		startedAt.current = Date.now();
	}

	const errorCount = Object.values(errors).filter(Boolean).length;
	const describe = (field: Field, hint?: string) => [hint && `${id(field)}-hint`, errors[field] && `${id(field)}-error`].filter(Boolean).join(' ') || undefined;
	const errorText = (field: Field) =>
		errors[field] ? (
			<p id={`${id(field)}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-danger-700">
				<Icon name="close" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.25} />
				{errors[field]}
			</p>
		) : null;

	return (
		<>
			<PageHeader eyebrow="Contact" title="Talk to IRIIC" lede="Partnerships, incubation, research collaboration, media and careers. Write to us and the right person will reply by email." />

			<section className="bg-paper py-16 lg:py-24">
				<div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
					<Reveal>
						<h2 className="font-display text-2xl font-bold">Other ways to reach us</h2>
						<ul className="mt-6 grid gap-4">
							<li className="card p-5">
								<p className="flex items-center gap-2 text-sm font-semibold text-ink-700">
									<Icon name="mail" className="h-4 w-4" />
									Email
								</p>
								<a href={`mailto:${CONTACT_EMAIL}`} className="link mt-1 inline-block font-display text-lg">
									{CONTACT_EMAIL}
								</a>
							</li>
							<li className="card p-5">
								<p className="flex items-center gap-2 text-sm font-semibold text-ink-700">
									<Icon name="phone" className="h-4 w-4" />
									Phone
								</p>
								<a href={PHONE.href} className="link mt-1 inline-block font-display text-lg">
									{PHONE.display}
								</a>
								<p className="mt-1 text-sm text-ink-600">Office hours {OFFICE_HOURS}</p>
							</li>
							<li className="card p-5">
								<p className="flex items-center gap-2 text-sm font-semibold text-ink-700">
									<Icon name="map-pin" className="h-4 w-4" />
									Visit
								</p>
								<address className="mt-1 leading-relaxed text-ink-800 not-italic">
									{ADDRESS_LINES.map((line) => (
										<span key={line} className="block">
											{line}
										</span>
									))}
								</address>
							</li>
							<li className="card p-5">
								<p className="flex items-center gap-2 text-sm font-semibold text-ink-700">
									<Icon name="facebook" className="h-4 w-4" />
									Facebook
								</p>
								<a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="link mt-1 inline-block">
									Institute of Research, Innovation, Incubation and Commercialization, UIU<span className="sr-only"> (opens in a new tab)</span>
								</a>
								<p className="mt-1 text-sm text-ink-600">Events and vacancies are announced here first.</p>
							</li>
						</ul>
						<p className="mt-6 text-sm leading-relaxed text-ink-600">
							Looking for a job? Open roles and how to apply are on the <Link to={NAV.careers.to} className="link">careers page</Link>. This form does not accept CVs.
						</p>
					</Reveal>

					<Reveal delay={1}>
						{!FORMS_ENABLED ? (
							<div className="card p-8">
								<p className="eyebrow">Email the team</p>
								<h2 className="mt-2 font-display text-2xl font-bold">Write to us directly</h2>
								<p className="mt-3 leading-relaxed text-ink-700">Tell us who you are, your organisation, and what you would like to discuss. This opens your own email app; nothing is sent from this website.</p>
								<a href={MAILTO} className="btn btn-primary mt-6">
									<Icon name="mail" className="h-4 w-4" />
									Email {CONTACT_EMAIL}
								</a>
							</div>
						) : status === 'success' ? (
							<div ref={success} tabIndex={-1} role="status" className="card border-success-700/30 bg-success-50 p-8 outline-none">
								<h2 className="font-display text-2xl font-bold text-ink-900">Message sent</h2>
								<p className="mt-2 leading-relaxed text-ink-700">Thank you. Your message has reached the IRIIC inbox, and we will reply by email.</p>
								<button type="button" className="btn btn-ghost btn-sm mt-6" onClick={reset}>
									Send another message
								</button>
							</div>
						) : (
							<form className="card p-6 sm:p-8" onSubmit={onSubmit} noValidate aria-labelledby={`${base}-title`}>
								<h2 id={`${base}-title`} className="font-display text-2xl font-bold">
									Send a message
								</h2>
								<p className="mt-1.5 text-sm text-ink-600">All fields are required unless marked optional.</p>

								<p ref={summary} tabIndex={-1} role="alert" className={`outline-none ${errorCount > 0 || notice ? 'mt-5 rounded-lg border border-danger-700/30 bg-danger-50 p-4 text-sm font-medium text-danger-700' : 'sr-only'}`}>
									{errorCount > 0 ? `There ${errorCount === 1 ? 'is 1 problem' : `are ${errorCount} problems`} with the form. Each is described next to its field.` : notice}
								</p>

								<div className="mt-6 grid gap-5 sm:grid-cols-2">
									<div>
										<label htmlFor={id('name')} className="mb-1.5 block text-sm font-semibold">
											Name
										</label>
										<input id={id('name')} name="name" className="field" type="text" autoComplete="name" maxLength={LIMITS.name} value={values.name} onChange={(event) => update('name', event.target.value)} aria-invalid={errors.name ? true : undefined} aria-describedby={describe('name')} required />
										{errorText('name')}
									</div>
									<div>
										<label htmlFor={id('email')} className="mb-1.5 block text-sm font-semibold">
											Email
										</label>
										<input id={id('email')} name="email" className="field" type="email" autoComplete="email" inputMode="email" maxLength={LIMITS.email} value={values.email} onChange={(event) => update('email', event.target.value)} aria-invalid={errors.email ? true : undefined} aria-describedby={describe('email')} required />
										{errorText('email')}
									</div>
									<div>
										<label htmlFor={id('phone')} className="mb-1.5 block text-sm font-semibold">
											Phone <span className="font-normal text-ink-600">(optional)</span>
										</label>
										<input id={id('phone')} name="phone" className="field" type="tel" autoComplete="tel" inputMode="tel" maxLength={LIMITS.phone} value={values.phone} onChange={(event) => update('phone', event.target.value)} aria-invalid={errors.phone ? true : undefined} aria-describedby={describe('phone')} />
										{errorText('phone')}
									</div>
									<div>
										<label htmlFor={id('organisation')} className="mb-1.5 block text-sm font-semibold">
											Organisation <span className="font-normal text-ink-600">(optional)</span>
										</label>
										<input id={id('organisation')} name="organization" className="field" type="text" autoComplete="organization" maxLength={LIMITS.organisation} value={values.organisation} onChange={(event) => update('organisation', event.target.value)} />
									</div>
								</div>

								<div className="mt-5">
									<label htmlFor={id('topic')} className="mb-1.5 block text-sm font-semibold">
										What is it about?
									</label>
									<select id={id('topic')} name="topic" className="field" value={topic} onChange={(event) => update('topic', event.target.value)} aria-invalid={errors.topic ? true : undefined} aria-describedby={describe('topic', 'hint')} required>
										<option value="">Choose one</option>
										{TOPICS.map((topic) => (
											<option key={topic.value} value={topic.value}>
												{topic.label}
											</option>
										))}
									</select>
									<p id={`${id('topic')}-hint`} className="mt-1.5 text-sm text-ink-600">
										{topic === 'careers' ? 'Tell us your field and interests. Please do not include a CV or sensitive personal details.' : 'This helps us pass your message to the right person.'}
									</p>
									{errorText('topic')}
								</div>

								<div className="mt-5">
									<label htmlFor={id('message')} className="mb-1.5 block text-sm font-semibold">
										Message
									</label>
									<textarea id={id('message')} name="message" className="field min-h-40" maxLength={LIMITS.message} value={values.message} onChange={(event) => update('message', event.target.value)} aria-invalid={errors.message ? true : undefined} aria-describedby={describe('message', 'hint')} required />
									<p id={`${id('message')}-hint`} className="mt-1.5 text-right text-xs text-ink-600">
										{values.message.length} of {LIMITS.message} characters
									</p>
									{errorText('message')}
								</div>

								{/* Honeypot: hidden from people and assistive tech; bots fill it. Named to avoid autofill. */}
								<div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
									<label htmlFor={id('name') + '-hp'}>Leave this field empty</label>
									<input id={id('name') + '-hp'} type="text" name="iriic_fax_extension" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
								</div>

								<button type="submit" className="btn btn-primary mt-6 w-full" disabled={status === 'submitting'}>
									{status === 'submitting' ? 'Sending…' : 'Send message'}
								</button>
								<p className="mt-4 text-xs leading-relaxed text-ink-600">
									We use what you send only to reply to you. It is delivered by EmailJS to {CONTACT_EMAIL}. See the{' '}
									<Link to={NAV.privacy.to} className="link">
										privacy policy
									</Link>
									.
								</p>
							</form>
						)}
					</Reveal>
				</div>
			</section>
		</>
	);
}
