
import { useLayoutEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { gsap } from '../lib/gsap'

interface UseGsapRevealOptions {
  selector: string
  y?: number
  duration?: number
  stagger?: number
  start?: string
  immediate?: boolean
}

export function useGsapReveal<T extends HTMLElement>(
  {
    selector,
    y = 30,
    duration = 0.8,
    stagger = 0.12,
    start = 'top 85%',
    immediate = false,
  }: UseGsapRevealOptions,
): RefObject<T | null> {
  const root = useRef<T>(null)

  useLayoutEffect(() => {
    const element = root.current

    if (!element) return

    const ctx = gsap.context(() => {
      const targets = element.querySelectorAll(selector)

      if (!targets.length) return

      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration,
        stagger,
        ease: 'power3.out',
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: element,
                start,
                once: true,
              },
            }),
      })
    }, element)

    return () => ctx.revert()
  }, [selector, y, duration, stagger, start, immediate])

  return root
}
