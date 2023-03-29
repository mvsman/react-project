import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { ProfileCard } from './profile-card';

export default {
  title: 'entities/profile-card',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const profile = {
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

export const Default = Template.bind({});
Default.args = {
  profile,
};

export const withError = Template.bind({});
withError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
  profile,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
