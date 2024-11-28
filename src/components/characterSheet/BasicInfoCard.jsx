import React from 'react';
import { Card, CardContent, TextField, Typography, Box } from '@mui/material';

const BasicInfoCard = ({ data, onChange }) => {
  const handleChange = (field) => (event) => {
    onChange(field, event.target.value);
  };

  return (
    <Card 
      elevation={3} 
      sx={{ 
        backgroundColor: '#000000',
        borderRadius: 2,
        border: '1px solid #3d0000',
        height: '100%',
        minWidth: '250px',
        display: 'flex',
        flexDirection: 'column',
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
        backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <CardContent sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mb: 4,
            color: '#8b0000',
            fontFamily: 'MedievalSharp, cursive',
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              width: '20%',
              height: '2px',
              backgroundColor: '#8b0000',
            },
            '&::before': {
              left: 0,
            },
            '&::after': {
              right: 0,
            },
          }}
        >
          Informações Básicas
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 4,
          flex: 1,
          justifyContent: 'space-evenly'
        }}>
          <TextField
            label="Nome"
            fullWidth
            value={data.nome}
            onChange={handleChange('nome')}
            variant="outlined"
          />
          <TextField
            label="Jogador"
            fullWidth
            value={data.jogador}
            onChange={handleChange('jogador')}
            variant="outlined"
          />
          <TextField
            label="Crônica"
            fullWidth
            value={data.cronica}
            onChange={handleChange('cronica')}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BasicInfoCard;
