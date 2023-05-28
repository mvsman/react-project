import { ArticleType } from 'entities/article';
import { TabItem, Tabs } from 'shared/components/tabs';

interface ArticleTypeTabsProps {
  type: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

const tabs: TabItem<ArticleType>[] = [
  {
    value: 'ALL',
    content: 'Все',
  },
  {
    value: 'IT',
    content: 'Айти',
  },
  {
    value: 'SCIENCE',
    content: 'Наука',
  },
  {
    value: 'ECONOMICS',
    content: 'Экономика',
  },
];

export const ArticleTypeTabs = ({
  type,
  onChangeType,
}: ArticleTypeTabsProps) => (
  <Tabs tabs={tabs} value={type} onClick={onChangeType} />
);
