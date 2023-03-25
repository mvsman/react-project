import { LoginSchema } from '../types/login-schema';
import { loginActions, loginReducer } from './login-slice';

describe('loginSlice.test', () => {
  test('test setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('asd'))
    ).toEqual({ username: 'asd' });
  });

  test('test setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123'))
    ).toEqual({ password: '123' });
  });
});
