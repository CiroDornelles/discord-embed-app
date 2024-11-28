import React from 'react';
import { Card, CardContent, TextField, Typography, Box } from '@mui/material';

const PersonalityCard = ({ data, onDataChange }) => {
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
          Personalidade
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Natureza"
            fullWidth
            variant="outlined"
            value={data.nature}
            onChange={handleChange('nature')}
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
            label="Comportamento"
            fullWidth
            variant="outlined"
            value={data.demeanor}
            onChange={handleChange('demeanor')}
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
            label="Conceito"
            fullWidth
            variant="outlined"
            value={data.concept}
            onChange={handleChange('concept')}
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

export default PersonalityCard;
