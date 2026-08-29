import { ServerCog } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ExpertiseGroupProps = { title: string; description: string; skills: readonly string[]; icon?: LucideIcon }

export function ExpertiseGroup({ title, description, skills, icon: Icon = ServerCog }: ExpertiseGroupProps) {
  return <article className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6"><span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Icon aria-hidden="true" size={20} /></span><h3 className="mt-5 mb-2 text-lg font-semibold text-[var(--color-ink)]">{title}</h3><p className="m-0 text-sm leading-6 text-[var(--color-muted)]">{description}</p><ul className="mt-5 flex flex-wrap gap-1.5 p-0">{skills.map((skill) => <li key={skill} className="list-none rounded-md border border-[var(--color-line)] bg-[var(--color-surface-raised)] px-2.5 py-1.5 text-xs text-[var(--color-ink)]">{skill}</li>)}</ul></article>
}
