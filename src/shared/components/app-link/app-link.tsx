import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { cn } from 'shared/lib';

import styles from './app-link.module.scss';

interface AppLinkProps extends LinkProps {
  to: string;
  className?: string;
}

export const AppLink = memo(
  ({ children, to, className, ...props }: AppLinkProps) => (
    <Link className={cn(styles.link, {}, [className])} {...props} to={to}>
      {children}
    </Link>
  )
);
