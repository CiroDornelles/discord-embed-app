import React from 'react';
import { CardContent, CardHeader, Typography, Tooltip, Box } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatGroup } from '../common/StatGroup';

export const AttributeCard = ({
  title,
  stats,
  onStatChange,
  disabled = false
}) => {
  const renderAttributeName = (attribute, attributeData) => (
    <Tooltip
      title={
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {attributeData.name}
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
            {attributeData.description}
          </Typography>
        </Box>
      }
      arrow
    >
      <span>{attributeData.name}</span>
    </Tooltip>
  );

  const formattedStats = Object.entries(stats).map(([key, data]) => ({
    name: key,
    label: renderAttributeName(key, data),
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
          title={title}
          stats={formattedStats}
          onStatChange={onStatChange}
          disabled={disabled}
        />
      </CardContent>
    </VampireCard>
  );
};
