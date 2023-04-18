import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArticleViewSelector } from 'features/article-view-selector';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { ArticleList, ArticleView } from 'entities/article';
import { fetchArticles } from '../../model/services/fetch-articles';
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
    dispatch(fetchArticles());
    dispatch(articlesPageActions.initView());
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
