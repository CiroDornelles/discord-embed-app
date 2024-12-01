import React, { useState, useEffect } from 'react';
import { CssBaseline, Box, Fab } from '@mui/material';
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
    <>
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
        bgcolor: 'background.default'
      }}>
        <CharacterSheet />
        {showDiceRoller && <DiceRoller onClose={() => setShowDiceRoller(false)} />}
        <Fab
          color="primary"
          aria-label="dice"
          onClick={() => setShowDiceRoller(!showDiceRoller)}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          🎲
        </Fab>
      </Box>
    </>
  );
}

export default App;