import type { Skill } from '../../types/portfolio'

type SkillCardProps = { skill: Skill }

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="group rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/70 hover:bg-[var(--color-surface-raised)]">
      <h3 className="m-0 text-sm font-semibold text-[var(--color-ink)]">{skill.name}</h3>
      <p className="mt-2 mb-0 text-xs leading-5 text-[var(--color-muted)]">{skill.description}</p>
    </article>
  )
}
