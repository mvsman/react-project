import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
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
];
