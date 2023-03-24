import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { StoreManager } from 'app/providers/store-provider';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/store-provider/config/state-schema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

/**
 * Wrapper for components, using asynchronous reducers
 */
export const DynamicModule: FC<DynamicModuleProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as StoreManager;

  useEffect(() => {
    // async load reducer
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
