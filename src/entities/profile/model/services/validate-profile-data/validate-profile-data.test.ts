import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { ValidateProfileError } from '../../types/profile';

import { validateProfileData } from './validate-profile-data';

describe('validateProfileData.test', () => {
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

  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('required fields error', async () => {
    const result = validateProfileData({
      ...data,
      name: '',
      lastname: '',
      age: 0,
      username: '',
      city: '',
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_NAME,
      ValidateProfileError.INCORRECT_LASTNAME,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
