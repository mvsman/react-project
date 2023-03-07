import { FC, useState } from 'react'

import { cn } from 'shared/lib'

import styles from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(true)

  const handleCollapse = () => setCollapse((prev) => !prev)

  return (
    <div
      className={cn(styles.sidebar, { [styles.collapse]: collapse }, [
        className,
      ])}
    >
      <button onClick={handleCollapse}>toggle</button>
    </div>
  )
}
