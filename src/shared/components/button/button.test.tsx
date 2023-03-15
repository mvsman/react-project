import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './button';

describe('button', () => {
  test('just render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('button has the theme class', () => {
    render(<Button theme={ButtonTheme.CLEAN}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clean');
  });
});
