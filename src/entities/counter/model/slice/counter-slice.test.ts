import { CounterSchema } from '../types/counter-schema';
import { counterActions, counterReducer } from './counter-slice';

describe('counterSlice', () => {
  test('no state', () => {
    // initialState value = 0
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });

  test('increment', () => {
    const state: CounterSchema = {
      value: 0,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 1,
    });
  });

  test('decrement', () => {
    const state: CounterSchema = {
      value: 0,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: -1,
    });
  });
});
