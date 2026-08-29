import { TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'

type ErrorStateProps = {
  eyebrow?: string
  title: string
  message: string
  action?: ReactNode
  className?: string
}

export function ErrorState({ eyebrow, title, message, action, className = '' }: ErrorStateProps) {
  return (
    <div className={`rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-16 text-center ${className}`} role="alert">
      <span className="mx-auto grid size-12 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface-raised)] text-[var(--color-accent)]"><TriangleAlert aria-hidden="true" size={22} /></span>
      {eyebrow ? <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{eyebrow}</p> : null}
      <h1 className="m-0 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{title}</h1>
      <p className="mx-auto mt-4 mb-0 max-w-md text-sm leading-6 text-[var(--color-muted)]">{message}</p>
      {action ? <div className="mt-7 flex justify-center">{action}</div> : null}
    </div>
  )
}
