import type { Project, ProjectCategory } from '../../types/portfolio'

export type ProjectFilter = 'all' | ProjectCategory

export function filterProjects(projects: readonly Project[], filter: ProjectFilter, searchTerm: string): readonly Project[] {
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase()

  return projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter
    const searchableContent = [project.title, project.shortDescription, ...project.technologies, ...project.architecture].join(' ').toLocaleLowerCase()
    return matchesCategory && (!normalizedSearch || searchableContent.includes(normalizedSearch))
  })
}
