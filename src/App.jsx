import React, { useState, useCallback } from 'react';
import { Box, CssBaseline, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeSwitcher } from './components/common/ThemeSwitcher';
import { V20DarkAgesSheet } from './components/sheets/v20-dark-ages/V20DarkAgesSheet';
import ThemePreview from './design/ThemePreview';
import { SHEET_TYPES, getInitialCharacterData } from './components/sheets/SheetTypes';

function App() {
  const [characterData, setCharacterData] = useState(() => 
    getInitialCharacterData(SHEET_TYPES.V20_DARK_AGES)
  );

  const handleCharacterDataChange = useCallback((newData) => {
    setCharacterData(newData);
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Router>
        <Box 
          component="main"
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
          }}
        >
          <Box 
            component="nav"
            sx={{ 
              position: 'fixed', 
              top: 16, 
              right: 16, 
              zIndex: 1000 
            }}
          >
            <ThemeSwitcher />
          </Box>
          <Box sx={{ p: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Button component={Link} to="/" sx={{ mr: 2 }}>
                Character Sheet
              </Button>
              <Button component={Link} to="/theme">
                Theme Preview
              </Button>
            </Box>
            
            <Routes>
              <Route path="/" element={
                <Box 
                  component="article"
                  sx={{ 
                    flex: 1,
                    p: 3,
                    mt: 2
                  }}
                >
                  <V20DarkAgesSheet 
                    characterData={characterData}
                    onCharacterDataChange={handleCharacterDataChange}
                  />
                </Box>
              } />
              <Route path="/theme" element={<ThemePreview />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;