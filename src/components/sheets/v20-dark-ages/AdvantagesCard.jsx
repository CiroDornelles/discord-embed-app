import React from 'react';
import { CardContent, CardHeader } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AdvantageCard } from './AdvantageCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';

export const AdvantagesCard = ({
  backgrounds,
  disciplines,
  virtues,
  onAdvantageChange,
  disabled = false
}) => {
  const handleAdvantageChange = (category) => (advantage, value) => {
    onAdvantageChange?.(category, advantage, value);
  };

  const advantageCards = [
    <AdvantageCard
      key="backgrounds"
      title="Backgrounds"
      stats={backgrounds}
      onStatChange={handleAdvantageChange('backgrounds')}
      disabled={disabled}
    />,
    <AdvantageCard
      key="disciplines"
      title="Disciplines"
      stats={disciplines}
      onStatChange={handleAdvantageChange('disciplines')}
      disabled={disabled}
    />,
    <AdvantageCard
      key="virtues"
      title="Virtues"
      stats={virtues}
      onStatChange={handleAdvantageChange('virtues')}
      disabled={disabled}
    />
  ];

  return (
    <VampireCard>
      <CardHeader title="Advantages" />
      <CardContent>
        <AdaptiveCardLayout 
          cards={advantageCards}
          spacing={4}
          minCardWidth={300}
        />
      </CardContent>
    </VampireCard>
  );
};
