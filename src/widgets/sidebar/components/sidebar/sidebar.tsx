import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RoutesPath } from 'app/providers/router/config/router-config';
import { LangSwitcher, ThemeSwitcher } from 'features';
import { cn } from 'shared/lib';
import { AppLink } from 'shared/components/app-link';
import { Button, ButtonSize, ButtonTheme } from 'shared/components/button';

import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => setCollapse((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, { [styles.sidebarCollapsed]: collapse }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        className={styles.collapseButton}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.L}
        square
        onClick={handleCollapse}
      >
        {collapse ? '>' : '<'}
      </Button>
      <div className={styles.nav}>
        <AppLink to={RoutesPath.main} className={styles.nav_item}>
          <MainIcon className={styles.nav_icon} />
          <span className={styles.nav_link}>{t('main')}</span>
        </AppLink>
        <AppLink to={RoutesPath.about} className={styles.nav_item}>
          <AboutIcon className={styles.nav_icon} />
          <span className={styles.nav_link}>{t('about')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
