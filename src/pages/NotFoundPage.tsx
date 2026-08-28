import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="container page-section not-found"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you requested does not exist or may have moved.</p><Link className="text-link" to="/">Return home</Link></section>
}
