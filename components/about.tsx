import { PaperBoat } from '@/components/paper-shapes'

const values = ['Cercanas', 'Creativas', 'Responsables', 'Divertidas']

export function About() {
  return (
    <section id="nosotras" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative flex flex-col gap-3">
          <p className="font-script text-3xl text-coral -rotate-1">hola, ¿qué tal?</p>
          <h2 className="font-sans text-3xl font-black tracking-tight text-balance text-ink md:text-5xl">
            Somos docentes de música, como vos
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Cómo trabajamos">
            {values.map((value, index) => (
              <li
                key={value}
                className={`rounded-full border-2 border-ink px-4 py-1.5 font-sans text-sm font-bold text-ink ${
                  ['bg-sun', 'bg-coral', 'bg-tangerine', 'bg-card'][index]
                }`}
              >
                {value}
              </li>
            ))}
          </ul>
          <div aria-hidden="true" className="mt-6 hidden animate-boat-bob lg:block">
            <PaperBoat className="w-24 text-lavender" />
          </div>
        </div>
        <div className="relative rounded-3xl border-2 border-ink bg-card p-8 shadow-[8px_8px_0_var(--lavender)] md:p-10">
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty text-ink">
            <p>
              Hace años que damos clases y siempre nos pasó lo mismo: buscábamos materiales lindos, claros y que
              funcionaran de verdad en el aula, y no los encontrábamos. Así que empezamos a hacerlos nosotras.
            </p>
            <p>
              Cada juego que vas a encontrar acá lo probamos con nuestros grupos, lo ajustamos y lo volvimos a probar.
              No son fórmulas mágicas: son herramientas simples para que el lenguaje musical se aprenda con ganas,
              risas y un poco de desorden lindo.
            </p>
            <p>Si te sirven, nos alegra un montón. Y si tenés ideas, nos encantaría escucharlas.</p>
          </div>
          <p className="mt-6 font-script text-3xl text-lavender">un abrazo grande, y ¡a jugar!</p>
        </div>
      </div>
    </section>
  )
}
