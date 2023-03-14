import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib';

import { AppLink } from 'shared/components/app-link';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to="/">{t('main', { ns: 'main' })}</AppLink>
        <AppLink to="/about">{t('about', { ns: 'about' })}</AppLink>
      </div>
    </div>
  );
};
