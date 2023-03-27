import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/contexts';

import { Text } from './text';

export default {
  title: 'shared/text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text',
};

export const TextTitle = Template.bind({});
TextTitle.args = {
  title: 'Title',
  text: 'Text',
};

export const TextTitleAlign = Template.bind({});
TextTitle.args = {
  title: 'Title',
  text: 'Text',
  align: 'center',
};

export const TextTitleError = Template.bind({});
TextTitleError.args = {
  title: 'Title',
  text: 'Text',
  theme: 'error',
};

export const TextTitleDark = Template.bind({});
TextTitleDark.args = {
  title: 'Title',
  text: 'Text',
};
TextTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
