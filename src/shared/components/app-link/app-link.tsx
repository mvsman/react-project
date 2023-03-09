import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { cn } from 'shared/lib';

interface AppLinkProps extends LinkProps {
  to: string;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  children,
  to,
  className,
  ...props
}) => (
  <Link className={cn('', {}, [className])} {...props} to={to}>
    {children}
  </Link>
);
