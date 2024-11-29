import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, TextField, Grid, Checkbox, Tooltip } from '@mui/material';
import DotRating from './DotRating';
import WillpowerUnit from './WillpowerUnit';
import BloodPool from './BloodPool';
import UnitBlood from './UnitBlood';
import { getBloodPoolByGeneration } from '../../rules/vampire/bloodPool';

const CharacterStatusSection = ({ vantagens }) => {
  // Calcula a geração baseada no antecedente
  const calcularGeracao = () => {
    const geracaoAntecedente = vantagens?.antecedentes?.find(ant => ant?.id === 'generation')?.value || 0;
    return 12 - geracaoAntecedente; // Começa na 12ª geração
  };

  const bloodPool = getBloodPoolByGeneration(calcularGeracao());

  // Estados
  const [pathRating, setPathRating] = useState(0);
  const [willpowerPermanent, setWillpowerPermanent] = useState(0);
  const [willpowerTemporary, setWillpowerTemporary] = useState(Array(10).fill(false));
  const [willpowerData, setWillpowerData] = useState(null);
  const [bloodPoints, setBloodPoints] = useState(0);

  useEffect(() => {
    // Garante que bloodPoints não exceda o máximo da nova geração
    if (bloodPoints > bloodPool.max) {
      setBloodPoints(bloodPool.max);
    }
  }, [vantagens?.antecedentes]);

  useEffect(() => {
    const loadWillpowerData = async () => {
      try {
        const response = await import('../../data/wod/vampire/v20_dark_ages/core/willpower/willpower.json');
        setWillpowerData(response);
      } catch (error) {
        console.error('Error loading willpower data:', error);
      }
    };

    loadWillpowerData();
  }, []);

  const handlePathChange = (newValue) => {
    setPathRating(newValue);
  };

  const handleWillpowerPermanentChange = (newValue) => {
    setWillpowerPermanent(newValue);
    if (newValue < willpowerPermanent) {
      setWillpowerTemporary(prev => prev.map((value, index) => index < newValue ? value : false));
    }
  };

  const handleWillpowerTemporaryChange = (index, checked) => {
    if (index < willpowerPermanent) {
      setWillpowerTemporary(prev => {
        const newTemp = [...prev];
        if (checked) {
          for (let i = 0; i <= index; i++) {
            newTemp[i] = true;
          }
        } else {
          for (let i = index; i < prev.length; i++) {
            newTemp[i] = false;
          }
        }
        return newTemp;
      });
    }
  };

  const handleBloodPointChange = (newValue) => {
    setBloodPoints(newValue);
  };

  const getWillpowerTooltip = (index) => {
    if (!willpowerData) return '';
    const level = index + 1;
    const levelData = willpowerData.system?.mechanics?.levels?.[level];
    return levelData ? levelData.description : '';
  };

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
        <Box sx={{ 
          display: 'flex', 
          gap: 1, 
          justifyContent: 'center',
          maxWidth: '95%',
          margin: '0 auto',
          '& .dot-rating': {
            transform: 'scale(2.2)',
          }
        }}>
          <DotRating
            value={pathRating}
            max={10}
            onChange={handlePathChange}
            color="#8b0000"
            className="dot-rating"
          />
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
          <Tooltip key={index} title={getWillpowerTooltip(index)}>
            <Box>
              <WillpowerUnit
                index={index}
                permanentValue={index < willpowerPermanent}
                temporaryValue={willpowerTemporary[index]}
                onPermanentChange={() => handleWillpowerPermanentChange(index + 1)}
                onTemporaryChange={(idx, value) => handleWillpowerTemporaryChange(idx, value)}
              />
            </Box>
          </Tooltip>
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <Typography sx={{ color: '#fff', fontSize: '0.8rem' }}>
          (Máx: {bloodPool.max} | Por Turno: {bloodPool.perTurn})
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <BloodPool
            value={bloodPoints}
            onChange={handleBloodPointChange}
            max={bloodPool.max}
            perTurn={bloodPool.perTurn}
            generation={String(calcularGeracao())}
          />
        </Grid>
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
