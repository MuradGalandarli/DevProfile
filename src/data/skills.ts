import type { Skill } from '../types/portfolio'

const skillsFor = (names: readonly string[], category: Skill['category'], description: string): Skill[] => names.map((name) => ({ name, category, description }))

export const skills: readonly Skill[] = [
  ...skillsFor(['C#', 'OOP', 'SOLID', 'ASP.NET Core', 'REST API', 'MVC', 'Repository Pattern', 'EF Core', 'SignalR', 'LINQ', 'Result Pattern'], 'backend', 'Backend development technology or concept.'),
  ...skillsFor(['Clean Architecture', 'Onion Architecture', 'CQRS', 'MediatR', 'JWT', 'FluentValidation', 'AutoMapper'], 'architecture-tools', 'Application architecture, validation, mapping, or authorization concept.'),
  ...skillsFor(['MSSQL', 'PostgreSQL', 'RabbitMQ', 'Redis'], 'databases-messaging', 'Database, caching, or messaging technology.'),
  ...skillsFor(['Docker', 'Docker Compose', 'Postman', 'Git', 'GitHub', 'Git Bash'], 'devops-tools', 'Development workflow or tooling technology.'),
  ...skillsFor(['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query', 'React Hooks', 'React Router', 'Component Architecture', 'State Management', 'REST API Integration'], 'frontend', 'Frontend development technology or concept.'),
  ...skillsFor(['Problem Solving', 'Team Collaboration', 'Critical Thinking', 'Attention to Detail', 'Time Management'], 'soft-skills', 'Professional working skill.'),
]
