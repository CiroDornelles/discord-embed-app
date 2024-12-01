import React from 'react';
import { CardContent, CardHeader, Grid } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { VampireTextField } from '../../ui/VampireTextField';

export const BasicInfoCard = ({ 
  characterName,
  player,
  chronicle,
  nature,
  demeanor,
  concept,
  clan,
  generation,
  sire,
  onFieldChange,
  disabled = false 
}) => {
  const handleChange = (field) => (event) => {
    onFieldChange?.(field, event.target.value);
  };

  return (
    <VampireCard>
      <CardHeader title="Basic Information" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Character Name"
              value={characterName}
              onChange={handleChange('characterName')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Player"
              value={player}
              onChange={handleChange('player')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Chronicle"
              value={chronicle}
              onChange={handleChange('chronicle')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Nature"
              value={nature}
              onChange={handleChange('nature')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Demeanor"
              value={demeanor}
              onChange={handleChange('demeanor')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Concept"
              value={concept}
              onChange={handleChange('concept')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VampireTextField
              fullWidth
              label="Clan"
              value={clan}
              onChange={handleChange('clan')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <VampireTextField
              fullWidth
              label="Generation"
              value={generation}
              onChange={handleChange('generation')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <VampireTextField
              fullWidth
              label="Sire"
              value={sire}
              onChange={handleChange('sire')}
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </CardContent>
    </VampireCard>
  );
};
