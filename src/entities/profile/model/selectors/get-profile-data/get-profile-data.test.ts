import { StateSchema } from 'app/providers/store-provider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { getProfileData } from './get-profile-data';

describe('getProfileData.test', () => {
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

  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
