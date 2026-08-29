import { engineeringApproach } from '../../data/engineeringApproach'
import { EngineeringCard } from '../ui/EngineeringCard'

export function EngineeringApproachSection() {
  return <section className="border-t border-[var(--color-line)] bg-[var(--color-surface-raised)]/30 py-20 sm:py-28" aria-labelledby="engineering-approach-heading"><div className="mx-auto w-[min(100%-2rem,72rem)]"><div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Engineering Approach</p><h2 id="engineering-approach-heading" className="m-0 text-4xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">Principles that shape the work.</h2><p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)]">A practical set of architecture and delivery concepts represented across the supplied backend and frontend experience.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{engineeringApproach.map((principle) => <EngineeringCard key={principle.title} principle={principle} />)}</div></div></section>
}
