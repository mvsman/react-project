import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found-page';
import { ProfilePage } from 'pages/profile-page';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
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
    path: RoutesPath[AppRoutes.PROFILE],
    element: <ProfilePage />,
  },
  {
    path: RoutesPath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
