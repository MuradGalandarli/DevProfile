import { CircleCheck } from 'lucide-react'
import type { ReactNode } from 'react'

type SuccessStateProps = {
  title: string
  message?: string
  action?: ReactNode
  className?: string
}

export function SuccessState({ title, message, action, className = '' }: SuccessStateProps) {
  return (
    <div className={`rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 text-center sm:p-10 ${className}`} role="status">
      <span className="mx-auto grid size-14 place-items-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><CircleCheck aria-hidden="true" size={28} /></span>
      <h2 className="m-0 mt-5 text-2xl font-semibold tracking-[-0.035em] text-[var(--color-ink)]">{title}</h2>
      {message ? <p className="mx-auto mt-3 mb-0 max-w-md text-sm leading-6 text-[var(--color-muted)]">{message}</p> : null}
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  )
}
