import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { ArticleSortField, ArticleType } from 'entities/article';
import { SortOrder } from 'shared/types';
import { getArticlesInited } from '../selectors';
import { articlesPageActions } from '../slices/articles-page-slice';
import { fetchArticles } from './fetch-articles';

export const initArticles = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticles', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlesInited(getState());

  if (!inited) {
    // TODO: mb refactor
    [...searchParams].forEach(([param, value]) => {
      if (param === 'search') {
        dispatch(articlesPageActions.setSearch(value));
      } else if (param === 'sort') {
        dispatch(articlesPageActions.setSort(value as ArticleSortField));
      } else if (param === 'order') {
        dispatch(articlesPageActions.setOrder(value as SortOrder));
      } else if (param === 'type') {
        dispatch(articlesPageActions.setType(value as ArticleType));
      }
    });
    dispatch(articlesPageActions.initView());
    dispatch(fetchArticles({}));
  }
});
