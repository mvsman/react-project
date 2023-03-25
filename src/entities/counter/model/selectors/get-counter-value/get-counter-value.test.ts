import { StateSchema } from 'app/providers/store-provider';
import { getCounterValue } from './get-counter-value';

describe('getCounter', () => {
  test('counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(0);
  });
});
