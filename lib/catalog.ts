export type SectionColor = 'sun' | 'lavender' | 'coral' | 'tangerine'

export type Product = {
  id: string
  title: string
  description: string
  pages: number
  level: string
  price: number
}

export type Section = {
  slug: string
  title: string
  tagline: string
  comment: string
  description: string
  color: SectionColor
  image: string
  products: Product[]
}

export const sections: Section[] = [
  {
    slug: 'batalla-naval',
    title: 'Batalla naval',
    tagline: 'El clásico de siempre, pero con figuras, notas y silencios.',
    comment: '¡el favorito de los chicos!',
    description:
      'Tableros listos para imprimir donde, en vez de barcos, hay que encontrar notas, figuras y silencios. Ideal para repasar sin que parezca repaso.',
    color: 'sun',
    image: '/images/batalla-naval.webp',
    products: [
      {
        id: 'bn-figuras',
        title: 'Batalla naval de figuras',
        description: 'Tableros con redondas, blancas, negras y corcheas para jugar de a dos.',
        pages: 8,
        level: 'Primaria',
        price: 3500,
      },
      {
        id: 'bn-notas-clave-sol',
        title: 'Batalla naval en clave de sol',
        description: 'Ubicá las notas en el pentagrama para “hundir” los barcos del otro equipo.',
        pages: 10,
        level: 'Primaria / Secundaria',
        price: 3900,
      },
      {
        id: 'bn-silencios',
        title: 'Batalla naval de silencios',
        description: 'Una versión enfocada en reconocer y nombrar los silencios.',
        pages: 6,
        level: 'Inicial / Primaria',
        price: 3200,
      },
    ],
  },
  {
    slug: 'tarjetas',
    title: 'Tarjetas',
    tagline: 'Para memotest, adivinanzas, juegos rápidos y mil usos más.',
    comment: 'imprimí, plastificá y listo',
    description:
      'Tarjetas con símbolos musicales, figuras, notas y matices. Sirven para memotest, para armar ritmos en el pizarrón o para inventar tus propios juegos.',
    color: 'lavender',
    image: '/images/tarjetas.webp',
    products: [
      {
        id: 'tj-simbolos',
        title: 'Tarjetas de símbolos musicales',
        description: '48 tarjetas con claves, alteraciones, matices y signos de repetición.',
        pages: 12,
        level: 'Primaria / Secundaria',
        price: 4200,
      },
      {
        id: 'tj-memotest',
        title: 'Memotest de figuras y silencios',
        description: 'Pares de figura y su silencio equivalente para jugar a la memoria.',
        pages: 8,
        level: 'Inicial / Primaria',
        price: 3500,
      },
      {
        id: 'tj-ritmos',
        title: 'Tarjetas de células rítmicas',
        description: 'Células de 1 y 2 tiempos para armar y leer ritmos en grupo.',
        pages: 10,
        level: 'Primaria',
        price: 3800,
      },
      {
        id: 'tj-instrumentos',
        title: 'Tarjetas de instrumentos',
        description: 'Familias de instrumentos con ilustraciones para clasificar y jugar.',
        pages: 9,
        level: 'Inicial / Primaria',
        price: 3600,
      },
    ],
  },
  {
    slug: 'dictado-ritmico',
    title: 'Plantillas para dictado rítmico',
    tagline: 'Hojas claras y prolijas para que el dictado sea un desafío, no un drama.',
    comment: 'de menos a más, sin apuro',
    description:
      'Plantillas con casilleros, compases y guías visuales para acompañar los dictados rítmicos en distintos niveles de dificultad.',
    color: 'coral',
    image: '/images/dictado-ritmico.webp',
    products: [
      {
        id: 'dr-inicial',
        title: 'Dictado rítmico con casilleros',
        description: 'Casilleros grandes para los primeros dictados de negras y corcheas.',
        pages: 6,
        level: 'Inicial / Primaria',
        price: 2900,
      },
      {
        id: 'dr-compases',
        title: 'Plantillas por compases',
        description: 'Compases de 2/4, 3/4 y 4/4 para completar con figuras.',
        pages: 8,
        level: 'Primaria',
        price: 3200,
      },
      {
        id: 'dr-avanzado',
        title: 'Dictado rítmico avanzado',
        description: 'Con semicorcheas, puntillos y síncopas para los más grandes.',
        pages: 10,
        level: 'Secundaria',
        price: 3600,
      },
    ],
  },
  {
    slug: 'figuras-y-silencios',
    title: 'Figuras y silencios para recortar',
    tagline: 'Material concreto para tocar, mover, ordenar y armar ritmos con las manos.',
    comment: 'tijera en mano',
    description:
      'Figuras y silencios en distintos tamaños para recortar y usar sobre la mesa, el pizarrón o el piso. Aprender con las manos también es aprender.',
    color: 'tangerine',
    image: '/images/figuras-silencios.webp',
    products: [
      {
        id: 'fs-grandes',
        title: 'Figuras gigantes para el pizarrón',
        description: 'Figuras en tamaño grande para trabajar con todo el grupo.',
        pages: 14,
        level: 'Todos los niveles',
        price: 4500,
      },
      {
        id: 'fs-mesa',
        title: 'Kit de figuras y silencios de mesa',
        description: 'Tamaño mediano para trabajar en grupos pequeños o de a uno.',
        pages: 10,
        level: 'Inicial / Primaria',
        price: 3800,
      },
      {
        id: 'fs-equivalencias',
        title: 'Rueda de equivalencias',
        description: 'Piezas para descubrir cuántas negras entran en una blanca (y más).',
        pages: 6,
        level: 'Primaria',
        price: 3200,
      },
    ],
  },
  {
    slug: 'loteria-musical',
    title: 'Lotería musical',
    tagline: 'Cartones y fichas para jugar con todo el grupo a la vez.',
    comment: '¡cantá lotería!',
    description:
      'Cartones de lotería con símbolos, figuras y notas. Funciona genial para cerrar una unidad o para arrancar la clase con energía.',
    color: 'lavender',
    image: '/images/loteria.webp',
    products: [
      {
        id: 'lt-simbolos',
        title: 'Lotería de símbolos musicales',
        description: '30 cartones distintos y fichas para sortear.',
        pages: 16,
        level: 'Primaria / Secundaria',
        price: 4800,
      },
      {
        id: 'lt-notas',
        title: 'Lotería de notas en el pentagrama',
        description: 'Para practicar la lectura en clave de sol jugando.',
        pages: 14,
        level: 'Primaria',
        price: 4500,
      },
    ],
  },
  {
    slug: 'pentagramas',
    title: 'Pentagramas y hojas de trabajo',
    tagline: 'Pentagramas grandes y fichas para escribir, pintar y completar.',
    comment: 'para las primeras notas',
    description:
      'Hojas con pentagramas amplios, guías de escritura de claves y fichas de actividades para usar en clase o como tarea.',
    color: 'sun',
    image: '/images/pentagramas.webp',
    products: [
      {
        id: 'pt-grandes',
        title: 'Pentagramas extra grandes',
        description: 'Líneas bien separadas para los primeros pasos en la escritura.',
        pages: 5,
        level: 'Inicial / Primaria',
        price: 2500,
      },
      {
        id: 'pt-clave-sol',
        title: 'Aprendo a dibujar la clave de sol',
        description: 'Guías paso a paso para trazar la clave sin frustrarse.',
        pages: 6,
        level: 'Primaria',
        price: 2800,
      },
      {
        id: 'pt-fichas',
        title: 'Fichas de lectura y escritura',
        description: 'Actividades para completar, unir y colorear notas.',
        pages: 12,
        level: 'Primaria',
        price: 3900,
      },
    ],
  },
]

export function getSection(slug: string) {
  return sections.find((section) => section.slug === slug)
}

export const contactEmail = 'hola@lenguajemusicaljugando.com.ar'

export function formatPrice(price: number) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price)
}

export const colorClasses: Record<SectionColor, { bg: string; text: string }> = {
  sun: { bg: 'bg-sun', text: 'text-sun' },
  lavender: { bg: 'bg-lavender', text: 'text-lavender' },
  coral: { bg: 'bg-coral', text: 'text-coral' },
  tangerine: { bg: 'bg-tangerine', text: 'text-tangerine' },
}
