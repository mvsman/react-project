import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { I18nextProvider } from 'react-i18next';
import i18n from 'app/i18n/i18n-test';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  component: ReactNode,
  { route = '/', initialState }: componentRenderOptions = {}
) =>
  render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
