import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { getArticlesInited } from '../selectors';
import { articlesPageActions } from '../slices/articles-page-slice';
import { fetchArticles } from './fetch-articles';

export const initArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticles',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const inited = getArticlesInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initView());
      dispatch(fetchArticles({}));
    }
  }
);
