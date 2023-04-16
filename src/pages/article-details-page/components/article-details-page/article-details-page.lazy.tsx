import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./article-details-page')), 1000);
    })
);
