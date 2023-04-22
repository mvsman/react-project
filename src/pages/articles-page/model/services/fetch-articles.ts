import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import { getArticlesLimit } from '../selectors';

interface fetchArticlesProps {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesProps,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = args;
  const limit = getArticlesLimit(getState());

  try {
    const { data } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
      },
    });

    if (!data) throw new Error();

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
