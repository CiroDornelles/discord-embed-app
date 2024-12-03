import { createTheme } from '@mui/material/styles';
import { colors } from '../colors';
import { baseTheme } from './base';

// Create vampire dark ages theme by extending the base theme
export const vampireDarkAgesTheme = createTheme(baseTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: colors.crimson[600],
      light: colors.crimson[400],
      dark: colors.crimson[800],
      contrastText: colors.neutral[50],
    },
    secondary: {
      main: colors.gold[600],
      light: colors.gold[400],
      dark: colors.gold[800],
      contrastText: colors.neutral[900],
    },
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: {
      default: colors.neutral[900],
      paper: colors.neutral[800],
      darker: colors.neutral[950],
    },
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[300],
      disabled: colors.neutral[500],
    },
  },
  typography: {
    ...baseTheme.typography,
    fontFamily: '"EB Garamond", "Times New Roman", serif',
    h1: {
      ...baseTheme.typography.h1,
      fontFamily: '"Cinzel Decorative", "Times New Roman", serif',
    },
    h2: {
      ...baseTheme.typography.h2,
      fontFamily: '"Cinzel Decorative", "Times New Roman", serif',
    },
    h3: {
      ...baseTheme.typography.h3,
      fontFamily: '"Cinzel Decorative", "Times New Roman", serif',
    },
    h4: {
      ...baseTheme.typography.h4,
      fontFamily: '"Cinzel Decorative", "Times New Roman", serif',
    },
    h5: {
      ...baseTheme.typography.h5,
      fontFamily: '"Cinzel Decorative", "Times New Roman", serif',
    },
    h6: {
      ...baseTheme.typography.h6,
      fontFamily: '"Cinzel Decorative", "Times New Roman", serif',
    },
  },
});
