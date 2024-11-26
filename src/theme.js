import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b0000',
      light: '#a31515',
      dark: '#660000',
    },
    secondary: {
      main: '#3d2929',
      light: '#4d3535',
      dark: '#2d1f1f',
    },
    background: {
      default: '#0a0606',
      paper: '#1f1616',
    },
    text: {
      primary: '#d4d4d4',
      secondary: '#a19898',
    },
  },
  typography: {
    fontFamily: '"Crimson Text", serif',
    h1: {
      fontFamily: '"Crimson Text", serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: '"Crimson Text", serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: '"Crimson Text", serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: '"Crimson Text", serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: '"Crimson Text", serif',
      letterSpacing: '0.1em',
    },
    h6: {
      fontFamily: '"Crimson Text", serif',
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 8,
          border: '1px solid #3d2929',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #8b0000, transparent)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, transparent 100%)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(139, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3d2929',
            },
            '&:hover fieldset': {
              borderColor: '#8b0000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8b0000',
            },
          },
        },
      },
    },
  },
});

export default theme;
