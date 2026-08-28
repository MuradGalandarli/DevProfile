import type { ProjectFilter } from '../../features/projects/projectFilters'

type ProjectFiltersProps = { activeFilter: ProjectFilter; onFilterChange: (filter: ProjectFilter) => void }

const filters: readonly { label: string; value: ProjectFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'full-stack' },
]

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">{filters.map((filter) => <button key={filter.value} className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${activeFilter === filter.value ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent-strong)]' : 'border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]'}`} type="button" aria-pressed={activeFilter === filter.value} onClick={() => onFilterChange(filter.value)}>{filter.label}</button>)}</div>
}
