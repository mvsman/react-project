import { FC, HTMLAttributes } from 'react';

import { cn } from 'shared/lib';

import styles from './button.module.scss';

export enum ButtonTheme {
  CLEAN = 'clean',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERT = 'backgroundInvert',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  type?: 'button' | 'submit';
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  square = false,
  size = ButtonSize.M,
  ...props
}) => (
  <button
    type="button"
    className={cn(styles.button, { [styles.square]: square }, [
      className,
      styles[theme],
      styles[size],
    ])}
    {...props}
  >
    {children}
  </button>
);
