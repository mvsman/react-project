import { TestAsyncThunk } from 'shared/lib';
import { userActions } from 'entities/user';

import { loginByUsername } from './login-by-username';

jest.mock('axios');

describe('loginByUsername.test', () => {
  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });

  //   test('success login', async () => {
  //     const user = { username: 'admin', id: '1' };

  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));
  //     const action = loginByUsername({ username: 'admin', password: '123' });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));

  //     expect(result.meta.requestStatus).toBe('fulfilled');
  //     expect(result.payload).toEqual(user);
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //   });

  //   test('error login (403)', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //     const action = loginByUsername({ username: 'admin', password: '123' });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe('rejected');
  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //   });

  test('success login', async () => {
    const user = { username: 'admin', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: user }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(user);

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('error login (403)', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
