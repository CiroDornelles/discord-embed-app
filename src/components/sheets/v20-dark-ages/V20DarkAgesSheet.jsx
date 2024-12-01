import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BasicInfoCard } from '../common/BasicInfoCard';
import { AttributesCard } from './AttributesCard';
import { AbilitiesCard } from './AbilitiesCard';
import { AdvantagesCard } from './AdvantagesCard';
import { VitalityCard } from './VitalityCard';

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

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BasicInfoCard
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
              {...characterData.abilities}
              onAbilityChange={(category, ability, value) => 
                handleNestedFieldChange('abilities', category, ability, value)
              }
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
              onVitalityChange={(field, value) => 
                handleFieldChange('vitality', field, value)
              }
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
