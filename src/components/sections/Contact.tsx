
import { useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  GitBranch,
  BriefcaseBusiness,
  Mail,
} from 'lucide-react'
import { gsap } from '../../lib/gsap'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Full-stack development',
    message: '',
  })

  useLayoutEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: 45,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            once: true,
          },
        },
      )
    })

    return () => context.revert()
  }, [])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const recipient = 'YOUR_EMAIL@example.com'

    const subject = encodeURIComponent(
      `Portfolio inquiry — ${form.projectType}`,
    )

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Project type: ${form.projectType}\n\n` +
      `Message:\n${form.message}`,
    )

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <Section
      id="contact"
      className="border-b border-white/5 py-28 md:py-40"
    >
      <Container>
        <div ref={sectionRef} className="contact-content">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            05 — Contact
          </p>

          <div className="mt-8 grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Contact introduction */}
            <div>
              <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Let's build
                <br />
                <span className="text-white/35">
                  something.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/55 md:text-base">
                Have a project in mind or looking for a
                software engineer? Let's discuss how I can
                help build your next digital experience.
              </p>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="group mt-8 inline-flex items-center gap-3 border-b border-white/30 pb-3 text-sm transition-colors hover:border-white"
              >
                <Mail size={16} />
                <span>Let's talk about your project</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <div className="mt-12 flex gap-3">
                <a
                  href="https://github.com/jorenalcos"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black"
                >
                  <GitBranch size={18} />
                </a>

                <a
                  href="YOUR_LINKEDIN_URL"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black"
                >
                  <BriefcaseBusiness size={18} />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/45"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => {
                    setForm({
                      ...form,
                      name: event.target.value,
                    })
                    setSubmitted(false)
                  }}
                  placeholder="John Doe"
                  className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/45"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => {
                    setForm({
                      ...form,
                      email: event.target.value,
                    })
                    setSubmitted(false)
                  }}
                  placeholder="john@example.com"
                  className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-project"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/45"
                >
                  Project type
                </label>

                <select
                  id="contact-project"
                  name="projectType"
                  value={form.projectType}
                  onChange={(event) => {
                    setForm({
                      ...form,
                      projectType: event.target.value,
                    })
                    setSubmitted(false)
                  }}
                  className="w-full border-b border-white/15 bg-[#050505] py-3 text-sm text-white outline-none focus:border-white"
                >
                  <option>Full-stack development</option>
                  <option>Frontend development</option>
                  <option>Backend development</option>
                  <option>WordPress / WooCommerce</option>
                  <option>Freelance project</option>
                  <option>Other inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/45"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(event) => {
                    setForm({
                      ...form,
                      message: event.target.value,
                    })
                    setSubmitted(false)
                  }}
                  placeholder="A few details about your project..."
                  className="w-full resize-y border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between border border-white/20 px-5 py-4 text-sm transition-colors hover:bg-white hover:text-black"
              >
                <span>Prepare email</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="text-sm leading-6 text-white/60"
                >
                  Your email application should open with
                  your message prepared. Review and send it
                  from your email application.
                </p>
              )}
            </form>
          </div>

          <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Joren Alcos</p>
            <p>Designed & built with React, GSAP and Three.js.</p>
            <a
              href="#top"
              className="transition-colors hover:text-white"
            >
              Back to top ↑
            </a>
          </footer>
        </div>
      </Container>
    </Section>
  )
}
