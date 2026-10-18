import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { FlyingPlanes } from '@/components/flying-planes'
import { ProductCard } from '@/components/product-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { colorClasses, getSection, sections } from '@/lib/catalog'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }))
}

export async function generateMetadata({ params }: PageProps<'/secciones/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const section = getSection(slug)
  if (!section) return {}
  return {
    title: section.title,
    description: section.description,
  }
}

export default async function SectionPage({ params }: PageProps<'/secciones/[slug]'>) {
  const { slug } = await params
  const section = getSection(slug)
  if (!section) notFound()

  const otherSections = sections.filter((item) => item.slug !== section.slug)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-background">
          <FlyingPlanes className="opacity-70" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:py-16">
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/#materiales"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 font-sans text-sm font-bold text-ink transition-colors hover:bg-paper"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Todas las secciones
              </Link>
              <p className="font-script text-3xl text-lavender -rotate-1">{section.comment}</p>
              <h1 className="font-sans text-4xl leading-[1.05] font-black tracking-tight text-balance text-ink md:text-6xl">
                {section.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
                {section.description}
              </p>
            </div>
            <div
              className={cn(
                'mx-auto w-full max-w-xs rotate-2 rounded-3xl border-2 border-ink p-3 shadow-[8px_8px_0_var(--ink)]',
                colorClasses[section.color].bg,
              )}
            >
              <Image
                src={section.image || '/placeholder.svg'}
                alt={`Vista de los materiales de ${section.title}`}
                width={400}
                height={400}
                priority
                className="aspect-square w-full rounded-2xl border-2 border-ink object-cover"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="archivos" className="bg-paper py-14 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="archivos" className="font-sans text-2xl font-black tracking-tight text-ink md:text-4xl">
                Archivos disponibles
              </h2>
              <p className="font-sans text-sm font-bold tracking-wider text-muted-foreground uppercase">
                {section.products.length} {section.products.length === 1 ? 'archivo' : 'archivos'}
              </p>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {section.products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} color={section.color} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="otras" className="bg-paper pb-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
            <div className="flex flex-col gap-1">
              <p className="font-script text-2xl text-coral">¿buscás otra cosa?</p>
              <h2 id="otras" className="font-sans text-xl font-extrabold text-ink">
                Otras secciones
              </h2>
            </div>
            <ul className="flex flex-wrap gap-3">
              {otherSections.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/secciones/${item.slug}`}
                    className={cn(
                      'inline-block rounded-full border-2 border-ink px-5 py-2 font-sans text-sm font-bold text-ink shadow-[3px_3px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:-rotate-2 hover:shadow-[5px_5px_0_var(--ink)]',
                      colorClasses[item.color].bg,
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
