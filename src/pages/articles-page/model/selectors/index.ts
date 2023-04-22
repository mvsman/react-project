import { StateSchema } from 'app/providers/store-provider';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesView = (state: StateSchema) =>
  state.articlesPage?.view || 'grid';

export const getArticlesPage = (state: StateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesLimit = (state: StateSchema) =>
  state.articlesPage?.limit;

export const getArticlesHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;
