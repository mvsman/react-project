import { useTheme } from 'shared/contexts'
import { cn } from 'shared/lib'

import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import { AppRouter } from './router'

import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
