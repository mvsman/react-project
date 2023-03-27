import { memo } from 'react';
import { cn } from 'shared/lib';
import styles from './text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error';
  align?: 'left' | 'center' | 'right';
}

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
  }: TextProps) => (
    <div
      className={cn(styles.textWrap, {}, [
        className,
        styles[theme],
        styles[align],
      ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
);
