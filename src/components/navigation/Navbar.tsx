import { Container } from '../layout/Container'

const links = [
  { label: 'About', href: '#about' },
   { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.25em]"
        >
          JA
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-white/50
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="
            rounded-full
            border
            border-white/20
            px-4
            py-2
            text-xs
            uppercase
            tracking-widest
            transition-colors
            hover:bg-white
            hover:text-black
          "
        >
          Let's Talk
        </a>
      </Container>
    </header>
  )
}