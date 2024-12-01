import React from 'react';
import { CardContent, CardHeader, Grid, useTheme, useMediaQuery } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { VampireTextField } from '../../ui/VampireTextField';
import { StatCarousel } from '../common/StatCarousel';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (field) => (event) => {
    onFieldChange?.(field, event.target.value);
  };

  const cards = [
    // Card 1: Character Information
    <VampireCard>
      <CardHeader title="Character Information" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Character Name"
              value={characterName}
              onChange={handleChange('characterName')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Player"
              value={player}
              onChange={handleChange('player')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Chronicle"
              value={chronicle}
              onChange={handleChange('chronicle')}
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </CardContent>
    </VampireCard>,

    // Card 2: Personality
    <VampireCard>
      <CardHeader title="Personality" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Nature"
              value={nature}
              onChange={handleChange('nature')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Demeanor"
              value={demeanor}
              onChange={handleChange('demeanor')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Clan"
              value={clan}
              onChange={handleChange('clan')}
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </CardContent>
    </VampireCard>,

    // Card 3: Background
    <VampireCard>
      <CardHeader title="Background" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Concept"
              value={concept}
              onChange={handleChange('concept')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12}>
            <VampireTextField
              fullWidth
              label="Generation"
              value={generation}
              onChange={handleChange('generation')}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12}>
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
  ];

  return (
    <>
      {isMobile ? (
        <StatCarousel items={cards} />
      ) : (
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              {card}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
