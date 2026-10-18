import { SectionCard } from '@/components/section-card'
import { sections } from '@/lib/catalog'

export function SectionsGrid() {
  return (
    <section id="materiales" className="scroll-mt-20 bg-paper py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4">
        <div className="flex flex-col gap-3">
          <p className="font-script text-3xl text-coral -rotate-1">¿por dónde arrancamos?</p>
          <h2 className="font-sans text-3xl font-black tracking-tight text-balance text-ink md:text-5xl">
            Elegí una sección y mirá lo que hay adentro
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Cada sección agrupa materiales parecidos para que encuentres rápido lo que necesitás para tu próxima clase.
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.slug}>
              <SectionCard section={section} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
