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

export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: 'outline',
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'Button',
  size: 'size_l',
  theme: 'outline',
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: 'Button',
  size: 'size_xl',
  theme: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const background = Template.bind({});
background.args = {
  children: 'Button',
  theme: 'background',
};

export const backgroundInvert = Template.bind({});
backgroundInvert.args = {
  children: 'Button',
  theme: 'backgroundInvert',
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  square: true,
  size: 'size_m',
  theme: 'backgroundInvert',
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  square: true,
  size: 'size_l',
  theme: 'backgroundInvert',
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  square: true,
  size: 'size_xl',
  theme: 'backgroundInvert',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  disabled: true,
};
