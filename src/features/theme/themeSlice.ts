import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ThemePreference = 'dark' | 'light' | 'system'

const storageKey = 'profiledev-theme'

function getInitialTheme(): ThemePreference {
  if (typeof window === 'undefined') return 'dark'

  const storedTheme = window.localStorage.getItem(storageKey)
  return storedTheme === 'dark' || storedTheme === 'light' || storedTheme === 'system'
    ? storedTheme
    : 'dark'
}

type ThemeState = { preference: ThemePreference }

const initialState: ThemeState = { preference: getInitialTheme() }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemePreference>) {
      state.preference = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export { storageKey as themeStorageKey }
export default themeSlice.reducer
