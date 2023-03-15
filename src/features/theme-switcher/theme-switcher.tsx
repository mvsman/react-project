import { FC } from 'react';

import { cn } from 'shared/lib';
import { useTheme, Theme } from 'shared/contexts';
import { Button, ButtonTheme } from 'shared/components/button';

import MoonIcon from './icons/moon.svg';
import SunIcon from './icons/sun.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  className,
  ...props
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={cn('', {}, [className])}
      theme={ButtonTheme.CLEAN}
      {...props}
    >
      {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
