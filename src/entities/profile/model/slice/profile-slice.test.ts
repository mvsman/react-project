import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { updateProfileData } from '../services/update-profile-data/update-profile-data';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profile-slice';

const data = {
  id: '1',
  name: 'Alex',
  lastname: 'Ivanov',
  age: 19,
  currency: Currency.EUR,
  country: Country.Russia,
  city: 'Sochi',
  username: 'AlexI',
  avatar:
    'https://cdn.dribbble.com/users/1162077/screenshots/7495197/2-cat-programmer_4x.png',
};

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { name: '123' } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      dirty: false,
      data,
      form: data,
      validateErrors: undefined,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { name: 'Alex' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          name: '123',
        })
      )
    ).toEqual({
      dirty: true,
      form: { name: '123' },
    });
  });

  test('test ER updateProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      dirty: true,
      isLoading: false,
      validateErrors: [ValidateProfileError.NO_DATA],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      dirty: false,
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test ER updateProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      isLoading: true,
      readonly: false,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      data,
      form: data,
      validateErrors: undefined,
      readonly: true,
    });
  });
});
