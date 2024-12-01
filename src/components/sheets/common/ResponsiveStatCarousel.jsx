import React from 'react';
import { Grid, useTheme, useMediaQuery } from '@mui/material';
import { StatCarousel } from './StatCarousel';

export const ResponsiveStatCarousel = ({ items }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return <StatCarousel items={items} />;
  }

  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};
