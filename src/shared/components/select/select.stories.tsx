import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Select } from './select';

export default {
  title: 'shared/select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2',
        value: '2',
      },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
  label: 'Label',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Label',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
