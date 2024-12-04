import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StatDots } from './StatDots';

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0.5, 0)
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  minWidth: 120,
  '& > span': {
    cursor: 'help'
  }
}));

export const StatGroup = ({
  stats = {}, // Default to an empty object to prevent undefined errors
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
        max: data.max || 5, // Default max value
        descriptions: data.levels || {} // Use levels for descriptions
      }));

  return (
    <Box>
      <Grid container spacing={1}>
        {statsArray.map((stat) => (
          <Grid item xs={12} key={stat.name}>
            <StatItem>
              <StatLabel>
                {stat.label}
              </StatLabel>
              <StatDots
                value={stat.value}
                max={stat.max}
                onChange={handleStatChange(stat.name)}
                disabled={disabled}
                descriptions={stat.descriptions}
              />
            </StatItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
