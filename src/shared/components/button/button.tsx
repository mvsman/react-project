import { ButtonHTMLAttributes, memo } from 'react';

import { cn } from 'shared/lib';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: 'clean' | 'outline' | 'background' | 'backgroundInvert';
  type?: 'button' | 'submit';
  square?: boolean;
  size?: 'size_m' | 'size_l' | 'size_xl';
}

export const Button = memo(
  ({
    children,
    className,
    theme = 'outline',
    square = false,
    size = 'size_m',
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
