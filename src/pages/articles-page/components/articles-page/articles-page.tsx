import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArticleViewSelector } from 'features/article-view-selector';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Page } from 'shared/components/page';
import { ArticleList, ArticleView } from 'entities/article';

import { fetchArticles } from '../../model/services/fetch-articles';
import { fetchArticlesNextPage } from '../../model/services/fetch-articles-next-page';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articles-page-slice';
import { getArticlesIsLoading, getArticlesView } from '../../model/selectors';

import styles from './articles-page.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesView);
  const isLoading = useSelector(getArticlesIsLoading);

  useEffect(() => {
    dispatch(articlesPageActions.initView());
    dispatch(fetchArticles({ page: 1 }));
  }, [dispatch]);

  const onLoadHasMore = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page onScrollEnd={onLoadHasMore}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
