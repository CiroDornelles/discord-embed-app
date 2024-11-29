import React from 'react';
import { Box, Paper, Typography, TextField, Grid, Checkbox } from '@mui/material';
import DotRating from './DotRating';
import WillpowerUnit from './WillpowerUnit';

const CharacterStatusSection = () => {
  const renderMeritsFlaws = () => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        backgroundColor: '#000000',
        borderRadius: 2,
        border: '1px solid #3d0000',
        backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mb: 2
        }}
      >
        Qualidades/Defeitos
      </Typography>
      {[...Array(10)].map((_, index) => (
        <TextField
          key={index}
          fullWidth
          variant="standard"
          sx={{
            '& .MuiInputBase-input': {
              color: '#fff',
              borderBottom: '1px solid #3d0000',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: '#3d0000',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#8b0000',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#8b0000',
            },
          }}
        />
      ))}
    </Paper>
  );

  const renderPathCard = () => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        backgroundColor: '#000000',
        borderRadius: 2,
        border: '1px solid #3d0000',
        backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mb: 2
        }}
      >
        Humanidade/Trilha
      </Typography>
      
      <TextField
        fullWidth
        variant="standard"
        placeholder="Nome da Trilha"
        sx={{
          '& .MuiInputBase-input': {
            color: '#fff',
            borderBottom: '1px solid #3d0000',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#3d0000',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#8b0000',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#8b0000',
          },
        }}
      />

      {/* Círculos e Quadrados */}
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center' }}>
          {[...Array(10)].map((_, index) => (
            <DotRating
              key={`dot-${index}`}
              value={0}
              max={1}
              onChange={() => {}}
              color="#8b0000"
            />
          ))}
        </Box>
      </Box>

      {/* Força de Vontade */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mt: 3,
          mb: 2
        }}
      >
        Força de Vontade
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        gap: 0.5
      }}>
        {[...Array(10)].map((_, index) => (
          <WillpowerUnit
            key={index}
            index={index}
            permanentValue={0}
            temporaryValue={false}
            onPermanentChange={(idx) => {}}
            onTemporaryChange={(idx, value) => {}}
          />
        ))}
      </Box>

      {/* Pontos de Sangue */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mt: 2,
          mb: 2
        }}
      >
        Pontos de Sangue
      </Typography>
      <Grid container spacing={1}>
        {[...Array(20)].map((_, index) => (
          <Grid item key={index}>
            <Checkbox
              sx={{
                color: '#3d0000',
                '&.Mui-checked': {
                  color: '#8b0000',
                },
                padding: '4px'
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  const renderVitalityCard = () => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        backgroundColor: '#000000',
        borderRadius: 2,
        border: '1px solid #3d0000',
        backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mb: 2
        }}
      >
        Vitalidade
      </Typography>
      
      {[
        { label: 'Escoriado', value: 0 },
        { label: 'Machucado', value: -1 },
        { label: 'Ferido', value: -1 },
        { label: 'Ferido Gravemente', value: -2 },
        { label: 'Espancado', value: -2 },
        { label: 'Aleijado', value: -5 },
        { label: 'Incapacitado', value: 0 }
      ].map((status, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ color: '#fff' }}>{status.label}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {status.value !== 0 && (
              <Typography sx={{ color: '#fff', mr: 1 }}>{status.value}</Typography>
            )}
            <Checkbox
              sx={{
                color: '#3d0000',
                '&.Mui-checked': {
                  color: '#8b0000',
                },
              }}
            />
          </Box>
        </Box>
      ))}

      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mt: 2,
          mb: 2
        }}
      >
        Experiência
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {renderMeritsFlaws()}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderPathCard()}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderVitalityCard()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CharacterStatusSection;
