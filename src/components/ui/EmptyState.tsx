import { PackageSearch } from 'lucide-react'
import type { ReactNode } from 'react'

type EmptyStateProps = {
  title: string
  message: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ title, message, action, className = '' }: EmptyStateProps) {
  return (
    <div className={`rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-16 text-center ${className}`} role="status">
      <span className="mx-auto grid size-12 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface-raised)] text-[var(--color-accent)]"><PackageSearch aria-hidden="true" size={22} /></span>
      <h2 className="m-0 mt-5 text-xl font-semibold text-[var(--color-ink)]">{title}</h2>
      <p className="mx-auto mt-3 mb-0 max-w-md text-sm leading-6 text-[var(--color-muted)]">{message}</p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  )
}
