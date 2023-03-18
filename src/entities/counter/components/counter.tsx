/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/components/button';
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value">{value}</h1>
      <Button data-testid="increment" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
