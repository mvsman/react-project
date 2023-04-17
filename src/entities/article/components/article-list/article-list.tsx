import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../article-list-item/article-list-item';
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item.skeleton';

import styles from './article-list.module.scss';

interface ArticleListProps {
  articles?: Article[];
  view?: ArticleView;
  isLoading?: boolean;
}

const skeletons = (view: ArticleView) => (
  <div className={styles[view]}>
    {new Array(view === 'grid' ? 9 : 3).fill(0).map((_, index) => (
      <ArticleListItemSkeleton key={index} view={view} />
    ))}
  </div>
);

export const ArticleList = ({
  articles,
  view = 'list',
  isLoading,
}: ArticleListProps) => {
  if (isLoading) {
    return skeletons(view);
  }

  if (!articles?.length) {
    return null;
  }

  const renderItem = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  return <div className={styles[view]}>{articles.map(renderItem)}</div>;
};
