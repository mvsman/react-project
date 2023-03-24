import { Suspense, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { userActions } from 'entities/user';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      {/* i18n translations might still be loaded by the http backend */}
      {/* use react's Suspense */}
      <Suspense fallback="">
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
