
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../../lib/gsap'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { professionalValues, valuesHeading } from '../../../data/about'

export function ProfessionalValues() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = root.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.from('[data-values-intro]', {
        x: -25,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-values-intro]',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('[data-value]', {
        y: 25,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-values-grid]',
          start: 'top 82%',
          once: true,
        },
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="approach" className="border-b border-white/5 py-24 md:py-32 md:min-h-[auto]">
      <Container>
        <div ref={root} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-values-intro>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              {valuesHeading.eyebrow}
            </p>

            <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              {valuesHeading.title}
              <span className="block text-white/35">
                {valuesHeading.accent}
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              {valuesHeading.description}
            </p>
          </div>

          <div data-values-grid className="divide-y divide-white/10 border-t border-white/10">
            {professionalValues.map((item) => {
              const Icon = item.icon

              return (
                <article
                  data-value
                  key={item.number}
                  className="group py-7 md:py-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="pt-1 text-[10px] text-white/30">
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-medium md:text-xl">
                          {item.title}
                        </h3>

                        <Icon
                          size={18}
                          strokeWidth={1.3}
                          className="shrink-0 text-white/40 transition-colors duration-300 group-hover:text-white"
                        />
                      </div>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-white/50">
                        {item.description}
                      </p>

                      <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-white/65">
                        ↳ {item.benefit}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
