import { ButtonHTMLAttributes, memo } from 'react';

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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  type?: 'button' | 'submit';
  square?: boolean;
  size?: ButtonSize;
}

export const Button = memo(
  ({
    children,
    className,
    theme,
    square = false,
    size = ButtonSize.M,
    type = 'button',
    ...props
  }: ButtonProps) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(
        styles.button,
        { [styles.square]: square, [styles.disabled]: props.disabled },
        [className, styles[theme], styles[size]]
      )}
      {...props}
    >
      {children}
    </button>
  )
);
