import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './components/thema';
import CharacterSheet from './components/characterSheet/CharacterSheet';

function App() {
  const [sdk, setSdk] = useState(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('frame_id')) {
      setSdk(new DiscordSDK('1310531993469190164'));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default
      }}>
        <CharacterSheet />
      </Box>
    </ThemeProvider>
  );
}

export default App;