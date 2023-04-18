import { StateSchema } from 'app/providers/store-provider';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesView = (state: StateSchema) =>
  state.articlesPage?.view || 'grid';
