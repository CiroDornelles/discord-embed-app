import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import CharacterSheet from './components/CharacterSheet/header';
import { DiscordSDK } from '@discord/embedded-app-sdk';
import theme from './theme';
import './fonts.css';

// Inicializa o SDK apenas se estivermos dentro do Discord
let sdk = null;
if (new URLSearchParams(window.location.search).has('frame_id')) {
  sdk = new DiscordSDK('1310531993469190164');
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.default',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1200,
            m: 2,
            p: 2,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -2,
              border: '2px solid',
              borderColor: 'secondary.main',
              borderRadius: 1,
              background: theme => `
                linear-gradient(to right, ${theme.palette.primary.main} 2px, transparent 2px) 0 0 no-repeat,
                linear-gradient(to bottom, ${theme.palette.primary.main} 2px, transparent 2px) 0 0 no-repeat,
                linear-gradient(to left, ${theme.palette.primary.main} 2px, transparent 2px) 100% 0 no-repeat,
                linear-gradient(to bottom, ${theme.palette.primary.main} 2px, transparent 2px) 100% 0 no-repeat,
                linear-gradient(to left, ${theme.palette.primary.main} 2px, transparent 2px) 100% 100% no-repeat,
                linear-gradient(to top, ${theme.palette.primary.main} 2px, transparent 2px) 100% 100% no-repeat,
                linear-gradient(to right, ${theme.palette.primary.main} 2px, transparent 2px) 0 100% no-repeat,
                linear-gradient(to top, ${theme.palette.primary.main} 2px, transparent 2px) 0 100% no-repeat
              `,
              backgroundSize: '30px 30px',
              pointerEvents: 'none',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: -15,
              background: theme => `
                radial-gradient(circle at 0 0, transparent 15px, ${theme.palette.primary.main} 16px, transparent 17px) 0 0,
                radial-gradient(circle at 100% 0, transparent 15px, ${theme.palette.primary.main} 16px, transparent 17px) 100% 0,
                radial-gradient(circle at 100% 100%, transparent 15px, ${theme.palette.primary.main} 16px, transparent 17px) 100% 100%,
                radial-gradient(circle at 0 100%, transparent 15px, ${theme.palette.primary.main} 16px, transparent 17px) 0 100%
              `,
              backgroundSize: '30px 30px',
              backgroundRepeat: 'no-repeat',
              pointerEvents: 'none',
              opacity: 0.5,
            }
          }}
        >
          <CharacterSheet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
