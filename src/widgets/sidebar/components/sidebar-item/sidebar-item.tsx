import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/components/app-link';
import { cn } from 'shared/lib';
import { getUserAuthData } from 'entities/user';

import { SidebarItemType } from '../../model/items';

import styles from './sidebar-item.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink to={item.path} className={styles.nav_item}>
      <item.Icon className={styles.nav_icon} />
      <span
        className={cn(styles.nav_link, { [styles.collapsedLink]: collapsed })}
      >
        {t(item.text)}
      </span>
    </AppLink>
  );
});
