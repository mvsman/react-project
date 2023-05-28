import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import {
  getArticlesLimit,
  getArticlesSort,
  getArticlesOrder,
  getArticlesSearch,
  getArticlesPage,
} from '../selectors';

interface fetchArticlesArgs {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesArgs,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async ({ replace }, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const page = getArticlesPage(getState());
  const limit = getArticlesLimit(getState());
  const sort = getArticlesSort(getState());
  const order = getArticlesOrder(getState());
  const search = getArticlesSearch(getState());

  try {
    const { data } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
      },
    });

    if (!data) throw new Error();

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
