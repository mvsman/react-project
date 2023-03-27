import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store-provider';
import { getProfileForm } from '../../selectors';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());

  try {
    const { data } = await extra.api.put<Profile>('/profile', formData);

    if (!data) throw new Error();

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
