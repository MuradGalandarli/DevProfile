import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ProjectFilters } from '../components/common/ProjectFilters'
import { ProjectCard } from '../components/ui/ProjectCard'
import { EmptyState } from '../components/ui/EmptyState'
import { projects } from '../data/projects'
import { filterProjects, type ProjectFilter } from '../features/projects/projectFilters'
import { Seo } from '../components/common/Seo'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const visibleProjects = useMemo(() => filterProjects(projects, activeFilter, searchTerm), [activeFilter, searchTerm])

  const clearFilters = () => {
    setActiveFilter('all')
    setSearchTerm('')
  }

  return (
    <>
    <Seo title="Projects | Murad Galandarli | Software Developer" description="Explore the verified projects of Murad Galandarli — full-stack and backend work with ASP.NET Core, C#, React and TypeScript." canonicalPath="/projects" />
    <section className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24">
      <header className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Selected work</p><h1 className="m-0 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-6xl">Projects</h1><p className="mt-5 mb-0 text-base leading-7 text-[var(--color-muted)] sm:text-lg">Browse project entries by technical focus or search the verified project information available in this portfolio.</p></header>
      <div className="mt-10 flex flex-col gap-5 border-y border-[var(--color-line)] py-5 lg:flex-row lg:items-center lg:justify-between">
        <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <label className="relative block w-full lg:max-w-xs"><span className="sr-only">Search projects</span><Search aria-hidden="true" size={17} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--color-muted)]" /><input className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] py-2.5 pr-10 pl-9 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)]" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search projects" type="search" />{searchTerm ? <button className="absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded text-[var(--color-muted)] hover:text-[var(--color-ink)]" type="button" onClick={() => setSearchTerm('')} aria-label="Clear project search"><X aria-hidden="true" size={16} /></button> : null}</label>
      </div>
      {visibleProjects.length ? <div className="mt-10 grid gap-5 md:grid-cols-2">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <EmptyState className="mt-10" title="No matching projects" message="Try a different search term or change the selected category to explore the available project entries." action={<button className="rounded-lg border border-[var(--color-line)] px-3 py-2 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" type="button" onClick={clearFilters}>Clear filters</button>} />}
    </section>
    </>
  )
}
