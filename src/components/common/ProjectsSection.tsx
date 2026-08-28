import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'

export function ProjectsSection() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface-raised)]/30 py-20 sm:py-28" aria-labelledby="projects-heading">
      <div className="mx-auto w-[min(100%-2rem,72rem)]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Selected work</p><h2 id="projects-heading" className="m-0 text-4xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">Project case studies.</h2><p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)]">A selection of project entries, presented with only the currently verified context and technology information.</p></div>
          <Link className="inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" to="/projects">View All Projects <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </div>
    </section>
  )
}
