import React from 'react';
import { CardContent, CardHeader } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatGroup } from '../common/StatGroup';

export const AdvantageCard = ({
  title,
  stats,
  onStatChange,
  disabled = false
}) => {
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
          title={title}
          stats={stats}
          onStatChange={onStatChange}
          disabled={disabled}
        />
      </CardContent>
    </VampireCard>
  );
};
