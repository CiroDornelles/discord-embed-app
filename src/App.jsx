import { useState } from 'react';
import { V20DarkAgesSheet } from './components/sheets/v20-dark-ages/V20DarkAgesSheet';
import { SHEET_TYPES, getInitialCharacterData } from './components/sheets/SheetTypes';
import { Box } from '@mui/material';

function App() {
  const [characterData, setCharacterData] = useState(
    getInitialCharacterData(SHEET_TYPES.V20_DARK_AGES)
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: 'background.default',
      color: 'text.primary'
    }}>
      <V20DarkAgesSheet
        characterData={characterData}
        onCharacterDataChange={setCharacterData}
      />
    </Box>
  );
}

export default App;