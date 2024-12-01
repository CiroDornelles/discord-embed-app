import React from 'react';
import { CardContent, CardHeader } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AbilityCard } from './AbilityCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';

export const AbilitiesCard = ({
  talents,
  skills,
  knowledges,
  onAbilityChange,
  disabled = false
}) => {
  const handleAbilityChange = (category) => (ability, value) => {
    onAbilityChange?.(category, ability, value);
  };

  const abilityCards = [
    <AbilityCard
      key="talents"
      title="Talents"
      stats={talents}
      onStatChange={handleAbilityChange('talents')}
      disabled={disabled}
    />,
    <AbilityCard
      key="skills"
      title="Skills"
      stats={skills}
      onStatChange={handleAbilityChange('skills')}
      disabled={disabled}
    />,
    <AbilityCard
      key="knowledges"
      title="Knowledges"
      stats={knowledges}
      onStatChange={handleAbilityChange('knowledges')}
      disabled={disabled}
    />
  ];

  return (
    <VampireCard>
      <CardHeader title="Abilities" />
      <CardContent>
        <AdaptiveCardLayout 
          cards={abilityCards}
          spacing={4}
          minCardWidth={300}
        />
      </CardContent>
    </VampireCard>
  );
};
