// eslint-disable-next-line object-curly-newline
import { FC, createContext, useState, useMemo, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';

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

// eslint-disable-next-line operator-linebreak
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const bodyNode = document.body;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initTheme }) => {
  const [theme, setTheme] = useState<Theme>(initTheme ?? defaultTheme);

  const defaultValues = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    bodyNode.setAttribute('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
