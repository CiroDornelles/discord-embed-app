import { createTheme } from '@mui/material/styles';

// Mixins base que podem ser estendidos por outros temas
export const baseMixins = {
  statDots: {
    dot: {
      width: 15,
      height: 15,
      margin: '0 2px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    },
    filled: {
      backgroundColor: 'currentColor',
      '&:hover': {
        opacity: 0.8,
      },
    },
    empty: {
      backgroundColor: 'transparent',
      border: '2px solid currentColor',
      '&:hover': {
        backgroundColor: 'currentColor',
        opacity: 0.3,
      },
    },
  },
  card: {
    root: {
      borderRadius: 8,
      padding: 16,
      height: '100%',
    },
    title: {
      marginBottom: 16,
      fontWeight: 'bold',
    },
    content: {
      padding: 0,
    },
  },
  section: {
    root: {
      marginBottom: 24,
    },
    title: {
      marginBottom: 16,
      fontWeight: 'bold',
    },
  },
};

// Tema base que pode ser estendido por outros temas
const baseTheme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 4,
  },
  mixins: baseMixins,
});

export default baseTheme;
