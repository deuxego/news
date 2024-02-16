import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from 'react';

interface Theme {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as Theme);

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};
