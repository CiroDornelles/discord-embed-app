import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import DotRating from './DotRating';
import SelectionOverlay from '../common/SelectionOverlay';
import useSelectionOverlay from '../../hooks/useSelectionOverlay';

const AntecedentesSection = () => {
  const [antecedentes, setAntecedentes] = useState([]);
  const [antecedenteSelecionados, setAntecedenteSelecionados] = useState([]);
  
  const handleSelectionComplete = (selectedItem, position) => {
    if (position !== null) {
      // Atualiza antecedente existente
      setAntecedenteSelecionados(prev => {
        const novosAntecedentes = [...prev];
        novosAntecedentes[position] = {
          ...selectedItem,
          value: selectedItem.value || selectedItem.defaultValue || 0
        };
        return novosAntecedentes;
      });
    } else {
      // Adiciona novo antecedente
      setAntecedenteSelecionados(prev => [...prev, {
        ...selectedItem,
        value: selectedItem.value || selectedItem.defaultValue || 0
      }]);
    }
  };

  const { isOpen, openOverlay, closeOverlay, handleSelect } = useSelectionOverlay(handleSelectionComplete);

  useEffect(() => {
    const loadAntecedentes = async () => {
      const antecedentesFiles = [
        'allies', 'alternate_identity', 'contacts', 'domain', 'fame',
        'generation', 'herd', 'influence', 'mentor', 'resources',
        'retainers', 'status'
      ];

      try {
        const antecedentesCarregados = await Promise.all(
          antecedentesFiles.map(async (file) => {
            const response = await import(`../../data/wod/vampire/v20_dark_ages/backgrounds/${file}.json`);
            return {
              id: file,
              name: response.name,
              description: response.description,
              defaultValue: 0
            };
          })
        );
        setAntecedentes(antecedentesCarregados);
      } catch (error) {
        console.error('Erro ao carregar antecedentes:', error);
      }
    };

    loadAntecedentes();
  }, []);

  const handleDotChange = (value, position) => {
    setAntecedenteSelecionados(prev => {
      const novosAntecedentes = [...prev];
      novosAntecedentes[position] = {
        ...novosAntecedentes[position],
        value
      };
      return novosAntecedentes;
    });
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center',
          color: '#8b0000',
          mb: 2,
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
        Antecedentes
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {antecedenteSelecionados.map((antecedente, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: '#1a1a1a',
              border: '1px solid #3d0000',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#8b0000',
              },
            }}
            onClick={() => openOverlay(index)}
          >
            <Typography>{antecedente.name}</Typography>
            <DotRating
              value={antecedente.value}
              onChange={(value) => handleDotChange(value, index)}
              max={5}
            />
          </Paper>
        ))}

        <Paper
          elevation={3}
          sx={{
            p: 2,
            backgroundColor: '#1a1a1a',
            border: '1px solid #3d0000',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': {
              borderColor: '#8b0000',
            },
          }}
          onClick={() => openOverlay(null)}
        >
          <Typography>+ Adicionar Antecedente</Typography>
        </Paper>
      </Box>

      <SelectionOverlay
        isOpen={isOpen}
        onClose={closeOverlay}
        title="Selecione o Antecedente"
        options={antecedentes}
        onSelect={handleSelect}
        description="Antecedentes representam os recursos e conexões do seu personagem."
      />
    </Box>
  );
};

export default AntecedentesSection;
