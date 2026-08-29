import { Github, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { setTheme } from '../../features/theme/themeSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { socialLinks } from '../../data/socialLinks'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
] as const

const githubLink = socialLinks.find((link) => link.kind === 'github')

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const theme = useAppSelector((state) => state.theme.preference)
  const dispatch = useAppDispatch()
  const isDarkTheme = theme !== 'light'

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) closeMenu()
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className={`sticky top-0 z-30 border-b border-[var(--color-line)] backdrop-blur-xl transition-[background-color,box-shadow] duration-200 ${isScrolled ? 'bg-[color:var(--color-canvas)]/90 shadow-lg shadow-black/10' : 'bg-[color:var(--color-canvas)]/60 shadow-none'}`}>
      <nav className="mx-auto flex min-h-[4.5rem] w-[min(100%-2rem,72rem)] items-center justify-between gap-4" aria-label="Primary navigation">
        <NavLink className="grid size-9 place-items-center rounded-lg border border-[var(--color-line)] text-xs font-extrabold tracking-[-0.08em] text-[var(--color-ink)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" to="/" aria-label="Murad Galandarli home" onClick={closeMenu}>MG</NavLink>
        <div id="primary-menu" className={`absolute inset-x-4 top-[calc(100%+0.5rem)] ${isMenuOpen ? 'flex' : 'hidden'} flex-col gap-1 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-2 shadow-2xl shadow-black/20 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={closeMenu} className={({ isActive }) => `rounded-md px-3 py-2 text-sm no-underline transition-colors ${isActive ? 'font-medium text-[var(--color-accent-strong)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {githubLink ? <a className="grid size-9 place-items-center rounded-lg border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" href={githubLink.url} target="_blank" rel="noreferrer" aria-label="GitHub profile of Murad Galandarli" title="GitHub"><Github aria-hidden="true" size={18} /></a> : null}
          <button
            className="grid size-9 place-items-center rounded-lg border border-[var(--color-line)] bg-transparent text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            type="button"
            aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
            title={`Theme: ${theme}. Click to switch.`}
            onClick={() => dispatch(setTheme(isDarkTheme ? 'light' : 'dark'))}
          >
            {isDarkTheme ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>
          <button className="grid size-9 place-items-center rounded-lg border border-[var(--color-line)] bg-transparent text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden" type="button" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((current) => !current)}>
            {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
