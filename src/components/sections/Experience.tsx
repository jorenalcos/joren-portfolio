
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { experiences } from '../../data/experience'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)


  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const context = gsap.context(() => {
      gsap.set('.experience-heading', {
        autoAlpha: 0,
        y: 40,
      })

      gsap.set('.experience-item', {
        autoAlpha: 0,
        y: 35,
      })

      gsap.set('.experience-line', {
        scaleY: 0,
        transformOrigin: 'top center',
      })

      gsap.to('.experience-heading', {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience-heading',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.to('.experience-item', {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience-list',
          start: 'top 80%',
          once: true,
        },
      })

      gsap.to('.experience-line', {
        scaleY: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience-list',
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])


  return (
    <Section
      id="experience"
      className="border-b border-white/5 py-28 md:py-40"
    >
      <Container>
        <div ref={sectionRef}>
          <header className="experience-heading">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              04 — Experience
            </p>

            <h2 className="mt-8 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              Building
              <br />
              <span className="text-white/35">
                with purpose.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              My professional journey across software
              engineering, backend systems, frontend
              development, and ecommerce.
            </p>
          </header>

          <div className="experience-list relative mt-20">
            <div className="experience-line absolute bottom-0 left-[5px] top-0 w-px origin-top bg-white/20" />

            <div className="space-y-16 md:space-y-24">
              {experiences.map((item) => (
                <article
                  key={item.id}
                  className="experience-item relative grid gap-6 pl-10 md:grid-cols-[180px_1fr] md:gap-12 md:pl-12"
                >
                  <span className="absolute left-0 top-2 size-[11px] rounded-full border border-white/60 bg-[#050505]" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {item.period}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                      {item.company}
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight md:text-4xl">
                      {item.role}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {item.achievements.map(
                        (achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-3 text-sm leading-6 text-white/45"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-white/40" />
                            {achievement}
                          </li>
                        ),
                      )}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/55"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
