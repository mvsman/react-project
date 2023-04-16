import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/about-page';
import { ArticleDetailsPage } from 'pages/article-details-page';
import { ArticlesPage } from 'pages/articles-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { ProfilePage } from 'pages/profile-page';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.NOT_FOUND]: '*',
};

export const routes: AppRoutesProps[] = [
  {
    path: RoutesPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutesPath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  {
    path: `${RoutesPath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutesPath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: `${RoutesPath[AppRoutes.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: RoutesPath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
