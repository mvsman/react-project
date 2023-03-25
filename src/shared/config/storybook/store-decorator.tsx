import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { profileReducer } from 'entities/profile';
import { loginReducer } from 'features/auth-by-username';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) =>
  // eslint-disable-next-line func-names
  function (Story: Story) {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
