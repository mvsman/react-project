import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from 'entities/article';
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
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
    // pagination
    page: 1,
    limit: 12,
    hasMore: true,
    // filters
    inited: false,
    view: 'grid',
    order: 'asc',
    sort: 'createdAt',
    search: '',
    type: 'ALL',
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initView: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_VIEW_KEY) as ArticleView;
      state.view = view;
      state.limit = view === 'grid' ? 12 : 4;
      state.inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, { meta }) => {
        state.error = undefined;
        state.isLoading = true;

        if (meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticles.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.hasMore = payload.length >= state.limit;

        if (meta.arg.replace) {
          articlesAdapter.setAll(state, payload);
        } else {
          articlesAdapter.addMany(state, payload);
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;

export const { actions: articlesPageActions } = articlesPageSlice;
