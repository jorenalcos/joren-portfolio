
import { useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

import { gsap } from '../../lib/gsap'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const CONTACT_EMAIL = 'act.jalcos@gmail.com'
const LINKEDIN_URL = 'www.linkedin.com/in/joren-alcos-b49198217'
const GITHUB_URL = 'https://github.com/jorenalcos'

// Keep these fields aligned with the inquiry form.
interface ContactFormData {
  name: string
  email: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  projectType: 'Full-stack development',
  budget: '',
  timeline: '',
  message: '',
}

const projectTypes = [
  'Full-stack development',
  'Frontend development',
  'Backend development & APIs',
  'E-commerce development',
  'Website development',
  'System integration',
  'Technical consultation',
  'Other',
]

const budgetOptions = [
  'Below $500',
  '$500 – $1,500',
  '$1,500 – $5,000',
  '$5,000+',
  'Not sure yet',
]

const timelineOptions = [
  'As soon as possible',
  'Within 2–4 weeks',
  'Within 1–3 months',
  'Flexible',
]

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [form, setForm] =
    useState<ContactFormData>(initialFormData)
  const [error, setError] = useState('')

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const context = gsap.context(() => {
      gsap.from('.contact-heading', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.contact-content', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  const updateField = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }))

    if (error) setError('')
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    setError('')

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setError(
        'Please complete your name, email address, and project description.',
      )
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    const subject = `Project Inquiry — ${name}`

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${form.projectType}`,
      `Estimated budget: ${form.budget || 'Not specified'}`,
      `Timeline: ${form.timeline || 'Not specified'}`,
      '',
      'Project details:',
      message,
    ].join('\n')

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  const inputClassName =
    'mt-3 w-full border-0 border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/60'

  const labelClassName =
    'text-[10px] font-medium uppercase tracking-[0.22em] text-white/45'

  return (
    <Section
      id="contact"
      className="border-b border-white/5 py-24 md:py-36"
    >
      <Container>
        <div ref={sectionRef}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
            {/* Contact introduction */}
            <div className="contact-heading">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                05 — Contact
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">
                Let&apos;s build
                <br />
                <span className="text-white/35">
                  something.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                Have a project in mind or looking for a
                software engineer? Let&apos;s discuss how I
                can help turn your requirements into a
                reliable, scalable digital product.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-sm transition-colors hover:border-white"
              >
                <Mail size={16} />
                <span>Let&apos;s talk about your project</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* Professional contact details */}
              <div className="contact-content mt-12 space-y-5">
                <p className={labelClassName}>
                  Contact details
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-4 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <Mail size={17} className="shrink-0" />
                  <span className="break-all">
                    {CONTACT_EMAIL}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="tel:+639567626930"
                  className="group flex items-center gap-4 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <Phone size={17} className="shrink-0" />
                  <span>+63 956 762 6930</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="https://wa.me/639567626930"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <Phone size={17} className="shrink-0" />
                  <span>Message me on WhatsApp</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="flex items-center gap-4 text-sm text-white/65">
                  <MapPin size={17} className="shrink-0" />
                  <span>Carcar City, Cebu, Philippines</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/65 transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:text-white"
                  >
                    <BriefcaseBusiness size={15} />
                    LinkedIn
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/65 transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:text-white"
                  >
                    <GitBranch size={15} />
                    GitHub
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              <div className="contact-content mt-12 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness
                    size={18}
                    className="mt-1 shrink-0 text-white/50"
                  />
                  <div>
                    <p className="text-sm text-white">
                      Available for opportunities
                    </p>
                    <p className="mt-2 max-w-sm text-xs leading-6 text-white/40">
                      Full-stack development, business
                      applications, API integrations, and
                      long-term engineering partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project inquiry form */}
            <form
              className="contact-content space-y-7"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className={labelClassName}
                >
                  Your name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(event) =>
                    updateField('name', event.target.value)
                  }
                  placeholder="John Doe"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={labelClassName}
                >
                  Email address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(event) =>
                    updateField('email', event.target.value)
                  }
                  placeholder="john@example.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-project-type"
                  className={labelClassName}
                >
                  Project type *
                </label>

                <select
                  id="contact-project-type"
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={(event) =>
                    updateField(
                      'projectType',
                      event.target.value,
                    )
                  }
                  className={`${inputClassName} cursor-pointer`}
                >
                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#111111] text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-budget"
                    className={labelClassName}
                  >
                    Estimated budget
                  </label>

                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(event) =>
                      updateField('budget', event.target.value)
                    }
                    className={`${inputClassName} cursor-pointer`}
                  >
                    <option
                      value=""
                      className="bg-[#111111]"
                    >
                      Select a budget
                    </option>

                    {budgetOptions.map((budget) => (
                      <option
                        key={budget}
                        value={budget}
                        className="bg-[#111111]"
                      >
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-timeline"
                    className={labelClassName}
                  >
                    Project timeline
                  </label>

                  <select
                    id="contact-timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={(event) =>
                      updateField('timeline', event.target.value)
                    }
                    className={`${inputClassName} cursor-pointer`}
                  >
                    <option
                      value=""
                      className="bg-[#111111]"
                    >
                      Select a timeline
                    </option>

                    {timelineOptions.map((timeline) => (
                      <option
                        key={timeline}
                        value={timeline}
                        className="bg-[#111111]"
                      >
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={labelClassName}
                >
                  Tell me about your project *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    updateField('message', event.target.value)
                  }
                  placeholder="What are you building? What problem should it solve?"
                  className={`${inputClassName} resize-y`}
                />

                <p className="mt-2 text-right text-[10px] text-white/30">
                  {form.message.length}/5000
                </p>
              </div>

              {error && (
                <p
                  role="alert"
                  className="border border-red-400/20 bg-red-400/5 p-3 text-xs leading-5 text-red-300"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-between border border-white/20 px-5 py-4 text-left text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="flex items-center gap-3">
                  <Send size={15} />
                  Prepare project inquiry
                </span>

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="text-xs leading-5 text-white/35">
                Your email application will open with your
                project details prepared for review. Nothing
                is sent automatically by this form.
              </p>
            </form>
          </div>

          {/* Footer */}
          <footer className="mt-24 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Joren Alcos
              </p>

              <p>
                Designed &amp; built by Joren Alcos. Developed with{' '}
                <span className="text-white/50">React</span>,{' '}
                <span className="text-white/50">GSAP</span>, and{' '}
                <span className="text-white/50">Three.js</span>.
              </p>

              <a
                href="#hero"
                className="transition-colors hover:text-white"
              >
                Back to top ↑
              </a>
            </div>
          </footer>
        </div>
      </Container>
    </Section>
  )
}
