import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';
import { ValidateProfileError } from '../../types/profile';

import { updateProfileData } from './update-profile-data';

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

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, name: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_NAME]);
  });
});
