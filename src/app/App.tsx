import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { useTheme } from 'shared/contexts'
import { cn } from 'shared/lib'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

import './styles/index.scss'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
