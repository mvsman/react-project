import { StateSchema } from 'app/providers/store-provider';
import { initialState } from '../../slice/login-slice';

export const getLoginState = (state: StateSchema) =>
  state.loginForm || initialState;
