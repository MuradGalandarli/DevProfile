import { Code2, Database, Layers3, LayoutTemplate, Rocket, Users } from 'lucide-react'
import { skills } from '../../data/skills'
import type { SkillCategory } from '../../types/portfolio'
import { SkillCard } from '../ui/SkillCard'

const skillGroups: readonly { category: SkillCategory; title: string; icon: typeof Code2 }[] = [
  { category: 'backend', title: 'Backend', icon: Code2 },
  { category: 'frontend', title: 'Frontend', icon: LayoutTemplate },
  { category: 'databases-messaging', title: 'Databases & Messaging', icon: Database },
  { category: 'architecture-tools', title: 'Architecture & Tools', icon: Layers3 },
  { category: 'devops-tools', title: 'DevOps / Tools', icon: Rocket },
  { category: 'soft-skills', title: 'Soft Skills', icon: Users },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-[min(100%-2rem,72rem)] py-20 sm:py-28" aria-labelledby="skills-heading">
      <div className="max-w-2xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Technical stack</p>
        <h2 id="skills-heading" className="m-0 text-4xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">A practical, full-stack toolkit.</h2>
        <p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)]">Technologies and engineering concepts used across backend development, frontend systems, database work, and application architecture.</p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon
          const groupSkills = skills.filter((skill) => skill.category === group.category)
          return <section key={group.category} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas)] p-5 sm:p-6" aria-labelledby={`${group.category}-skills`}>
            <div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Icon aria-hidden="true" size={20} /></span><h3 id={`${group.category}-skills`} className="m-0 text-lg font-semibold text-[var(--color-ink)]">{group.title}</h3></div>
            <div className="grid gap-3 sm:grid-cols-2">{groupSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}</div>
          </section>
        })}
      </div>
    </section>
  )
}
