import { Container } from '../layout/Container'

const navItems = [
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
          href="#hero"
          onClick={(event) => {
            event.preventDefault()
            window.history.replaceState(
              null,
              '',
              window.location.pathname,
            )
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          className="text-xs font-semibold tracking-[0.25em] text-white transition-opacity duration-300 hover:opacity-60"
          aria-label="Back to top"
        >
          JA
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
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