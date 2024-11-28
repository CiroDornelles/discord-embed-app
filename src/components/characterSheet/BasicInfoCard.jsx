import React from 'react';
import { Paper, TextField, Box, Typography } from '@mui/material';

const BasicInfoCard = ({ data, onDataChange }) => {
  const handleChange = (field) => (event) => {
    onDataChange(field, event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ 
      p: 3,
      backgroundColor: 'background.paper',
      borderRadius: 2,
      border: '1px solid #3d0000',
      height: '100%',
      minWidth: '250px'
    }}>
      <Typography variant="h6" sx={{ 
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
      }}>
        Informações Básicas
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2 
      }}>
        <TextField
          label="Nome"
          value={data.name}
          onChange={handleChange('name')}
          variant="outlined"
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
          label="Jogador"
          value={data.player}
          onChange={handleChange('player')}
          variant="outlined"
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
          label="Crônica"
          value={data.chronicle}
          onChange={handleChange('chronicle')}
          variant="outlined"
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
          label="Natureza"
          value={data.nature}
          onChange={handleChange('nature')}
          variant="outlined"
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
          value={data.demeanor}
          onChange={handleChange('demeanor')}
          variant="outlined"
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
          value={data.concept}
          onChange={handleChange('concept')}
          variant="outlined"
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
          label="Clã"
          value={data.clan}
          onChange={handleChange('clan')}
          variant="outlined"
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
          value={data.generation}
          onChange={handleChange('generation')}
          variant="outlined"
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
          value={data.sire}
          onChange={handleChange('sire')}
          variant="outlined"
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
          value={data.predator}
          onChange={handleChange('predator')}
          variant="outlined"
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
    </Paper>
  );
};

export default BasicInfoCard;
