import React from 'react';
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import { CardCoverflow } from './CardCoverflow';

export const AdaptiveCardLayout = ({ 
  cards,
  spacing = 4,
  minCardWidth = 300, // Largura mínima para cada card no modo grid
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return <CardCoverflow cards={cards} />;
  }

  return (
    <Grid 
      container 
      spacing={spacing}
      sx={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      {cards.map((card, index) => (
        <Grid 
          item 
          key={index}
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            '& > *': { // Aplica aos filhos diretos (os cards)
              width: '100%',
              minWidth: minCardWidth,
              maxWidth: '100%',
            }
          }}
        >
          {card}
        </Grid>
      ))}
    </Grid>
  );
};
