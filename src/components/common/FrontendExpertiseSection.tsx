import { MonitorSmartphone } from 'lucide-react'
import { frontendExpertise } from '../../data/frontendExpertise'
import { ExpertiseGroup } from '../ui/ExpertiseGroup'

export function FrontendExpertiseSection() {
  return <section className="mx-auto w-[min(100%-2rem,72rem)] py-20 sm:py-28" aria-labelledby="frontend-expertise-heading"><div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Frontend Expertise</p><h2 id="frontend-expertise-heading" className="m-0 text-4xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">Responsive interfaces with maintainable structure.</h2><p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)]">Frontend technologies and development practices represented in the CV skills and project work.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{frontendExpertise.map((group) => <ExpertiseGroup key={group.title} icon={MonitorSmartphone} {...group} />)}</div></section>
}
