import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { LoadingState } from '../components/ui/LoadingState'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-on-accent)]" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="site-main" tabIndex={-1}><Suspense fallback={<LoadingState />}><Outlet /></Suspense></main>
      <Footer />
    </div>
  )
}
