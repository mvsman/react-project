import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPage,
} from '../selectors';
import { articlesPageActions } from '../slices/articles-page-slice';
import { fetchArticles } from './fetch-articles';

export const fetchArticlesNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesNextPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const page = getArticlesPage(getState());
  const isLoading = getArticlesIsLoading(getState());
  const hasMore = getArticlesHasMore(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticles({}));
  }
});
