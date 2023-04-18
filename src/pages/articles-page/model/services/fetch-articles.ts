import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const { data } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
      },
    });

    if (!data) throw new Error();

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
