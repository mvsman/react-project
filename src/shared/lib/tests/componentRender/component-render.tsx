import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'app/i18n/i18n-test';

export interface componentRenderOptions {
  route?: string;
}

export const componentRender = (
  component: ReactNode,
  { route = '/' }: componentRenderOptions = {}
) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </MemoryRouter>
  );
