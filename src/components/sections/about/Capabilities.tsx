
import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../../../lib/gsap'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { capabilities } from '../../../data/about'

export function Capabilities() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = root.current
    if (!element) return

    // Keep all animations scoped to this section.
    const ctx = gsap.context(() => {
      gsap.from('[data-capability-heading]', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-capability-heading]',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('[data-capability]', {
        y: 35,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-capabilities-grid]',
          start: 'top 82%',
          once: true,
        },
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <Section
      id="capabilities"
      className="border-b border-white/5 py-24 md:py-32 md:min-h-[auto]"
    >
      <Container>
        <div ref={root}>
          <div data-capability-heading>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              02 — Capabilities
            </p>

            <div className="mt-7 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                What I can
                <span className="block text-white/35">
                  build for you.
                </span>
              </h2>

              <p className="max-w-xl text-sm leading-7 text-white/50 md:justify-self-end">
                From architecture and development to deployment
                and ongoing improvements, I build digital
                products around real business goals.
              </p>
            </div>
          </div>

          <div
            data-capabilities-grid
            className="mt-14 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2"
          >
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <article
                  data-capability
                  key={item.number}
                  className="group border-b border-r border-white/10 bg-[#080808] p-6 transition-[background-color,transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-[#101010] sm:p-8 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      {item.number} / CAPABILITY
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.3}
                      className="text-white/45 transition-transform duration-300 group-hover:rotate-6 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-9 text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-6 border-l border-white/20 pl-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      What I deliver
                    </p>

                    <p className="mt-2 text-xs leading-6 text-white/70">
                      {item.deliverable}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/55 transition-colors duration-300 group-hover:border-white/20"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="mt-7 text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
