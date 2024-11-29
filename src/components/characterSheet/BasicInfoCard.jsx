import React, { memo, useCallback } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { MemoizedTextField } from '../common/MemoizedFormFields';
import { useCharacter } from '../../contexts/CharacterContext';

const BasicInfoCard = memo(() => {
  const { character, updateCharacterInfo } = useCharacter();
  const { basicInfo } = character;

  const handleChange = useCallback((field) => (event) => {
    updateCharacterInfo({
      basicInfo: {
        ...basicInfo,
        [field]: event.target.value
      }
    });
  }, [basicInfo, updateCharacterInfo]);

  return (
    <Card 
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000000',
        borderRadius: 2,
        border: '1px solid #3d0000',
        backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        '& .MuiInputBase-input': {
          color: '#ffffff',
        },
        '& .MuiInputLabel-root': {
          color: '#8b0000',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#3d0000',
          },
          '&:hover fieldset': {
            borderColor: '#8b0000',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#8b0000',
          },
        },
      }}
    >
      <CardContent>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#8b0000',
            fontFamily: 'MedievalSharp, cursive',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1em',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-0.5em',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #8b0000, transparent)',
            }
          }}
        >
          Informações Básicas
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <MemoizedTextField
            label="Nome"
            value={basicInfo.nome}
            onChange={handleChange('nome')}
            fullWidth
          />
          <MemoizedTextField
            label="Jogador"
            value={basicInfo.jogador}
            onChange={handleChange('jogador')}
            fullWidth
          />
          <MemoizedTextField
            label="Crônica"
            value={basicInfo.cronica}
            onChange={handleChange('cronica')}
            fullWidth
          />
        </Box>
      </CardContent>
    </Card>
  );
});

BasicInfoCard.displayName = 'BasicInfoCard';

export default BasicInfoCard;
