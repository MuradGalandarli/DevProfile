import { AppRoutes } from './routes/AppRoutes'
import { ScrollToTop } from './components/common/ScrollToTop'
import { ThemeController } from './features/theme/ThemeController'

function App() {
  return <><ScrollToTop /><ThemeController /><AppRoutes /></>
}

export default App
