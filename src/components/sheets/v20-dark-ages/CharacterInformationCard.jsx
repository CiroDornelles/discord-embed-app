import React from 'react';
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: '"Cinzel Decorative", serif',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
  },
}));

const CharacterInformationCard = ({ 
  characterName,
  player,
  chronicle,
  nature,
  demeanor,
  clan,
  concept,
  generation,
  sire,
  onFieldChange,
  disabled = false
}) => {
  const handleChange = (field) => (event) => {
    onFieldChange?.(field, event.target.value);
  };

  return (
    <>
      <StyledCard>
        <CardContent>
          <SectionTitle variant="h5">CHARACTER INFORMATION</SectionTitle>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Character Name"
                value={characterName || ''}
                onChange={handleChange('characterName')}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Player"
                value={player || ''}
                onChange={handleChange('player')}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Chronicle"
                value={chronicle || ''}
                onChange={handleChange('chronicle')}
                disabled={disabled}
              />
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <SectionTitle variant="h5">PERSONALITY</SectionTitle>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Nature"
                value={nature || ''}
                onChange={handleChange('nature')}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Demeanor"
                value={demeanor || ''}
                onChange={handleChange('demeanor')}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Clan"
                value={clan || ''}
                onChange={handleChange('clan')}
                disabled={disabled}
              />
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <SectionTitle variant="h5">BACKGROUND</SectionTitle>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Concept"
                value={concept || ''}
                onChange={handleChange('concept')}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Generation"
                value={generation || ''}
                onChange={handleChange('generation')}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Sire"
                value={sire || ''}
                onChange={handleChange('sire')}
                disabled={disabled}
              />
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default CharacterInformationCard;
