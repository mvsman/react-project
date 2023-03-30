import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/page-loader';

import { routes } from '../config/router-config';
import { RequireAuth } from './require-auth';

export const AppRouter = memo(() => (
  <div className="page">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path, authOnly }) => (
          <Route
            key={path}
            path={path}
            element={
              authOnly ? (
                <RequireAuth>
                  {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                  <>{element}</>
                </RequireAuth>
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </Suspense>
  </div>
));
