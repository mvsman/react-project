import { FC } from 'react';

import { cn } from 'shared/lib';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.navbar, {}, [className])}>
    <div className={styles.links} />
  </div>
);
