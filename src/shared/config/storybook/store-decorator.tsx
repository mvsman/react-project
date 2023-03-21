import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) =>
  // eslint-disable-next-line func-names
  function (Story: Story) {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
