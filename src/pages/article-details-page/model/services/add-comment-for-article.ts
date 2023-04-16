import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { getArticleDetailsData } from 'entities/article/model/selectors';
import { Comment } from 'entities/comment';
import { getUserAuthData } from 'entities/user';
import { fetchCommentsByArticleId } from './fetch-comments-by-article-id';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { dispatch, extra, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData && !text && !article) {
    return rejectWithValue('no data');
  }

  try {
    const { data } = await extra.api.post<Comment>('/comments', {
      articleId: article?.id,
      userId: userData?.id,
      text,
    });

    if (!data) throw new Error();

    dispatch(fetchCommentsByArticleId(article?.id));

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
