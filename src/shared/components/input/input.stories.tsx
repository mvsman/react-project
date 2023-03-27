import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Input } from './input';

export default {
  title: 'shared/input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const LightWithProps = Template.bind({});
LightWithProps.args = {
  label: 'Label',
  placeholder: 'placeholder',
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithProps = Template.bind({});
DarkWithProps.args = {
  label: 'Label',
  placeholder: 'placeholder',
};
DarkWithProps.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};
