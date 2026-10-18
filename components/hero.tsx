import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { FlyingPlanes } from '@/components/flying-planes'
import { WaveBoats } from '@/components/wave-boats'

const collage = [
  { src: '/images/tarjetas.webp', alt: 'Tarjetas imprimibles con símbolos musicales', className: 'left-0 top-6 -rotate-6 w-48 sm:w-56' },
  { src: '/images/batalla-naval.webp', alt: 'Tablero de batalla naval con figuras musicales', className: 'right-0 top-0 rotate-3 w-56 sm:w-64 z-10' },
  { src: '/images/figuras-silencios.webp', alt: 'Figuras y silencios recortados en papel', className: 'left-10 bottom-0 rotate-2 w-48 sm:w-56 z-20' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <FlyingPlanes />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-6 md:pt-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <p className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 font-script text-3xl text-lavender -rotate-2">
            hecho por docentes, para docentes
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-100 duration-700 font-sans text-4xl leading-[1.05] font-black tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            Que aprender lenguaje musical sea{' '}
            <span className="relative inline-block">
              <span className="relative z-10">un juego.</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded-sm bg-sun sm:h-5" aria-hidden="true" />
            </span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-200 duration-700 max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground">
            Juegos y actividades en PDF, listos para descargar, imprimir y llevar al aula. Materiales pensados con
            cariño para docentes de música que disfrutan enseñar tanto como nosotras.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-300 duration-700 flex flex-wrap items-center gap-4">
            <Link
              href="#materiales"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-6 py-3 font-sans font-bold text-ink shadow-[4px_4px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ink)]"
            >
              Ver los materiales
              <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#como-funciona"
              className="rounded-full border-2 border-ink bg-card px-6 py-3 font-sans font-bold text-ink transition-colors hover:bg-paper"
            >
              ¿Cómo funciona?
            </Link>
          </div>
        </div>

        <div className="animate-in fade-in zoom-in-95 fill-mode-both delay-300 duration-1000 relative mx-auto h-80 w-full max-w-md sm:h-96">
          {collage.map((item) => (
            <div
              key={item.src}
              className={`absolute rounded-2xl border-2 border-ink bg-card p-2 shadow-[6px_6px_0_var(--ink)] transition-transform duration-500 hover:z-30 hover:rotate-0 hover:scale-105 ${item.className}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                width={400}
                height={400}
                priority
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>
          ))}
          <p className="absolute -bottom-2 right-2 z-30 rotate-[-6deg] font-script text-2xl text-coral">
            ¡para imprimir y jugar!
          </p>
        </div>
      </div>
      <WaveBoats fillClassName="fill-paper" />
    </section>
  )
}
