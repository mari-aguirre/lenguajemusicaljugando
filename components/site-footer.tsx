import Link from 'next/link'
import { Mail, Music2 } from 'lucide-react'
import { WaveBoats } from '@/components/wave-boats'
import { contactEmail, sections } from '@/lib/catalog'

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-20">
      <WaveBoats
        fillClassName="fill-ink"
        boats={[
          { left: '14%', size: 'w-14', color: 'text-tangerine', drift: '15s', delay: '-2s' },
          { left: '62%', size: 'w-16', color: 'text-sun', drift: '19s', delay: '-8s' },
        ]}
      />
      <div className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-xl border-2 border-cream bg-sun">
                <Music2 className="size-5 text-ink" aria-hidden="true" />
              </span>
              <span className="font-sans text-sm leading-tight font-extrabold tracking-tight uppercase">
                Lenguaje Musical <span className="text-sun">Jugando</span>
              </span>
            </div>
            <p className="max-w-sm leading-relaxed text-cream/80">
              Materiales imprimibles para enseñar lenguaje musical jugando. Hechos con cariño, desde el aula y para el
              aula.
            </p>
            <p className="font-script text-2xl text-sun">¿charlamos?</p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-cream px-4 py-2 font-sans text-sm font-bold transition-colors hover:bg-cream hover:text-ink"
            >
              <Mail className="size-4" aria-hidden="true" />
              {contactEmail}
            </a>
          </div>
          <nav aria-label="Secciones" className="flex flex-col gap-3">
            <h2 className="font-sans text-sm font-bold tracking-wider text-sun uppercase">Secciones</h2>
            <ul className="flex flex-col gap-2">
              {sections.map((section) => (
                <li key={section.slug}>
                  <Link href={`/secciones/${section.slug}`} className="text-cream/80 transition-colors hover:text-sun">
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Sitio" className="flex flex-col gap-3">
            <h2 className="font-sans text-sm font-bold tracking-wider text-sun uppercase">El sitio</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/#como-funciona" className="text-cream/80 transition-colors hover:text-sun">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/#nosotras" className="text-cream/80 transition-colors hover:text-sun">
                  Nosotras
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-cream/20">
          <p className="mx-auto max-w-6xl px-4 py-5 font-sans text-xs text-cream/60">
            © {new Date().getFullYear()} lenguajemusicaljugando.com.ar — Los materiales son para uso personal y en el
            aula.
          </p>
        </div>
      </div>
    </footer>
  )
}
