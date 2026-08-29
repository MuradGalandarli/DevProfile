import { LoaderCircle } from 'lucide-react'

type LoadingStateProps = {
  label?: string
  className?: string
}

export function LoadingState({ label = 'Loading', className = '' }: LoadingStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 px-6 py-16 text-center ${className}`} role="status" aria-live="polite">
      <LoaderCircle aria-hidden="true" size={28} className="animate-spin text-[var(--color-accent)]" />
      <p className="m-0 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
      <span className="sr-only">Loading</span>
    </div>
  )
}
