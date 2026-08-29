import { backendExpertise } from '../../data/backendExpertise'
import { ExpertiseGroup } from '../ui/ExpertiseGroup'

export function BackendExpertiseSection() {
  return <section className="border-t border-[var(--color-line)] bg-[var(--color-surface-raised)]/30 py-20 sm:py-28" aria-labelledby="backend-expertise-heading"><div className="mx-auto w-[min(100%-2rem,72rem)]"><div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Backend Expertise</p><h2 id="backend-expertise-heading" className="m-0 text-4xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">APIs, architecture, and application infrastructure.</h2><p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)]">Backend technologies and approaches represented in the CV experience and project work.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{backendExpertise.map((group) => <ExpertiseGroup key={group.title} {...group} />)}</div></div></section>
}
