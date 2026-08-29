import type { EngineeringPrinciple } from '../../data/engineeringApproach'

type EngineeringCardProps = { principle: EngineeringPrinciple }

export function EngineeringCard({ principle }: EngineeringCardProps) {
  const Icon = principle.icon
  return <article className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/70"><span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Icon aria-hidden="true" size={19} /></span><h3 className="mt-5 mb-2 text-base font-semibold text-[var(--color-ink)]">{principle.title}</h3><p className="m-0 text-sm leading-6 text-[var(--color-muted)]">{principle.description}</p></article>
}
