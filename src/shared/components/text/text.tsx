import { FC } from 'react';
import { cn } from 'shared/lib';
import styles from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}) => (
  <div className={cn(styles.textWrap, {}, [className, styles[theme]])}>
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
);
