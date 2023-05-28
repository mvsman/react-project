import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { SortOrder } from 'shared/types';
import { Input } from 'shared/components/input';
import { ArticleSortSelector } from 'features/article-sort-selector';
import { ArticleViewSelector } from 'features/article-view-selector';
import { ArticleSortField, ArticleView } from 'entities/article';

import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
  getArticlesView,
} from '../../model/selectors';
import { articlesPageActions } from '../../model/slices/articles-page-slice';
import { fetchArticles } from '../../model/services/fetch-articles';

import styles from './articles-page-filters.module.scss';

// TODO: add translations, refactor callbacks
export const ArticlesPageFilters = () => {
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={styles.filters}>
      <div className={styles.sort}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
    </div>
  );
};
