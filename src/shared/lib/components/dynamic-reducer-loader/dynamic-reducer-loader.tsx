import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { StoreManager } from 'app/providers/store-provider';
import { StateSchemaKey } from 'app/providers/store-provider/config/state-schema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicReducerLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

/**
 * Wrapper for components, using asynchronous reducers
 */
export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as StoreManager;

  useEffect(() => {
    // async load reducer
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
