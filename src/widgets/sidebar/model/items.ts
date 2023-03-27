import { FunctionComponent, SVGAttributes } from 'react';
import { RoutesPath } from 'app/providers/router/config/router-config';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/user-profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
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
  {
    path: RoutesPath.profile,
    text: 'profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
