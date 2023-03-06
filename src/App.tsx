import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'

import './styles/index.scss'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy />} />
          <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}
