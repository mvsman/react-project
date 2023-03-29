import { StateSchema } from 'app/providers/store-provider';
import { getProfileError } from './get-profile-error';

describe('getProfileError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as StateSchema)).toBe('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
