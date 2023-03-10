import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'shared/components/page-loader';

import { routes } from '../config/router-config';

export const AppRouter = () => (
  <div className="page">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);
