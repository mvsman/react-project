import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Button } from './button';

export default {
  title: 'shared/button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clean = Template.bind({});
Clean.args = {
  children: 'Button',
  variant: 'clean',
};
