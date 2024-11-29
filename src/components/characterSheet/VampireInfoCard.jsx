import React from 'react';
import { Card, CardContent, TextField, Typography, Box } from '@mui/material';

const VampireInfoCard = ({ data, onChange }) => {
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
          Info Vampíricas
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 4,
          flex: 1,
          justifyContent: 'space-evenly'
        }}>
          <TextField
            label="Clã"
            fullWidth
            value={data.cla}
            onChange={handleChange('cla')}
            variant="outlined"
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
                color: '#8b0000',
              }
            }}
          />
          <TextField
            label="Geração"
            fullWidth
            value={data.geracao}
            onChange={handleChange('geracao')}
            variant="outlined"
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
                color: '#8b0000',
              }
            }}
          />
          <TextField
            label="Senhor"
            fullWidth
            value={data.senhor}
            onChange={handleChange('senhor')}
            variant="outlined"
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
                color: '#8b0000',
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default VampireInfoCard;
