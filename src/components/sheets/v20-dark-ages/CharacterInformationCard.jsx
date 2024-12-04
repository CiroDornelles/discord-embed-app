import React from 'react';
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';
import CharacterInfoLayout from './CharacterInfoLayout';

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
    <CharacterInfoLayout>
      <Card sx={{ backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, height: '100%' }}>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: '"Cinzel Decorative", serif', color: 'primary.main', marginBottom: 3, padding: 1, borderBottom: `1px solid ${'divider'}` }}>CHARACTER INFORMATION</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Character Name"
                value={characterName || ''}
                onChange={handleChange('characterName')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Player"
                value={player || ''}
                onChange={handleChange('player')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Chronicle"
                value={chronicle || ''}
                onChange={handleChange('chronicle')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, height: '100%' }}>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: '"Cinzel Decorative", serif', color: 'primary.main', marginBottom: 3, padding: 1, borderBottom: `1px solid ${'divider'}` }}>PERSONALITY</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nature"
                value={nature || ''}
                onChange={handleChange('nature')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Demeanor"
                value={demeanor || ''}
                onChange={handleChange('demeanor')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Clan"
                value={clan || ''}
                onChange={handleChange('clan')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, height: '100%' }}>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: '"Cinzel Decorative", serif', color: 'primary.main', marginBottom: 3, padding: 1, borderBottom: `1px solid ${'divider'}` }}>BACKGROUND</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Concept"
                value={concept || ''}
                onChange={handleChange('concept')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Generation"
                value={generation || ''}
                onChange={handleChange('generation')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sire"
                value={sire || ''}
                onChange={handleChange('sire')}
                disabled={disabled}
                sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { backgroundColor: 'background.paper' } }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </CharacterInfoLayout>
  );
};

export default CharacterInformationCard;
