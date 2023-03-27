import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './avatar';

export default {
  title: 'shared/avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: 'https://cdn.dribbble.com/users/1162077/screenshots/7495197/2-cat-programmer_4x.png',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Square = Template.bind({});
Square.args = {
  isCircle: false,
};

export const SquareBig = Template.bind({});
SquareBig.args = {
  isCircle: false,
  size: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  isCircle: true,
};

export const CircleBig = Template.bind({});
Circle.args = {
  isCircle: true,
  size: 200,
};

export const Empty = Template.bind({});
Empty.args = {
  src: '',
};
