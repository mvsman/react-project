// eslint-disable-next-line object-curly-newline
import { FC, createContext, useState, useMemo } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

interface ThemeProviderProps {
  initTheme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

// eslint-disable-next-line operator-linebreak
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initTheme }) => {
  const [theme, setTheme] = useState<Theme>(initTheme ?? defaultTheme);

  const defaultValues = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
