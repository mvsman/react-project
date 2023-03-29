import { StateSchema } from 'app/providers/store-provider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './get-profile-validate-errors';

describe('getProfileValidateErrors.test', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_USERNAME,
          ValidateProfileError.INCORRECT_CITY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
