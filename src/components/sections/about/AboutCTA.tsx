
import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../../../lib/gsap'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { aboutCta } from '../../../data/about'

export function AboutCTA() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = root.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.from('[data-cta-content]', {
        y: 30,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          once: true,
        },
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="about-cta" className="py-24 md:py-32 md:min-h-[auto]">
      <Container>
        <div
          ref={root}
          className="relative overflow-hidden border border-white/10 p-7 sm:p-10 md:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-white/[0.035] blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p
                data-cta-content
                className="text-[10px] uppercase tracking-[0.35em] text-white/40"
              >
                {aboutCta.eyebrow}
              </p>

              <h2
                data-cta-content
                className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-7xl"
              >
                {aboutCta.title}
                <span className="block text-white/35">
                  {aboutCta.accent}
                </span>
              </h2>

              <p
                data-cta-content
                className="mt-5 max-w-lg text-sm leading-7 text-white/50"
              >
                {aboutCta.description}
              </p>
            </div>

            <a
              data-cta-content
              href={aboutCta.buttonHref}
              className="group inline-flex shrink-0 items-center justify-center gap-4 self-start border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white hover:text-black md:self-auto"
            >
              {aboutCta.buttonLabel}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
