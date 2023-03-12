import { FC, useState } from 'react';

import { cn } from 'shared/lib';

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
      <button
        data-testid="sidebar-toggle"
        type="button"
        onClick={handleCollapse}
        // eslint-disable-next-line i18next/no-literal-string
      >
        toggle
      </button>
    </div>
  );
};
