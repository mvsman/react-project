import { FC, useState } from 'react';

import { LangSwitcher, ThemeSwitcher } from 'features';
import { cn } from 'shared/lib';
import { Button } from 'shared/components/button';

import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => setCollapse((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, { [styles.collapse]: collapse }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={handleCollapse}
        // eslint-disable-next-line i18next/no-literal-string
      >
        toggle
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
