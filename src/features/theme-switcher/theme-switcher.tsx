import { memo } from 'react';

import { cn } from 'shared/lib';
import { useTheme, Theme } from 'shared/contexts';
import { Button } from 'shared/components/button';

import MoonIcon from './icons/moon.svg';
import SunIcon from './icons/sun.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(
  ({ className, ...props }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
      <Button
        onClick={toggleTheme}
        className={cn('', {}, [className])}
        theme="clean"
        {...props}
      >
        {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
      </Button>
    );
  }
);
