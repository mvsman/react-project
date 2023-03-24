import { lazy } from 'react';

export const ProfilePageLazy = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./profile-page')), 1000);
    })
);
