import { HTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/lib';

import styles from './card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => (
  <div className={cn(styles.card, {}, [className])} {...props}>
    {children}
  </div>
);
