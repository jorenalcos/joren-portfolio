import { useLayoutEffect, useRef } from 'react'

import { gsap } from '../../lib/gsap'

const timeline = [
  {
    year: '2019',
    title: 'Developer',
    description:
      'Started building web applications and developing a strong foundation in modern web technologies.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    description:
      'Expanded into frontend architecture, backend APIs, databases and ecommerce systems.',
  },
  {
    year: '2025',
    title: 'Senior Developer',
    description:
      'Focused on scalable applications, technical architecture, APIs and production systems.',
  },
  {
    year: '2026',
    title: 'Independent Builder',
    description:
      'Building modern digital products while exploring interactive web experiences, GSAP and Three.js.',
  },
]

export function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!timelineRef.current) return

    const context = gsap.context(() => {
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      })

      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, timelineRef)

    return () => context.revert()
  }, [])

  return (
    <div
      ref={timelineRef}
      className="relative mt-32"
    >
      <div className="absolute left-0 right-0 top-2 hidden h-px bg-white/10 md:block">
        <div className="timeline-line h-full origin-left bg-white/60" />
      </div>

      <div className="grid gap-12 md:grid-cols-4 md:gap-6">
        {timeline.map((item) => (
          <div
            key={item.year}
            className="timeline-item relative"
          >
            <div className="mb-6 flex items-center gap-4 md:block">
              <div className="relative z-10 h-4 w-4 rounded-full border border-white/50 bg-[#050505]" />

              <span className="text-sm text-white/40 md:mt-5 md:block">
                {item.year}
              </span>
            </div>

            <h3 className="text-xl font-medium">
              {item.title}
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}