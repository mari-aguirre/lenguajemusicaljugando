import { MousePointerClick, Download, Printer } from 'lucide-react'
import { PaperPlane } from '@/components/paper-shapes'

const steps = [
  {
    icon: MousePointerClick,
    title: 'Elegís',
    text: 'Recorrés las secciones y elegís el material que mejor va con tu grupo.',
    bg: 'bg-sun',
  },
  {
    icon: Download,
    title: 'Descargás',
    text: 'Una vez hecha la compra, recibís el PDF para guardarlo y usarlo cuando quieras.',
    bg: 'bg-coral',
  },
  {
    icon: Printer,
    title: 'Imprimís y a jugar',
    text: 'Lo imprimís en casa o en la escuela, las veces que lo necesites para tus clases.',
    bg: 'bg-tangerine',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-20 overflow-hidden bg-paper pb-20 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute top-6 right-[8%] animate-float">
        <PaperPlane className="w-16 text-lavender" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4">
        <div className="flex flex-col gap-3">
          <p className="font-script text-3xl text-lavender -rotate-1">fácil, sin vueltas</p>
          <h2 className="font-sans text-3xl font-black tracking-tight text-balance text-ink md:text-5xl">
            ¿Cómo funciona?
          </h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-card p-6 shadow-[5px_5px_0_var(--ink)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl border-2 border-ink ${step.bg}`}
                >
                  <step.icon className="size-6 text-ink" aria-hidden="true" />
                </span>
                <span className="font-sans text-sm font-bold tracking-wider text-muted-foreground uppercase">
                  Paso {index + 1}
                </span>
              </div>
              <h3 className="font-sans text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
