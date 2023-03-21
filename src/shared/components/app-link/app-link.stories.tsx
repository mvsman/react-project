import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { AppLink } from './app-link';

export default {
  title: 'shared/app-link',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Light = Template.bind({});
Light.args = {
  children: 'Link',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Link',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
