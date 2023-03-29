import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import ProfilePage from './profile-page';

export default {
  title: 'pages/profile-page',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const form = {
  name: 'Alex',
  lastname: 'Ivanov',
  age: 19,
  currency: Currency.EUR,
  country: Country.Russia,
  city: 'Sochi',
  username: 'AlexI',
  avatar:
    'https://cdn.dribbble.com/users/1162077/screenshots/7495197/2-cat-programmer_4x.png',
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form,
    },
  }),
];
