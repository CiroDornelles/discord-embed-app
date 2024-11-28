import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      textAlign: 'center',
      mb: isMobile ? 1 : 2,
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        component="h1"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mb: 0.5,
          fontSize: isMobile ? '1.5rem' : '2.125rem',
        }}
      >
        Vampiro: Dark Ages
      </Typography>
      <Typography 
        variant={isMobile ? "subtitle1" : "h6"}
        sx={{
          color: '#3d0000',
          fontFamily: 'MedievalSharp, cursive',
          fontSize: isMobile ? '0.875rem' : '1.25rem',
        }}
      >
        20º Aniversário
      </Typography>
    </Box>
  );
};

export default Header;
