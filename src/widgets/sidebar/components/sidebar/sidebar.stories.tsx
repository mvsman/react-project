import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Sidebar } from './sidebar';

export default {
  title: 'widgets/sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ user: { authdata: {} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authdata: {} },
  }),
];

export const noAuth = Template.bind({});
noAuth.args = {};
noAuth.decorators = [StoreDecorator({})];
