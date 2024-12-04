import React from 'react';
import { CardContent, CardHeader, Typography, Tooltip, Box } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatGroup } from '../common/StatGroup';

export const AbilityCard = ({
  title,
  stats,
  onStatChange,
  disabled = false
}) => {
  const renderAbilityName = (ability, abilityData) => (
    <Tooltip
      title={
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {abilityData.name} ({abilityData.nameOriginal})
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
            {abilityData.flavorText}
          </Typography>
          <Typography variant="body2">
            {abilityData.description}
          </Typography>
        </Box>
      }
      arrow
    >
      <span>{abilityData.name}</span>
    </Tooltip>
  );

  const formattedStats = Object.entries(stats).map(([key, data]) => ({
    name: key,
    label: renderAbilityName(key, data),
    value: data.value || 0,
    max: 5
  }));

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
        <StatGroup
          stats={formattedStats}
          onStatChange={onStatChange}
          disabled={disabled}
        />
      </CardContent>
    </VampireCard>
  );
};
