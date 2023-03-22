import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/component-render/component-render';
import { Counter } from './counter';

describe('counter', () => {
  test('render counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    expect(screen.getByTestId('value')).toHaveTextContent('0');
  });

  test('increment action', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('value')).toHaveTextContent('1');
  });

  test('decrement action', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    userEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('value')).toHaveTextContent('-1');
  });
});
