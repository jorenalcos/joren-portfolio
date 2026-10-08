import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = cursor.current

    if (!element) return

    const move = (event: MouseEvent) => {
      element.style.transform = `
        translate3d(
          ${event.clientX}px,
          ${event.clientY}px,
          0
        )
      `
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div
      ref={cursor}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[999]
        hidden
        h-3
        w-3
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-white
        mix-blend-difference
        md:block
      "
    />
  )
}