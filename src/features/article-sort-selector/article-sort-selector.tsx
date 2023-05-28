import { memo } from 'react';

import { ArticleSortField } from 'entities/article';
import { Select, SelectOption } from 'shared/components/select';
import { SortOrder } from 'shared/types';

import styles from './article-sort-selector.module.scss';

// TODO: add translations

interface ArticleSortSelectorProps {
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

const orderOptions: SelectOption<SortOrder>[] = [
  {
    value: 'asc',
    label: 'возрастанию',
  },
  {
    value: 'desc',
    label: 'убыванию',
  },
];

const sortOptions: SelectOption<ArticleSortField>[] = [
  {
    value: 'createdAt',
    label: 'дате создания',
  },
  {
    value: 'title',
    label: 'заголовку',
  },
  {
    value: 'views',
    label: 'просмотрам',
  },
];

export const ArticleSortSelector = memo(
  ({ sort, order, onChangeSort, onChangeOrder }: ArticleSortSelectorProps) => (
    <div className={styles.sort}>
      <Select
        className={styles.sortSelect}
        label="Сортировать по"
        options={sortOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={styles.orderSelect}
        label="по"
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
);
