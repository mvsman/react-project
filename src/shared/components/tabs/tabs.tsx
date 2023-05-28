import { ReactNode } from 'react';
import { cn } from 'shared/lib';
import { Card } from '../card';

import styles from './tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onClick: (value: T) => void;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  onClick,
}: TabsProps<T>) => {
  const handleClick = (tab: TabItem<T>) => () => {
    onClick(tab.value as T);
  };

  return (
    <div className={cn(styles.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cn(styles.tab, {
            [styles.active]: value === tab.value,
          })}
          key={tab.value}
          onClick={handleClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
