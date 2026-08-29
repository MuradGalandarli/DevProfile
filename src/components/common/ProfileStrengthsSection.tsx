import { Languages, Sparkles } from 'lucide-react'
import { profile } from '../../data/profile'
import { skills } from '../../data/skills'

const softSkills = skills.filter((skill) => skill.category === 'soft-skills')

export function ProfileStrengthsSection() {
  return (
    <section className="mt-14 grid gap-5 border-t border-[var(--color-line)] pt-14 md:grid-cols-2 sm:mt-20 sm:pt-20" aria-label="Languages and soft skills">
      <article className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6"><span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Languages aria-hidden="true" size={20} /></span><p className="mt-5 mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Languages</p><h2 className="m-0 text-2xl font-semibold tracking-[-0.035em] text-[var(--color-ink)]">Communication</h2><ul className="mt-6 space-y-3 p-0">{profile.languages.map((language) => <li key={language.name} className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-raised)] px-4 py-3"><span className="text-sm font-medium text-[var(--color-ink)]">{language.name}</span><span className="text-sm text-[var(--color-muted)]">{language.level}</span></li>)}</ul></article>
      <article className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6"><span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Sparkles aria-hidden="true" size={20} /></span><p className="mt-5 mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Soft Skills</p><h2 className="m-0 text-2xl font-semibold tracking-[-0.035em] text-[var(--color-ink)]">Working approach</h2><ul className="mt-6 flex flex-wrap gap-2 p-0">{softSkills.map((skill) => <li key={skill.name} className="list-none rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-raised)] px-3 py-2 text-sm text-[var(--color-ink)]">{skill.name}</li>)}</ul></article>
    </section>
  )
}
