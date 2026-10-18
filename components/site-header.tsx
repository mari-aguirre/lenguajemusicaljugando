import Link from 'next/link'
import { Music2 } from 'lucide-react'

const navItems = [
  { href: '/#materiales', label: 'Materiales' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/#nosotras', label: 'Nosotras' },
  { href: '/#contacto', label: 'Contacto' },
]

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Lenguaje Musical Jugando, inicio">
      <span className="flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-sun shadow-[3px_3px_0_var(--ink)] transition-transform duration-300 group-hover:-rotate-12">
        <Music2 className="size-5 text-ink" aria-hidden="true" />
      </span>
      <span className="flex flex-col font-sans text-sm leading-tight font-extrabold tracking-tight text-ink uppercase">
        <span>Lenguaje Musical</span>
        <span className="text-lavender">Jugando</span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 font-sans text-sm font-semibold text-ink transition-colors hover:bg-sun"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#materiales"
          className="rounded-full border-2 border-ink bg-sun px-4 py-2 font-sans text-sm font-bold text-ink shadow-[3px_3px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--ink)] md:hidden"
        >
          Ver materiales
        </Link>
      </div>
    </header>
  )
}
