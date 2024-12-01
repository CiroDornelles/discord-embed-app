import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { mixins } from './mixins';
import { getTheme } from './themes';

// Tipos de tema disponíveis
export const themeTypes = {
  DARK: 'dark',
  LIGHT: 'light',
  VAMPIRE_DARK_AGES: 'vampireDarkAges'
};

// Configurações base do tema
const baseTheme = createTheme({
  typography: typography,
  shape: {
    borderRadius: 4,
  },
  spacing: spacing.unit,
});

export const theme = createTheme(baseTheme, {
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

// Função para obter o tema atual
export const getCurrentTheme = (themeType = themeTypes.VAMPIRE_DARK_AGES) => {
  return getTheme(themeType);
};

// Exporta o tema padrão
export default getCurrentTheme();
