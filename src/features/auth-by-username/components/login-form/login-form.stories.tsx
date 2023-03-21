import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { LoginForm } from './login-form';

export default {
  title: 'features/login-form',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

const storeDecorator = (error = '') =>
  StoreDecorator({
    loginForm: { username: 'username', password: 'password', error },
  });

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [storeDecorator()];

export const DefaultError = Template.bind({});
DefaultError.args = {};
DefaultError.decorators = [storeDecorator('Error')];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), storeDecorator()];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [ThemeDecorator(Theme.DARK), storeDecorator('Error')];
