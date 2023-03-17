import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Modal } from './modal';

export default {
  title: 'shared/modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Modal content',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Modal content',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
