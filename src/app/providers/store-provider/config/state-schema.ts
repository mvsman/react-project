import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-username';
import { ArticleDetailsSchema } from 'entities/article';
import { ArticleDetailsCommentsSchema } from 'pages/article-details-page';
import { AddCommentFormShema } from 'features/add-comment-form';
import { ArticlesPageSchema } from 'pages/articles-page';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormShema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
