import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Navbar } from './navbar';

export default {
  title: 'widgets/navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    user: {},
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {},
  }),
];
