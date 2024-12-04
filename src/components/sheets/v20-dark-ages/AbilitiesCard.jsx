import React from 'react';
import { CardContent, CardHeader, CircularProgress, Box } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AbilityCard } from './AbilityCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';
import { useAbilities } from '../../../hooks/useAbilities';

export const AbilitiesCard = ({
  onAbilityChange,
  disabled = false
}) => {
  const { abilityData, loading, error } = useAbilities();

  const handleAbilityChange = (category) => (ability, value) => {
    onAbilityChange?.(category, ability, value);
  };

  if (loading) {
    return (
      <VampireCard>
        <CardHeader title="Abilities" />
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" p={4}>
            <CircularProgress />
          </Box>
        </CardContent>
      </VampireCard>
    );
  }

  if (error) {
    return (
      <VampireCard>
        <CardHeader title="Abilities" />
        <CardContent>
          <Box color="error.main" p={2}>
            Error loading abilities data. Please try again.
          </Box>
        </CardContent>
      </VampireCard>
    );
  }

  const abilityCards = [
    <AbilityCard
      key="talents"
      title="Talents"
      stats={abilityData.talents}
      onStatChange={handleAbilityChange('talents')}
      disabled={disabled}
    />,
    <AbilityCard
      key="skills"
      title="Skills"
      stats={abilityData.skills}
      onStatChange={handleAbilityChange('skills')}
      disabled={disabled}
    />,
    <AbilityCard
      key="knowledges"
      title="Knowledges"
      stats={abilityData.knowledges}
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
