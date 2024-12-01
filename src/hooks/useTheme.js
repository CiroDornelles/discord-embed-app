import { useState, useCallback, useEffect } from 'react';
import { themes } from '../theme/themes';

// Hook para gerenciar o tema atual
export const useTheme = () => {
  // Get available themes
  const availableThemes = Object.keys(themes);
  
  // Initialize theme from localStorage or default
  const [currentThemeType, setCurrentThemeType] = useState(() => {
    const savedTheme = localStorage.getItem('preferredTheme');
    const defaultTheme = 'vampireDarkAges';
    return savedTheme && themes[savedTheme] ? savedTheme : defaultTheme;
  });

  // Get current theme object
  const [currentTheme, setCurrentTheme] = useState(() => themes[currentThemeType]);

  // Theme change handler
  const setTheme = useCallback((newThemeType) => {
    if (!themes[newThemeType]) {
      console.error(`Theme ${newThemeType} not found in available themes:`, availableThemes);
      return;
    }

    // Update both the theme type and the theme object
    setCurrentThemeType(newThemeType);
    setCurrentTheme(themes[newThemeType]);
    localStorage.setItem('preferredTheme', newThemeType);
  }, [availableThemes]);

  // Effect to update theme object when theme type changes
  useEffect(() => {
    setCurrentTheme(themes[currentThemeType]);
  }, [currentThemeType]);

  // Effect to sync with localStorage changes
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'preferredTheme' && e.newValue !== currentThemeType) {
        const newTheme = e.newValue;
        if (themes[newTheme]) {
          setCurrentThemeType(newTheme);
          setCurrentTheme(themes[newTheme]);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [currentThemeType]);

  // Return theme context
  return {
    theme: currentTheme,
    currentThemeType,
    setTheme,
    availableThemes
  };
};
