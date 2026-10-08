import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}