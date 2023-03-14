import { FC, HTMLAttributes } from 'react';

import { cn } from 'shared/lib';

import styles from './button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'clean';
  type?: 'button' | 'submit';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => (
  <button
    type="button"
    className={cn(styles.button, {}, [className, styles[variant]])}
    {...props}
  >
    {children}
  </button>
);
