
import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../../../lib/gsap'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { aboutContent, aboutMetrics } from '../../../data/about'

export function AboutHero() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = root.current
    if (!element) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      intro
        .from('[data-hero-eyebrow]', {
          y: 15,
          autoAlpha: 0,
          duration: 0.5,
        })
        .from(
          '[data-hero-title] > span',
          {
            yPercent: 110,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.13,
          },
          '-=0.2',
        )
        .from(
          '[data-hero-copy]',
          {
            y: 22,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          '-=0.4',
        )
        .from(
          '[data-hero-cta]',
          {
            y: 12,
            autoAlpha: 0,
            duration: 0.6,
          },
          '-=0.3',
        )

      gsap.from('[data-hero-metric]', {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-hero-metrics]',
          start: 'top 85%',
          once: true,
        },
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="about" className="border-b border-white/5 py-24 md:py-32 md:min-h-[auto]">
      <Container>
        <div ref={root}>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
            <div>
              <p
                data-hero-eyebrow
                className="text-[10px] uppercase tracking-[0.35em] text-white/40"
              >
                {aboutContent.eyebrow}
              </p>

              <h1
                data-hero-title
                className="mt-8 text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                <span className="block overflow-hidden pb-1">
                  <span className="block">I turn ideas</span>
                </span>
                <span className="block overflow-hidden pb-4 text-white/35">
                  <span className="block">into digital products</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block">
                    that deliver{' '}
                    <span className="text-white/35">results.</span>
                  </span>
                </span>
              </h1>
            </div>

            <div className="max-w-lg">
              <p
                data-hero-copy
                className="text-base leading-8 text-white/75 md:text-lg"
              >
                {aboutContent.introduction}
              </p>

              <p
                data-hero-copy
                className="mt-5 text-sm leading-7 text-white/45"
              >
                {aboutContent.supportingText}
              </p>

              <a
                data-hero-cta
                href={aboutContent.ctaHref}
                className="group mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-white"
              >
                {aboutContent.ctaLabel}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div
            data-hero-metrics
            className="mt-16 grid border-t border-white/10 sm:grid-cols-3"
          >
            {aboutMetrics.map((metric) => (
              <div
                data-hero-metric
                key={metric.label}
                className="border-b border-white/10 py-7 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0 sm:[&:not(:first-child)]:border-l"
              >
                <p className="text-3xl font-medium tracking-tight md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {metric.label}
                </p>
                <p className="mt-3 max-w-xs text-xs leading-6 text-white/45">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
