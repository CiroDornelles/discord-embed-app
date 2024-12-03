import { createTheme } from '@mui/material/styles';
import { colors } from '../colors';
import { baseTheme } from './base';

// Create dark theme by extending the base theme
export const darkTheme = createTheme(baseTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: colors.crimson[500],
      light: colors.crimson[300],
      dark: colors.crimson[700],
      contrastText: colors.neutral[50],
    },
    secondary: {
      main: colors.gold[500],
      light: colors.gold[300],
      dark: colors.gold[700],
      contrastText: colors.neutral[900],
    },
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: {
      default: colors.neutral[900],
      paper: colors.neutral[800],
      darker: colors.neutral[700],
    },
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[300],
      disabled: colors.neutral[500],
    },
  },
});
