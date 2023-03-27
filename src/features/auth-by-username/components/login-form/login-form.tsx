import { memo, SyntheticEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Button } from 'shared/components/button';
import { Input } from 'shared/components/input';
import { Text } from 'shared/components/text';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';

import { loginActions, loginReducer } from '../../model/slice/login-slice';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import {
  getLoginUsername,
  getLoginError,
  getLoginLoading,
  getLoginPassword,
} from '../../model/selectors';

import styles from './login-form.module.scss';

const usedReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, password, username]
  );

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  return (
    <DynamicReducerLoader reducers={usedReducers}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Text title={t('auth')} />
        {error && <Text text={t('invalidAuthData')} theme="error" />}
        <Input
          type="text"
          name="username"
          label={t('username')}
          autoFocus
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          type="password"
          name="password"
          label={t('password')}
          value={password}
          onChange={onChangePassword}
        />
        <Button className={styles.button} type="submit" disabled={isLoading}>
          {t('signIn')}
        </Button>
      </form>
    </DynamicReducerLoader>
  );
});

export default LoginForm;
