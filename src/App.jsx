import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { DiscordSDK } from '@discord/embedded-app-sdk';
import theme from './theme';

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
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the App
        </Typography>
        {/* Add your content here */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
