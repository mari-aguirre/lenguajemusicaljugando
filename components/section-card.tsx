import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PaperPlane } from '@/components/paper-shapes'
import { colorClasses, type Section } from '@/lib/catalog'
import { cn } from '@/lib/utils'

export function SectionCard({ section, index }: { section: Section; index: number }) {
  const color = colorClasses[section.color]
  const tilt = index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'

  return (
    <Link
      href={`/secciones/${section.slug}`}
      className={cn(
        'group relative block rounded-3xl border-2 border-ink p-3 shadow-[6px_6px_0_var(--ink)] transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:shadow-[12px_12px_0_var(--ink)] focus-visible:-translate-y-1.5 focus-visible:shadow-[12px_12px_0_var(--ink)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30',
        color.bg,
        tilt,
      )}
    >
      <PaperPlane
        className={cn(
          'absolute -top-4 right-10 z-20 w-12 text-card opacity-0 transition-all duration-700 ease-out',
          'group-hover:-translate-y-6 group-hover:translate-x-10 group-hover:rotate-[-14deg] group-hover:opacity-100',
        )}
      />
      <div className="flex h-full flex-col gap-3 sm:flex-row">
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl border-2 border-ink bg-card sm:aspect-square sm:w-44 lg:w-52">
          <Image
            src={section.image || '/placeholder.svg'}
            alt=""
            fill
            sizes="(min-width: 1024px) 208px, (min-width: 640px) 176px, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4 rounded-2xl border-2 border-ink bg-card p-5">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-none text-lavender">{section.comment}</p>
            <h3 className="font-sans text-2xl leading-tight font-extrabold tracking-tight text-balance text-ink">
              {section.title}
            </h3>
            <p className="leading-relaxed text-pretty text-muted-foreground">{section.tagline}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-sans text-xs font-bold tracking-wider text-ink uppercase">
              {section.products.length} {section.products.length === 1 ? 'archivo' : 'archivos'}
            </span>
            <span
              className={cn(
                'flex size-10 items-center justify-center rounded-full border-2 border-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12',
                color.bg,
              )}
            >
              <ArrowRight className="size-5 text-ink" aria-hidden="true" />
              <span className="sr-only">Ver {section.title}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
