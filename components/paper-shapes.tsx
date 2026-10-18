import { cn } from '@/lib/utils'

type ShapeProps = {
  className?: string
}

export function PaperPlane({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 64 40"
      aria-hidden="true"
      className={cn('h-auto', className)}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <polygon points="2,16 62,3 22,24" fill="currentColor" />
      <polygon points="22,24 62,3 28,37" fill="currentColor" />
      <polygon points="22,24 62,3 28,37" fill="var(--ink)" fillOpacity="0.22" />
      <polygon points="2,16 22,24 14,27" fill="currentColor" />
      <polygon points="2,16 22,24 14,27" fill="var(--ink)" fillOpacity="0.35" />
    </svg>
  )
}

export function PaperBoat({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 80 56"
      aria-hidden="true"
      className={cn('h-auto', className)}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <polygon points="40,4 58,34 22,34" fill="currentColor" />
      <polygon points="40,4 58,34 40,34" fill="var(--ink)" fillOpacity="0.18" />
      <polygon points="3,32 77,32 62,52 18,52" fill="currentColor" />
      <polygon points="3,32 77,32 62,52 18,52" fill="var(--ink)" fillOpacity="0.1" />
      <polyline points="18,52 26,40 54,40 62,52" fill="none" strokeOpacity="0.45" />
    </svg>
  )
}
