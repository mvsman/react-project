import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/components/app-link';
import { cn } from 'shared/lib';
import { SidebarItemType } from '../../model/items';

import styles from './sidebar-item.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

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
