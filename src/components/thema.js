import { createTheme } from '@mui/material/styles';

const gothicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b0000', // Vermelho escuro
    },
    secondary: {
      main: '#3d0000', // Vermelho mais escuro
    },
    purple: {
      main: '#9c27b0', // Mantendo roxo apenas para as bolinhas
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8b0000',
    }
  },
  typography: {
    fontFamily: '"Roboto", "MedievalSharp", cursive',
    h1: {
      fontFamily: 'MedievalSharp, cursive',
    },
    h2: {
      fontFamily: 'MedievalSharp, cursive',
    },
    h3: {
      fontFamily: 'MedievalSharp, cursive',
    },
    h4: {
      fontFamily: 'MedievalSharp, cursive',
    },
    h5: {
      fontFamily: 'MedievalSharp, cursive',
    },
    h6: {
      fontFamily: 'MedievalSharp, cursive',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          borderRadius: 8,
          border: '1px solid #3d0000',
        },
      },
    },
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
              borderColor: '#8b0000',
            },
          },
        },
      },
    },
  },
});

export default gothicTheme;