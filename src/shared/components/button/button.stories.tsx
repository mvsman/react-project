import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Button, ButtonSize, ButtonTheme } from './button';

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
  theme: ButtonTheme.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'Button',
  size: ButtonSize.L,
  theme: ButtonTheme.OUTLINE,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: 'Button',
  size: ButtonSize.XL,
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const background = Template.bind({});
background.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
};

export const backgroundInvert = Template.bind({});
backgroundInvert.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERT,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  square: true,
  size: ButtonSize.M,
  theme: ButtonTheme.BACKGROUND_INVERT,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  square: true,
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERT,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  square: true,
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERT,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  disabled: true,
};
