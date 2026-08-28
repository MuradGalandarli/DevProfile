import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, Layers3, Wrench } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

type DetailListProps = { title: string; items: readonly string[]; icon?: 'check' | 'layers' | 'wrench' }

function DetailList({ title, items, icon = 'check' }: DetailListProps) {
  const Icon = icon === 'layers' ? Layers3 : icon === 'wrench' ? Wrench : CheckCircle2
  return <section className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6"><h2 className="m-0 text-lg font-semibold text-[var(--color-ink)]">{title}</h2><ul className="mt-5 space-y-3 p-0">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"><Icon aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />{item}</li>)}</ul></section>
}

export function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((entry) => entry.id === id)

  if (!project) {
    return <section className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24"><div className="rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-16 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Project unavailable</p><h1 className="m-0 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">This project was not found.</h1><p className="mx-auto mt-4 mb-0 max-w-md text-sm leading-6 text-[var(--color-muted)]">The project identifier may be incorrect, or this case study is not currently included in the local portfolio data.</p><Link className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" to="/projects"><ArrowLeft aria-hidden="true" size={17} /> Back to Projects</Link></div></section>
  }

  return (
    <article className="mx-auto w-[min(100%-2rem,72rem)] py-12 sm:py-20">
      <Link className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent)]" to="/projects"><ArrowLeft aria-hidden="true" size={17} /> Back to Projects</Link>
      <header className="mt-10 grid gap-8 border-b border-[var(--color-line)] pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{project.category.replace('-', ' ')} project · {project.period}</p><h1 className="m-0 text-4xl font-semibold tracking-[-0.055em] text-[var(--color-ink)] sm:text-6xl">{project.title}</h1><p className="mt-6 mb-0 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{project.description}</p></div>
        {project.links.length ? <div className="flex flex-wrap gap-3 lg:justify-end">{project.links.map((link) => <a key={link.url} className={link.kind === 'live' ? 'inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-[#071116] no-underline hover:bg-[var(--color-accent-strong)]' : 'inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'} href={link.url} target="_blank" rel="noreferrer">{link.kind === 'github' ? <Github aria-hidden="true" size={17} /> : null}{link.label} <ArrowUpRight aria-hidden="true" size={17} /></a>)}</div> : null}
      </header>
      <section className="py-10" aria-labelledby="technologies-heading"><h2 id="technologies-heading" className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">Technologies</h2><ul className="mt-4 flex flex-wrap gap-2 p-0">{project.technologies.map((technology) => <li key={technology} className="list-none rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-raised)] px-3 py-2 text-sm text-[var(--color-ink)]">{technology}</li>)}</ul></section>
      <div className="grid gap-5 lg:grid-cols-2"><DetailList title="Features" items={project.features} /><DetailList title="Architecture" items={project.architecture} icon="layers" />{project.challenges.length ? <DetailList title="Challenges" items={project.challenges} icon="wrench" /> : null}{project.solutions.length ? <DetailList title="Solutions" items={project.solutions} /> : null}</div>
    </article>
  )
}
