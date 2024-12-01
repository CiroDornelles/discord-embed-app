import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { mixins } from './mixins';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary.main,
      dark: colors.primary.dark,
      light: colors.primary.light,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography,
  spacing: spacing.unit,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          borderRadius: 8,
          border: `1px solid ${colors.border.primary}`,
          padding: spacing.card.padding,
          ...mixins.cardHover,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: mixins.inputField,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        },
      },
    },
  },
  mixins,
});

export { colors, typography, spacing, mixins };
