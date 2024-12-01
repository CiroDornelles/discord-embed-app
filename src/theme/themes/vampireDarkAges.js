import { createTheme, alpha } from '@mui/material/styles';

export const vampireDarkAgesTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b0000',
      light: '#b71c1c',
      dark: '#4a0404',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4a0404',
      light: '#6d1313',
      dark: '#2c0202',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
      elevated: alpha('#1a1a1a', 0.9),
    },
    text: {
      primary: '#ffffff',
      secondary: alpha('#ffffff', 0.7),
    },
    action: {
      hover: alpha('#8b0000', 0.04),
      selected: alpha('#8b0000', 0.08),
      disabled: alpha('#ffffff', 0.3),
      focus: alpha('#8b0000', 0.12),
    },
    divider: alpha('#8b0000', 0.12),
  },
  typography: {
    fontFamily: '"MedievalSharp", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'MedievalSharp, cursive',
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'MedievalSharp, cursive',
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'MedievalSharp, cursive',
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'MedievalSharp, cursive',
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'MedievalSharp, cursive',
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'MedievalSharp, cursive',
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.03em',
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: '0.03em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#8b0000 #000000',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#8b0000',
            minHeight: 24,
          },
          '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
            backgroundColor: '#000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius * 2,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          transition: theme.transitions.create(['box-shadow', 'transform'], {
            duration: theme.transitions.duration.standard,
          }),
          '&:hover': {
            boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
            transform: 'translateY(-2px)',
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root': {
            backgroundColor: alpha(theme.palette.background.paper, 0.6),
            transition: theme.transitions.create([
              'background-color',
              'box-shadow',
              'border-color',
            ]),
            '&:hover': {
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
            },
            '&.Mui-focused': {
              backgroundColor: theme.palette.background.paper,
              boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
            },
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          transition: theme.transitions.create([
            'background-color',
            'box-shadow',
            'border-color',
            'color',
          ]),
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.95),
          color: theme.palette.text.primary,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          boxShadow: theme.shadows[4],
          fontSize: '0.875rem',
          maxWidth: 300,
          padding: theme.spacing(1.5),
        }),
        arrow: ({ theme }) => ({
          color: alpha(theme.palette.background.paper, 0.95),
        }),
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    `0 2px 4px ${alpha('#000000', 0.2)}`,
    `0 4px 8px ${alpha('#000000', 0.2)}`,
    `0 8px 16px ${alpha('#000000', 0.2)}`,
    `0 12px 24px ${alpha('#000000', 0.2)}`,
    `0 16px 32px ${alpha('#000000', 0.2)}`,
  ],
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});
