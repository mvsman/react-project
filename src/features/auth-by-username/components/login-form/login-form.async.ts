import { lazy } from 'react';

export const LoginFormAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./login-form')), 1000);
    })
);
