import { StateSchema } from 'app/providers/store-provider';
import { getProfileLoading } from './get-profile-loading';

describe('getProfileLoading.test', () => {
  test('should return isLoading flag', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileLoading(state as StateSchema)).toBe(undefined);
  });
});
