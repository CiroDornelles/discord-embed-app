import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b0000',
      light: '#bc2f2f',
      dark: '#5c0000',
    },
    secondary: {
      main: '#2f2f2f',
      light: '#4f4f4f',
      dark: '#1f1f1f',
    },
    background: {
      default: '#000000',
      paper: 'rgba(20, 20, 20, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundColor: '#000000',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'vampireTitle' },
          style: {
            color: '#8b0000',
            fontFamily: 'MedievalSharp, cursive',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1em',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-0.5em',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #8b0000, transparent)',
            }
          }
        },
        {
          props: { variant: 'sectionTitle' },
          style: {
            color: '#8b0000',
            fontFamily: 'MedievalSharp, cursive',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.5em',
            fontSize: '1.25rem',
            fontWeight: 600
          }
        },
        {
          props: { variant: 'cardTitle' },
          style: {
            color: '#8b0000',
            fontFamily: 'MedievalSharp, cursive',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '1rem',
            fontWeight: 500
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(139, 0, 0, 0.2)',
          padding: '1rem',
          margin: '0.5rem',
          border: '1px solid rgba(139, 0, 0, 0.3)',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            '& fieldset': {
              borderColor: 'rgba(139, 0, 0, 0.5)',
            },
            '&:hover fieldset': {
              borderColor: '#8b0000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8b0000',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiInputBase-input': {
            color: '#ffffff',
          }
        }
      }
    }
  }
});

export default theme;
