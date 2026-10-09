
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const context = gsap.context(() => {
      gsap.from('.projects-heading', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <Section
      id="work"
      className="border-b border-white/5 py-28 md:py-40"
    >
      <Container>
        <div ref={sectionRef}>
          <div className="projects-heading">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              03 — Selected Work
            </p>

            <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Work that
                <br />
                <span className="text-white/35">
                  solves problems.
                </span>
              </h2>

              <p className="max-w-xs text-sm leading-7 text-white/50">
                A selection of applications,
                systems, and digital experiences
                built with purpose.
              </p>
            </div>
          </div>

          <div className="projects-grid mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
