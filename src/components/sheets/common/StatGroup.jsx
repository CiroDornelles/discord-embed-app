import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { StatDots } from './StatDots';

export const StatGroup = ({
  title,
  stats,
  onStatChange,
  maxDots = 5,
  disabled = false
}) => {
  const handleStatChange = (statName) => (newValue) => {
    onStatChange?.(statName, newValue);
  };

  return (
    <Box>
      <Grid container spacing={1}>
        {Object.entries(stats).map(([statName, value]) => (
          <Grid item xs={12} key={statName}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 0.5
            }}>
              <Typography sx={{ 
                textTransform: 'capitalize',
                minWidth: '100px'
              }}>
                {statName.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </Typography>
              <StatDots
                value={value}
                onChange={handleStatChange(statName)}
                max={maxDots}
                disabled={disabled}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
