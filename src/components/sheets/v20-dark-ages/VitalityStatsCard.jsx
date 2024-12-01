import React from 'react';
import { CardContent, CardHeader, Box, Typography } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

const VitalityStatsCard = ({
  title,
  stats,
  onStatChange,
  disabled = false
}) => {
  const handleStatChange = (stat) => (value) => {
    onStatChange?.(stat, value);
  };

  return (
    <VampireCard sx={{ 
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardHeader title={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        {Object.entries(stats).map(([statName, stat]) => (
          <Box key={statName} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {statName === 'bloodPool' 
                ? `Blood Pool (${stat.current}/${stat.max})`
                : `${statName.charAt(0).toUpperCase() + statName.slice(1)} (${stat.current}/${stat.max})`
              }
            </Typography>
            <StatDots
              value={stat.current}
              max={stat.max}
              onChange={handleStatChange(statName)}
              disabled={disabled}
            />
          </Box>
        ))}
      </CardContent>
    </VampireCard>
  );
};
