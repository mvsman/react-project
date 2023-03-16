import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/component-render';

import { Sidebar } from './sidebar';

describe('sidebar', () => {
  test('just render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapse', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('sidebarCollapsed');

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(sidebar.classList.contains('sidebarCollapsed')).toBe(false);
  });
});
