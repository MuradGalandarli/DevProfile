import { Github } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { socialLinks } from '../../data/socialLinks'

const githubLink = socialLinks.find((link) => link.kind === 'github')

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="mx-auto grid w-[min(100%-2rem,72rem)] gap-6 text-sm text-[var(--color-muted)] md:grid-cols-[1.4fr_auto_auto] md:items-center">
        <div><p className="m-0 font-semibold text-[var(--color-ink)]">Murad Galandarli</p><p className="mt-1 mb-0">Software Developer</p></div>
        <nav aria-label="Footer navigation" className="flex gap-4">
          <NavLink className="text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent-strong)]" to="/about">About</NavLink><NavLink className="text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent-strong)]" to="/projects">Projects</NavLink><NavLink className="text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent-strong)]" to="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-4 md:justify-end">
          {githubLink ? <a className="inline-flex items-center gap-1.5 text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent-strong)]" href={githubLink.url} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} /> GitHub</a> : null}
          <p className="m-0">© {new Date().getFullYear()} Murad Galandarli</p>
        </div>
      </div>
    </footer>
  )
}
