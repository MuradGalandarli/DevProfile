import { useEffect } from 'react'
import type { ThemePreference } from './themeSlice'
import { themeStorageKey } from './themeSlice'
import { useAppSelector } from '../../store/hooks'

function resolveTheme(preference: ThemePreference): 'dark' | 'light' {
  if (preference !== 'system') return preference
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeController() {
  const preference = useAppSelector((state) => state.theme.preference)

  useEffect(() => {
    const applyTheme = () => {
      document.documentElement.dataset.theme = resolveTheme(preference)
    }

    applyTheme()
    window.localStorage.setItem(themeStorageKey, preference)

    if (preference !== 'system') return undefined

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.addEventListener('change', applyTheme)
    return () => mediaQuery.removeEventListener('change', applyTheme)
  }, [preference])

  return null
}
