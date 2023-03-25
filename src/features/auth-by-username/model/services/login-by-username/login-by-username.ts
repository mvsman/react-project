import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { User, userActions } from 'entities/user';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface loginByUsernameArgs {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameArgs,
  ThunkConfig<string>
>('login/loginByUsername', async (authData: loginByUsernameArgs, thunkApi) => {
  const { dispatch, extra, rejectWithValue } = thunkApi;

  try {
    const { data } = await extra.api.post<User>('/login', authData);

    if (!data) throw new Error();

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
    dispatch(userActions.setAuthData(data));

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
