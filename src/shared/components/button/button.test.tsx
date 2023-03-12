import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('button', () => {
  test('just render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('button has the variant class', () => {
    render(<Button variant="primary">test</Button>);
    expect(screen.getByText('test')).toHaveClass('primary');
  });
});
