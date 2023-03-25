import { StateSchema } from 'app/providers/store-provider';
import { getCounter } from './get-counter';

describe('getCounter', () => {
  test('counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
  });
});
