import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/user';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface loginByUsernameArgs {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameArgs,
  { rejectValue: string }
>('login/loginByUsername', async (authData: loginByUsernameArgs, thunkAPI) => {
  try {
    const { data } = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    );

    if (!data) throw new Error();

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
    thunkAPI.dispatch(userActions.setAuthData(data));

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});