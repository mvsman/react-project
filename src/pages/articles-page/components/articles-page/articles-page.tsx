import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Page } from 'widgets/page';
import { ArticleList } from 'entities/article';

import { initArticles } from '../../model/services/init-articles';
import { fetchArticlesNextPage } from '../../model/services/fetch-articles-next-page';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articles-page-slice';
import { getArticlesIsLoading, getArticlesView } from '../../model/selectors';
import { ArticlesPageFilters } from '../articles-page-filters/articles-page-filters';

import styles from './articles-page.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);

  useEffect(() => {
    dispatch(initArticles());
  }, [dispatch]);

  const onLoadHasMore = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadHasMore}>
        <ArticlesPageFilters />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
