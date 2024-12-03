import { createTheme } from '@mui/material/styles';

// Create base theme with all required configurations
const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': {
        minHeight: 64,
      },
    },
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "rgba(0,0,0,.3) transparent",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 8,
            height: 8,
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,.3)",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "rgba(0,0,0,.4)",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "rgba(0,0,0,.4)",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(0,0,0,.4)",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

// Add the pxToRem utility function to the theme
baseTheme.typography.pxToRem = (size) => `${size / 16}rem`;

// Export the enhanced theme
export { baseTheme };
