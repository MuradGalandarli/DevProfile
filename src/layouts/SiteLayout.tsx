import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-main"><Outlet /></main>
      <Footer />
    </div>
  )
}
