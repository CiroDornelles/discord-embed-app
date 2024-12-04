import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { StatDots } from './StatDots';

export const StatGroup = ({
  stats,
  onStatChange,
  disabled = false
}) => {
  const handleStatChange = (statName) => (newValue) => {
    onStatChange?.(statName, newValue);
  };

  // Convert stats object to array if it's not already an array
  const statsArray = Array.isArray(stats) 
    ? stats 
    : Object.entries(stats).map(([name, data]) => ({
        name,
        label: data.name || name.charAt(0).toUpperCase() + name.slice(1), // Use localized name if available
        value: data.value || 0,
        max: data.max || 5 // Default max value
      }));

  return (
    <Box>
      <Grid container spacing={1}>
        {statsArray.map((stat) => (
          <Grid item xs={12} key={stat.name}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 0.5
            }}>
              <Typography sx={{ 
                minWidth: '120px',
                '& > span': {
                  cursor: 'help'
                }
              }}>
                {stat.label}
              </Typography>
              <StatDots
                value={stat.value}
                maxDots={stat.max}
                onChange={handleStatChange(stat.name)}
                disabled={disabled}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
