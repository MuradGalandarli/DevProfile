export type ProjectCategory = 'backend' | 'frontend' | 'full-stack'

export type Project = {
  id: string
  title: string
  shortDescription: string
  description: string
  category: ProjectCategory
  period: string
  technologies: readonly string[]
  features: readonly string[]
  architecture: readonly string[]
  challenges: readonly string[]
  solutions: readonly string[]
  links: readonly ProjectLink[]
  visual: { accent: 'cyan' | 'violet' | 'amber'; label: string }
}

export type ProjectLink = { label: string; url: string; kind: 'github' | 'live' | 'documentation' }

export type SkillCategory = 'backend' | 'frontend' | 'databases-messaging' | 'architecture-tools' | 'devops-tools' | 'soft-skills'

export type Skill = {
  name: string
  category: SkillCategory
  description: string
  tags?: readonly string[]
}

export type Experience = {
  role: string
  organization: string
  websiteUrl?: string
  startDate: string
  endDate?: string
  summary: string
  responsibilities: readonly string[]
  highlights: readonly string[]
}

export type Education = {
  institution?: string
  qualification: string
  fieldOfStudy?: string
  startDate?: string
  endDate?: string
  summary?: string
}

export type SocialLink = {
  label: string
  url: string
  kind: 'github' | 'linkedin' | 'website' | 'email'
}

export type ContactMessage = {
  name: string
  email: string
  subject: string
  message: string
}
