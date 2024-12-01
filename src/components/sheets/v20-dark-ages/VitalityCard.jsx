import React from 'react';
import { CardContent, CardHeader } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';
import { MeritsFlawsCard } from './MeritsFlawsCard';
import { ResourcesCard } from './ResourcesCard';
import { HealthCard } from './HealthCard';

export const VitalityCard = ({
  // Merits & Flaws
  merits = [],
  flaws = [],
  onMeritsChange,
  onFlawsChange,
  // Resources
  path = { current: 0, max: 10 },
  bloodPool = { current: 0, max: 20 },
  willpower = { permanent: 0, temporary: Array(10).fill(false) },
  onPathChange,
  onBloodPoolChange,
  onWillpowerChange,
  // Health
  health = Array(8).fill(false),
  onHealthChange,
  disabled = false
}) => {
  const vitalityCards = [
    <MeritsFlawsCard
      key="merits-flaws"
      merits={merits}
      flaws={flaws}
      onMeritsChange={onMeritsChange}
      onFlawsChange={onFlawsChange}
      disabled={disabled}
    />,
    <ResourcesCard
      key="resources"
      path={path}
      bloodPool={bloodPool}
      willpower={willpower}
      onPathChange={onPathChange}
      onBloodPoolChange={onBloodPoolChange}
      onWillpowerChange={onWillpowerChange}
      disabled={disabled}
    />,
    <HealthCard
      key="health"
      health={health}
      onHealthChange={onHealthChange}
      disabled={disabled}
    />
  ];

  return (
    <VampireCard>
      <CardHeader title="Vitality" />
      <CardContent>
        <AdaptiveCardLayout 
          cards={vitalityCards}
          spacing={4}
          minCardWidth={300}
        />
      </CardContent>
    </VampireCard>
  );
};
