import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';

import { fetchProfileData } from './fetch-profile-data';

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const data = {
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

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
