import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b0000',
      light: '#b71c1c',
      dark: '#3d0000',
    },
    secondary: {
      main: '#4a0404',
      light: '#6d1b1b',
      dark: '#2c0000',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: 'MedievalSharp, cursive',
      color: '#8b0000',
    },
    h2: {
      fontFamily: 'MedievalSharp, cursive',
      color: '#8b0000',
    },
    h3: {
      fontFamily: 'MedievalSharp, cursive',
      color: '#8b0000',
    },
    h4: {
      fontFamily: 'MedievalSharp, cursive',
      color: '#8b0000',
    },
    h5: {
      fontFamily: 'MedievalSharp, cursive',
      color: '#8b0000',
    },
    h6: {
      fontFamily: 'MedievalSharp, cursive',
      color: '#8b0000',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3d0000',
            },
            '&:hover fieldset': {
              borderColor: '#8b0000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#b71c1c',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#8b0000',
          },
          '& .MuiInputBase-input': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d2d2d',
          backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          boxShadow: '0 0 10px rgba(139, 0, 0, 0.3)',
        },
      },
    },
  },
});

export default theme;
