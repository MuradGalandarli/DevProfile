import type { LucideIcon } from 'lucide-react'
import { Boxes, Braces, Database, GitBranch, Layers3, Network, ShieldCheck, SquareStack, Waypoints, Workflow } from 'lucide-react'

export type EngineeringPrinciple = { title: string; description: string; icon: LucideIcon }

export const engineeringApproach: readonly EngineeringPrinciple[] = [
  { title: 'Clean Architecture', description: 'A separation-of-concerns approach for keeping application responsibilities organized and maintainable.', icon: Layers3 },
  { title: 'Onion Architecture', description: 'An architecture style represented in the backend experience with dependencies directed toward the core.', icon: Waypoints },
  { title: 'SOLID', description: 'Object-oriented design principles included in the backend development toolkit.', icon: Braces },
  { title: 'Repository Pattern', description: 'A structured approach to data access used with Entity Framework Core in backend systems.', icon: Database },
  { title: 'CQRS / MediatR', description: 'Command and query separation with MediatR for organized application request handling.', icon: GitBranch },
  { title: 'Result Pattern', description: 'An explicit result-oriented approach included in the backend architecture experience.', icon: SquareStack },
  { title: 'REST API', description: 'RESTful API development and integration across ASP.NET Core backend and React frontend work.', icon: Network },
  { title: 'JWT Authentication', description: 'Token-based authentication used in backend and frontend project contexts.', icon: ShieldCheck },
  { title: 'State Management', description: 'Redux Toolkit and RTK Query for structured client-side state and API data workflows.', icon: Workflow },
  { title: 'Responsive UI', description: 'Responsive interface development with React, CSS, Bootstrap, and Tailwind CSS.', icon: Boxes },
]
