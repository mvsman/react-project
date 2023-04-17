import { createSelector } from '@reduxjs/toolkit';
import { RoutesPath } from 'app/providers/router/config/router-config';
import { getUserAuthData } from 'entities/user';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/user-profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: RoutesPath.main,
      text: 'main',
      Icon: MainIcon,
    },
    {
      path: RoutesPath.about,
      text: 'about',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: RoutesPath.profile + userData.id,
        text: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutesPath.articles,
        text: 'articles',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
