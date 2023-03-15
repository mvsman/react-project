import { Story } from '@storybook/react';
import { Theme } from 'shared/contexts';

export const ThemeDecorator = (theme: Theme) =>
  // eslint-disable-next-line func-names
  function (Story: Story) {
    return (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
  };
