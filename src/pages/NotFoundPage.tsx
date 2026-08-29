import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/common/Seo'
import { ErrorState } from '../components/ui/ErrorState'

export function NotFoundPage() {
  return (
    <>
    <Seo title="Page Not Found | Murad Galandarli" description="The page you requested could not be found." canonicalPath="/" />
    <section className="mx-auto w-[min(100%-2rem,72rem)] py-16 sm:py-24">
      <ErrorState eyebrow="404" title="Page not found" message="The page you requested does not exist or may have moved." action={<Link className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" to="/"><ArrowLeft aria-hidden="true" size={17} /> Return home</Link>} />
    </section>
    </>
  )
}
