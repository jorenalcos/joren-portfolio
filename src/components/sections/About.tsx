import { useLayoutEffect, useRef } from 'react'

import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { gsap } from '../../lib/gsap'
import { Stat } from '../ui/Stat'
import { CareerTimeline } from './CareerTimeline'

export function About() {
  const section = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!section.current) return

    const context = gsap.context(() => {
      gsap.from('.about-eyebrow', {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.about-title-line', {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 70%',
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
      })

      gsap.from('.about-description', {
        scrollTrigger: {
          trigger: '.about-description',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <Section
      id="about"
      className="
        overflow-hidden
        border-b
        border-white/5
        bg-[#070707]
        py-32
        md:py-48
      "
    >
      <Container>
        <p className="about-eyebrow mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
          01 — About
        </p>

        <div className="overflow-hidden">
          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[8rem]">
            <span className="about-title-line block">
              I build digital
            </span>

            <span className="about-title-line block text-white/40">
              experiences
            </span>

            <span className="about-title-line block">
              that feel alive.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div />

          <div className="about-description max-w-xl">
            <p className="text-lg leading-relaxed text-white/60 md:text-xl">
              I'm a full-stack developer focused on
              building modern web applications,
              scalable APIs, ecommerce platforms,
              and interactive digital experiences.
            </p>

            <p className="mt-6 text-base leading-relaxed text-white/40">
              My work combines engineering,
              thoughtful interfaces and motion to
              create products that are both useful
              and memorable.
            </p>
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-3">
            <Stat
              value="6+"
              label="Years Experience"
            />
            <Stat
              value="20+"
              label="Projects"
            />
            <Stat
              value="∞"
              label="Curiosity"
            />
          </div>

        </div>
        <CareerTimeline />
      </Container>
    </Section>
  )
}