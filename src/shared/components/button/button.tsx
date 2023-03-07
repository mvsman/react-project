import { FC, HTMLAttributes } from 'react'

import { cn } from 'shared/lib'

import styles from './button.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => (
  <button className={cn(styles.button, {}, [className])} {...props}>
    {children}
  </button>
)
