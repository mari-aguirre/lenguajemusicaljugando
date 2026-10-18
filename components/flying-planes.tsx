import { PaperPlane } from '@/components/paper-shapes'
import { cn } from '@/lib/utils'

const planes = [
  { top: '10%', size: 'w-14', color: 'text-coral', duration: '24s', delay: '-4s', bob: '3.4s' },
  { top: '38%', size: 'w-10', color: 'text-lavender', duration: '32s', delay: '-18s', bob: '2.8s' },
  { top: '64%', size: 'w-16', color: 'text-sun', duration: '28s', delay: '-11s', bob: '3.8s' },
  { top: '22%', size: 'w-8', color: 'text-tangerine', duration: '38s', delay: '-27s', bob: '3s' },
]

export function FlyingPlanes({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {planes.map((plane, index) => (
        <div
          key={index}
          className="absolute left-0 animate-fly-across"
          style={{ top: plane.top, animationDuration: plane.duration, animationDelay: plane.delay }}
        >
          <div className="animate-fly-bob" style={{ animationDuration: plane.bob }}>
            <PaperPlane className={cn(plane.size, plane.color, 'drop-shadow-[0_6px_6px_rgba(43,37,71,0.15)]')} />
          </div>
        </div>
      ))}
    </div>
  )
}
