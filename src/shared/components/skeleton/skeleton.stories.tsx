import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Skeleton } from './skeleton';

export default {
  title: 'shared/skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 150,
  width: 150,
};

export const Cirlce = Template.bind({});
Cirlce.args = {
  height: 150,
  width: 150,
  borderRadius: '50%',
};

export const Dark = Template.bind({});
Dark.args = {
  height: 150,
  width: 150,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  height: 150,
  width: 150,
  borderRadius: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
