import { memo, useMemo, useState } from 'react';

import { ThemeSwitcher } from 'features/theme-switcher';
import { LangSwitcher } from 'features/lang-switcher';

import { cn } from 'shared/lib';
import { Button } from 'shared/components/button';

import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../sidebar-item/sidebar-item';

import styles from './sidebar.module.scss';

export const Sidebar = memo(() => {
  const [collapse, setCollapse] = useState<boolean>(true);

  const handleCollapse = () => setCollapse((prev) => !prev);

  const links = useMemo(
    () =>
      SidebarItemList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapse} />
      )),
    [collapse]
  );

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, { [styles.sidebarCollapsed]: collapse })}
    >
      <Button
        data-testid="sidebar-toggle"
        className={styles.collapseButton}
        theme="background"
        size="size_l"
        square
        onClick={handleCollapse}
      >
        {collapse ? '>' : '<'}
      </Button>
      <div className={styles.nav}>{links}</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
