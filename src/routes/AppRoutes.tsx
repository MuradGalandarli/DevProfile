import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../layouts/SiteLayout'
import { LoadingState } from '../components/ui/LoadingState'

const HomePage = lazy(() => import('../pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() => import('../pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })))
const ProjectDetailsPage = lazy(() => import('../pages/ProjectDetailsPage').then((module) => ({ default: module.ProjectDetailsPage })))
const ContactPage = lazy(() => import('../pages/ContactPage').then((module) => ({ default: module.ContactPage })))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })))

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
