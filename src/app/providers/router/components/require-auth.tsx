// https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from 'entities/user';
import { RoutesPath } from '../config/router-config';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutesPath.main} state={{ from: location }} replace />;
  }

  return children;
};
