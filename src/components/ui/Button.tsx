import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  href?: string
}

export function Button({
  children,
  href = '#',
}: ButtonProps) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/20
        px-5
        py-3
        text-sm
        uppercase
        tracking-widest
        transition-all
        duration-500
        hover:border-white
        hover:bg-white
        hover:text-black
      "
    >
      <span>{children}</span>

      <ArrowUpRight
        size={16}
        className="
          transition-transform
          duration-500
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </a>
  )
}