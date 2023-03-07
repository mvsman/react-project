import { FC } from 'react'

import { cn } from 'shared/lib'

import { ThemeSwitcher } from 'features'
import { AppLink } from 'shared/components/app-link'

import styles from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className, children }) => (
  <div className={cn(styles.navbar, {}, [className])}>
    <ThemeSwitcher />
    <div className={styles.links}>
      <AppLink to={'/'}>Main</AppLink>
      <AppLink to={'/about'}>About</AppLink>
    </div>
  </div>
)
