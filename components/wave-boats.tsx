import { PaperBoat } from '@/components/paper-shapes'
import { cn } from '@/lib/utils'

const wavePath =
  'M0 30 Q90 0 180 30 T360 30 T540 30 T720 30 T900 30 T1080 30 T1260 30 T1440 30 V60 H0 Z'

type Boat = { left: string; size: string; color: string; drift: string; delay: string }

const defaultBoats: Boat[] = [
  { left: '8%', size: 'w-16', color: 'text-coral', drift: '14s', delay: '0s' },
  { left: '46%', size: 'w-12', color: 'text-sun', drift: '18s', delay: '-6s' },
  { left: '78%', size: 'w-20', color: 'text-lavender', drift: '16s', delay: '-3s' },
]

export function WaveBoats({
  fillClassName = 'fill-paper',
  boats = defaultBoats,
  className,
}: {
  fillClassName?: string
  boats?: Boat[]
  className?: string
}) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none relative h-20 w-full overflow-hidden', className)}>
      {boats.map((boat, index) => (
        <div
          key={index}
          className="absolute bottom-3 z-10 animate-boat-drift"
          style={{ left: boat.left, animationDuration: boat.drift, animationDelay: boat.delay }}
        >
          <div className="animate-boat-bob" style={{ animationDelay: boat.delay }}>
            <PaperBoat className={cn(boat.size, boat.color)} />
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 flex w-[200%] animate-wave">
        {[0, 1].map((copy) => (
          <svg
            key={copy}
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className={cn('h-10 w-1/2', fillClassName)}
          >
            <path d={wavePath} />
          </svg>
        ))}
      </div>
    </div>
  )
}
