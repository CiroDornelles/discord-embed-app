import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, Fab } from '@mui/material';
import theme from './components/thema';
import CharacterSheet from './components/characterSheet/CharacterSheet';
import DiceRoller from './components/DiceRoller/DiceRoller';

function App() {
  const [sdk, setSdk] = useState(null);
  const [showDiceRoller, setShowDiceRoller] = useState(false);

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
        
        {/* Botão flutuante para abrir o rolador de dados */}
        <Fab
          color="primary"
          aria-label="roll dice"
          onClick={() => setShowDiceRoller(!showDiceRoller)}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          🎲
        </Fab>

        {/* Modal do rolador de dados */}
        {showDiceRoller && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 80,
              right: 16,
              zIndex: 1000,
            }}
          >
            <DiceRoller />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;