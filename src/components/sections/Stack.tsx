import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { TechnologyScene } from '../3d/TechnologyScene'

import {
  technologies,
} from '../../data/technologies'

import { gsap } from '../../lib/gsap'

export function Stack() {
  const section = useRef<HTMLElement>(null)

  const [activeTechnology, setActiveTechnology] =
    useState('')

  const active =
    technologies.find(
      (technology) =>
        technology.id === activeTechnology,
    )

  useLayoutEffect(() => {
    if (!section.current) return

    const context = gsap.context(() => {
      gsap.from('.stack-eyebrow', {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.stack-title', {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.stack-scene', {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        ease: 'power3.out',
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <Section
      id="stack"
      className="
        overflow-hidden
        border-b
        border-white/5
        py-32
        md:py-48
      "
    >
      <Container>
        <p className="stack-eyebrow text-xs uppercase tracking-[0.4em] text-white/40">
          02 — Technology
        </p>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Text */}
          <div>
            <h2 className="stack-title text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Technology
              <br />
              <span className="text-white/35">
                is a system.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/45 md:text-lg">
              I work across the full stack,
              combining frontend engineering,
              backend architecture, databases,
              DevOps and interactive experiences.
            </p>

            <div className="mt-12 min-h-[150px]">
              {active ? (
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/30">
                    {active.category}
                  </div>

                  <h3 className="mt-3 text-3xl font-medium">
                    {active.name}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
                    {active.description}
                  </p>

                  <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/30">
                    Experience ·{' '}
                    {active.experience}
                  </div>
                </div>
              ) : (
                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Hover a technology
                </p>
              )}
            </div>
          </div>

          {/* 3D Scene */}
          <div className="stack-scene relative h-[500px] w-full md:h-[650px]">
            <TechnologyScene
              activeTechnology={
                activeTechnology
              }
              onActivate={
                setActiveTechnology
              }
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.35)_100%)]" />
          </div>
        </div>
      </Container>
    </Section>
  )
}