import { StateSchema } from 'app/providers/store-provider';
import { getProfileDirty } from './get-profile-dirty';

describe('getProfileDirty.test', () => {
  test('should return dirty flag', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        dirty: true,
      },
    };
    expect(getProfileDirty(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileDirty(state as StateSchema)).toEqual(undefined);
  });
});
