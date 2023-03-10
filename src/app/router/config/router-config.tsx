import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found-page';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routes: RouteProps[] = [
  {
    path: RoutesPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutesPath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  {
    path: RoutesPath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
