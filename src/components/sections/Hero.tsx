import { useRef } from 'react'
import { HeroScene } from '../3d/HeroScene'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { gsap } from '../../lib/gsap'
import { useLayoutEffect } from 'react'

export function Hero() {
  const hero = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!hero.current) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      })

      timeline
        .from('.hero-eyebrow', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          '.hero-title',
          {
            y: 80,
            opacity: 0,
            duration: 1.2,
          },
          '-=0.5',
        )
        .from(
          '.hero-description',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.7',
        )
        .from(
          '.hero-button',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.5',
        )
        .from(
          '.hero-scene',
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
          },
          '-=1',
        )
    }, hero)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={hero}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="hero-scene absolute inset-0">
        <HeroScene />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,#050505_75%)]
        "
      />

      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-4xl">
          <p
            className="
              hero-eyebrow
              mb-6
              text-xs
              uppercase
              tracking-[0.4em]
              text-white/40
            "
          >
            Full Stack Developer · Cebu, Philippines
          </p>

          <h1
            className="
              hero-title
              text-6xl
              font-medium
              leading-[0.9]
              tracking-[-0.05em]
              md:text-8xl
              lg:text-[10rem]
            "
          >
            Joren
            <br />
            Alcos<span className="text-white/30">.</span>
          </h1>

          <p
            className="
              hero-description
              mt-8
              max-w-lg
              text-base
              leading-relaxed
              text-white/50
              md:text-lg
            "
          >
            I build modern digital experiences
            across frontend, backend and
            interactive 3D.
          </p>

          <div className="hero-button mt-10">
            <Button href="#work">
              View My Work
            </Button>
          </div>
        </div>
      </Container>

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-white/30
        "
      >
        Scroll to explore
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />
    </section>
  )
}