import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { AttributesCard } from './AttributesCard';
import { AbilitiesCard } from './AbilitiesCard';
import { AdvantagesCard } from './AdvantagesCard';
import { VitalityCard } from './VitalityCard';
import CharacterInformationCard from './CharacterInformationCard';

export const V20DarkAgesSheet = ({
  characterData,
  onCharacterDataChange,
  disabled = false
}) => {
  const handleFieldChange = (section, field, value) => {
    onCharacterDataChange?.({
      ...characterData,
      [section]: {
        ...characterData[section],
        [field]: value
      }
    });
  };

  const handleNestedFieldChange = (section, category, field, value) => {
    onCharacterDataChange?.({
      ...characterData,
      [section]: {
        ...characterData[section],
        [category]: {
          ...characterData[section][category],
          [field]: value
        }
      }
    });
  };

  const handleAbilityChange = (category, ability, value) => {
    onCharacterDataChange?.({
      ...characterData,
      abilities: {
        ...characterData.abilities,
        [category]: {
          ...characterData.abilities?.[category],
          [ability]: {
            ...characterData.abilities?.[category]?.[ability],
            value
          }
        }
      }
    });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <CharacterInformationCard
              {...characterData.basicInfo}
              onFieldChange={(field, value) => handleFieldChange('basicInfo', field, value)}
              disabled={disabled}
            />
          </Grid>

          <Grid item xs={12}>
            <AttributesCard
              {...characterData.attributes}
              onAttributeChange={(category, attribute, value) =>
                handleNestedFieldChange('attributes', category, attribute, value)
              }
              disabled={disabled}
            />
          </Grid>

          <Grid item xs={12}>
            <AbilitiesCard
              onAbilityChange={handleAbilityChange}
              disabled={disabled}
            />
          </Grid>

          <Grid item xs={12}>
            <AdvantagesCard
              {...characterData.advantages}
              onAdvantageChange={(category, advantage, value) =>
                handleNestedFieldChange('advantages', category, advantage, value)
              }
              disabled={disabled}
            />
          </Grid>

          <Grid item xs={12}>
            <VitalityCard
              {...characterData.vitality}
              onVitalityChange={(field, value) => handleFieldChange('vitality', field, value)}
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
