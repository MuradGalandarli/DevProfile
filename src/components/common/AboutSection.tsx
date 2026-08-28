import { Boxes, Database, Layers3, MonitorSmartphone } from 'lucide-react'
import { aboutContent } from '../../data/about'
import { skills } from '../../data/skills'

const areaIcons = [Layers3, MonitorSmartphone, Boxes, Database] as const
const highlightedSkills = skills.filter((skill) => ['backend', 'frontend', 'databases-messaging'].includes(skill.category)).slice(0, 8)

export function AboutSection() {
  return (
    <section id="about" className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid w-[min(100%-2rem,72rem)] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{aboutContent.eyebrow}</p>
          <h2 id="about-heading" className="m-0 max-w-md text-4xl leading-tight font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">{aboutContent.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-muted)]">{aboutContent.introduction}</p>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Selected technologies">
            {highlightedSkills.map((skill) => <span key={skill.name} className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm text-[var(--color-ink)]">{skill.name}</span>)}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {aboutContent.areas.map((area, index) => {
            const Icon = areaIcons[index]
            return <article key={area.title} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-canvas)] p-5 transition-transform duration-200 hover:-translate-y-1">
              <span className="grid size-10 place-items-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]"><Icon aria-hidden="true" size={20} /></span>
              <h3 className="mb-2 mt-5 text-base font-semibold text-[var(--color-ink)]">{area.title}</h3>
              <p className="m-0 text-sm leading-6 text-[var(--color-muted)]">{area.description}</p>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
