import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { Article, ArticleView } from 'entities/article';
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/const/localstorage';
import { ArticlesPageSchema } from '../types/articles-page-schema';
import { fetchArticles } from '../services/fetch-articles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: 'grid',
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initView: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_VIEW_KEY) as ArticleView;
      state.view = view;
      state.limit = view === 'grid' ? 12 : 4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;

export const { actions: articlesPageActions } = articlesPageSlice;
