import { FileText, ShoppingBag } from 'lucide-react'
import { colorClasses, contactEmail, formatPrice, type Product, type SectionColor } from '@/lib/catalog'
import { cn } from '@/lib/utils'

export function ProductCard({ product, color }: { product: Product; color: SectionColor }) {
  const subject = encodeURIComponent(`Quiero el material: ${product.title}`)

  return (
    <article className="group flex h-full flex-col rounded-3xl border-2 border-ink bg-card shadow-[5px_5px_0_var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--ink)]">
      <div
        className={cn(
          'relative flex items-center justify-between overflow-hidden rounded-t-[1.35rem] border-b-2 border-ink px-5 py-6',
          colorClasses[color].bg,
        )}
      >
        <div className="flex size-14 items-center justify-center rounded-xl border-2 border-ink bg-card transition-transform duration-300 group-hover:-rotate-6">
          <FileText className="size-7 text-ink" aria-hidden="true" />
        </div>
        <div className="flex flex-col items-end gap-1 font-sans text-ink">
          <span className="rounded-full border-2 border-ink bg-card px-3 py-0.5 text-xs font-bold">PDF</span>
          <span className="text-sm font-semibold">{product.pages} páginas</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="font-sans text-xs font-bold tracking-wider text-muted-foreground uppercase">{product.level}</p>
        <h3 className="font-sans text-xl leading-tight font-extrabold text-balance text-ink">{product.title}</h3>
        <p className="flex-1 leading-relaxed text-pretty text-muted-foreground">{product.description}</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-sans text-2xl font-black text-ink">{formatPrice(product.price)}</span>
          <a
            href={`mailto:${contactEmail}?subject=${subject}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-2 font-sans text-sm font-bold text-ink shadow-[3px_3px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--ink)]"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            Lo quiero
          </a>
        </div>
      </div>
    </article>
  )
}
