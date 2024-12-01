import React, { memo, useCallback } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MemoizedTextField } from '../common/MemoizedFormFields';
import { useCharacter } from '../../contexts/CharacterContext';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#000000',
  borderRadius: theme.spacing(2),
  border: '1px solid #3d0000',
  height: '100%',
  minWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 8px rgba(139, 0, 0, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(139, 0, 0, 0.3)',
    transform: 'translateY(-2px)',
  },
  '& .MuiInputBase-input': {
    color: '#ffffff',
  },
  '& .MuiInputLabel-root': {
    color: '#8b0000',
    fontFamily: 'MedievalSharp, cursive',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#000000',
    transition: 'all 0.2s ease-in-out',
    '& fieldset': {
      borderColor: '#3d0000',
    },
    '&:hover fieldset': {
      borderColor: '#8b0000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8b0000',
      borderWidth: '2px',
    },
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  '&:last-child': {
    paddingBottom: theme.spacing(3),
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
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
}));

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
    <StyledCard elevation={3}>
      <StyledCardContent>
        <StyledTitle variant="h6">
          Informações Básicas
        </StyledTitle>
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
      </StyledCardContent>
    </StyledCard>
  );
});

BasicInfoCard.displayName = 'BasicInfoCard';

export default BasicInfoCard;
