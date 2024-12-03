import { createTheme } from '@mui/material/styles';
import { colors } from '../colors';
import { baseTheme } from './base';

// Create light theme by extending the base theme
export const lightTheme = createTheme(baseTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: colors.neutral[900], 
      light: colors.neutral[700],
      dark: colors.neutral[900],
      contrastText: colors.neutral[50],
    },
    secondary: {
      main: colors.gold[700],
      light: colors.gold[500],
      dark: colors.gold[900],
      contrastText: colors.neutral[900],
    },
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: {
      default: colors.neutral[100],
      paper: colors.neutral[50],
      darker: colors.neutral[200],
    },
    text: {
      primary: colors.neutral[900], 
      secondary: colors.neutral[900], 
      disabled: colors.neutral[700],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.neutral[900], 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.neutral[900], 
        },
      },
    },
  },
  mixins: {
    ...baseTheme.mixins,
    statDots: {
      ...baseTheme.mixins.statDots,
      dot: {
        ...baseTheme.mixins.statDots.dot,
        borderColor: colors.neutral[900], 
      },
      filled: {
        ...baseTheme.mixins.statDots.filled,
        backgroundColor: colors.neutral[900], 
      },
      empty: {
        ...baseTheme.mixins.statDots.empty,
        borderColor: colors.neutral[900], 
        '&:hover': {
          backgroundColor: colors.neutral[900], 
          opacity: 0.3,
        },
      },
    },
  },
});
