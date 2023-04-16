import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./articles-page')), 1000);
    })
);
