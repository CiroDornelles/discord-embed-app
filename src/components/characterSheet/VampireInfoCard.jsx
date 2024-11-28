import React from 'react';
import { Card, CardContent, TextField, Typography, Box } from '@mui/material';

const VampireInfoCard = ({ data, onDataChange }) => {
  const handleChange = (field) => (event) => {
    onDataChange(field, event.target.value);
  };

  return (
    <Card 
      elevation={3} 
      sx={{ 
        backgroundColor: 'background.paper',
        borderRadius: 2,
        border: '1px solid #3d0000',
        height: '100%',
        minWidth: '250px'
      }}
    >
      <CardContent>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mb: 3,
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
          Informações Vampíricas
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Clã"
            fullWidth
            variant="outlined"
            value={data.clan}
            onChange={handleChange('clan')}
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3d0000',
                },
                '&:hover fieldset': {
                  borderColor: '#8b0000',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3d0000',
              }
            }}
          />
          <TextField
            label="Senhor"
            fullWidth
            variant="outlined"
            value={data.sire}
            onChange={handleChange('sire')}
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3d0000',
                },
                '&:hover fieldset': {
                  borderColor: '#8b0000',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3d0000',
              }
            }}
          />
          <TextField
            label="Geração"
            fullWidth
            variant="outlined"
            value={data.generation}
            onChange={handleChange('generation')}
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3d0000',
                },
                '&:hover fieldset': {
                  borderColor: '#8b0000',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3d0000',
              }
            }}
          />
          <TextField
            label="Tipo de Predador"
            fullWidth
            variant="outlined"
            value={data.predator}
            onChange={handleChange('predator')}
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3d0000',
                },
                '&:hover fieldset': {
                  borderColor: '#8b0000',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3d0000',
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default VampireInfoCard;
