import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/components/button';
import { Input } from 'shared/components/input';

import styles from './login-form.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const username = target.username.value;
    const password = target.password.value;
    console.log(username, password);
    console.log(form);
  };

  const onChangeUsername = (username: string) => {
    setForm((prev) => ({
      ...prev,
      username,
    }));
  };

  const onChangePassword = (password: string) => {
    setForm((prev) => ({
      ...prev,
      password,
    }));
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        type="text"
        name="username"
        label={t('username')}
        autoFocus
        value={form.username}
        onChange={onChangeUsername}
      />
      <Input
        type="password"
        name="password"
        label={t('password')}
        value={form.password}
        onChange={onChangePassword}
      />
      <Button className={styles.button} type="submit">
        {t('signIn')}
      </Button>
    </form>
  );
};
