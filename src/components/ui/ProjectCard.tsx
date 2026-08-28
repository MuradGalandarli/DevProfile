import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types/portfolio'

type ProjectCardProps = { project: Project }

const categoryLabels: Record<Project['category'], string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  'full-stack': 'Full Stack',
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/70">
      <div className={`relative min-h-32 overflow-hidden p-5 ${project.visual.accent === 'cyan' ? 'bg-cyan-400/10' : project.visual.accent === 'violet' ? 'bg-violet-400/10' : 'bg-amber-300/10'}`}>
        <span className="absolute -right-2 -bottom-6 font-mono text-8xl font-bold tracking-tighter text-[var(--color-ink)]/5" aria-hidden="true">{`{}`}</span>
        <p className="relative m-0 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">{project.visual.label}</p>
        <span className="relative mt-6 inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-canvas)]/80 px-3 py-1 text-xs font-medium text-[var(--color-ink)]">{categoryLabels[project.category]}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3"><h3 className="m-0 text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{project.title}</h3><span className="shrink-0 text-xs text-[var(--color-muted)]">{project.period}</span></div>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{project.shortDescription}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5 p-0" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology} className="list-none rounded-md border border-[var(--color-line)] px-2 py-1 text-xs text-[var(--color-muted)]">{technology}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] no-underline hover:text-[var(--color-accent-strong)]" to={`/projects/${project.id}`}>Case study <ArrowUpRight aria-hidden="true" size={16} /></Link>
          {project.links.filter((link) => link.kind === 'github').map((link) => <a key={link.url} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)] no-underline hover:text-[var(--color-ink)]" href={link.url} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} /> {link.label}</a>)}
          {project.links.filter((link) => link.kind === 'live').map((link) => <a key={link.url} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)] no-underline hover:text-[var(--color-ink)]" href={link.url} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight aria-hidden="true" size={16} /></a>)}
        </div>
      </div>
    </article>
  )
}
