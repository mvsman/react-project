import { lazy } from 'react';

export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./about-page')), 1000);
    })
);
