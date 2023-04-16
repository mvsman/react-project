import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { Comment } from 'entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) {
    return rejectWithValue('error');
  }

  try {
    const { data } = await extra.api.get<Comment[]>('comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    });

    if (!data) throw new Error();

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
