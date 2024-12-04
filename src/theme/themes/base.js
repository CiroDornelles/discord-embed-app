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
  mixins: {
    statDots: {
      dot: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '2px solid',
        margin: '0 2px',
      },
      filled: {
        backgroundColor: 'currentColor',
      }
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '1rem',
      fontWeight: 600,
    },
    sectionTitle: {
      fontFamily: '"Cinzel Decorative", serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: 24,
      borderBottom: '1px solid',
      borderColor: 'divider',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'relative',
          borderRadius: theme.shape.borderRadius * 2,
          border: `1px solid ${theme.palette.divider}`,
          overflow: 'visible',
          transition: theme.transitions.create(
            ['box-shadow', 'transform', 'border-color'],
            {
              duration: theme.transitions.duration.shorter,
            }
          ),
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -1,
            left: -1,
            right: -1,
            bottom: -1,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}40, transparent)`,
            borderRadius: 'inherit',
            zIndex: 0,
            transition: theme.transitions.create('opacity', {
              duration: theme.transitions.duration.shorter,
            }),
            opacity: 0.5,
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[8],
            '&::before': {
              opacity: 1,
            },
          },
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'relative',
          zIndex: 1,
          padding: theme.spacing(3),
          backgroundColor: theme.palette.background.paper,
          '&:last-child': {
            paddingBottom: theme.spacing(3),
          },
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'relative',
          zIndex: 1,
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(2, 3),
          '& .MuiTypography-root': {
            fontFamily: '"Cinzel Decorative", serif',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2),
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.paper,
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
              borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused': {
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`,
            },
          },
        }),
      },
    },
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
          backgroundColor: 'background.default',
          backgroundImage: 'none',
        },
        '.swiper': {
          width: '100%',
          padding: '50px 0',
        },
        '.swiper-slide': {
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          '&-active': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s',
          }
        },
        '.swiper-pagination': {
          position: 'relative',
          marginTop: '20px',
        },
      },
    },
  },
});

export { baseTheme };
