import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'shared/contexts';

export const ThemeDecorator = (theme: Theme) =>
  // eslint-disable-next-line func-names
  function (Story: Story) {
    return (
      <ThemeProvider initTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
