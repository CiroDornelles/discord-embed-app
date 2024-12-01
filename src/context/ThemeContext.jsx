import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { themes } from '../theme/themes';

const ThemeContext = createContext({
  currentThemeType: 'vampireDarkAges',
  theme: themes.vampireDarkAges,
  setTheme: () => {},
  availableThemes: Object.keys(themes),
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentThemeType, setCurrentThemeType] = useState(() => {
    const savedTheme = localStorage.getItem('preferredTheme');
    return savedTheme && themes[savedTheme] ? savedTheme : 'vampireDarkAges';
  });

  const [theme, setThemeObject] = useState(() => themes[currentThemeType]);

  const setTheme = useCallback((newThemeType) => {
    if (themes[newThemeType]) {
      setCurrentThemeType(newThemeType);
      setThemeObject(themes[newThemeType]);
      localStorage.setItem('preferredTheme', newThemeType);
    }
  }, []);

  const value = {
    currentThemeType,
    theme,
    setTheme,
    availableThemes: Object.keys(themes),
  };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
