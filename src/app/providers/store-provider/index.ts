import { StoreProvider } from './components/store-provider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateSchema,
  StoreManager,
  ThunkConfig,
} from './config/state-schema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  StoreManager,
  AppDispatch,
  ThunkConfig,
};
