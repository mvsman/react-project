import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PageLoader } from 'widgets/page-loader';
import { getUserAuthData } from 'entities/user';

import { routes } from '../config/router-config';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const appRoutes = useMemo(
    () => routes.filter((route) => !(route.authOnly && !isAuth)),
    [isAuth]
  );

  return (
    <div className="page">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {appRoutes.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
});
