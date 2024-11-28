import React, { useState, useEffect } from 'react';
import { Card, CardContent, TextField, Typography, Box, Tooltip } from '@mui/material';
import SelectionOverlay from '../common/SelectionOverlay';

const PersonalityCard = ({ data, onChange }) => {
  const [naturesAndDemeanors, setNaturesAndDemeanors] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [selectedNature, setSelectedNature] = useState(null);
  const [selectedDemeanor, setSelectedDemeanor] = useState(null);

  useEffect(() => {
    const loadNaturesAndDemeanors = async () => {
      const files = [
        'architect', 'autocrat', 'beast', 'bon_vivant', 'bravo', 'caregiver',
        'celebrant', 'chameleon', 'child', 'competitor', 'conformist', 'conniver',
        'creep_show', 'curmudgeon', 'dabbler', 'defender', 'deviant', 'enigma',
        'eye_of_the_storm', 'fanatic', 'gallant', 'guru', 'idealist', 'jester',
        'judge', 'loner', 'martyr', 'masochist', 'mercenary', 'monster', 'pedagogue',
        'penitent', 'perfectionist', 'philosopher', 'rebel', 'rogue', 'sadist',
        'soldier', 'survivor', 'thrill_seeker', 'traditionalist', 'tyrant', 'visionary'
      ];

      try {
        const loadedItems = await Promise.all(
          files.map(async (file) => {
            const response = await import(`../../data/wod/vampire/v20_dark_ages/natures_and_demeanors/${file}.json`);
            return {
              id: file,
              name: response.name,
              originalName: response.originalName,
              description: response.description,
              regainWillpower: response.regainWillpower
            };
          })
        );
        setNaturesAndDemeanors(loadedItems);
        
        // Set initial selected nature and demeanor if they exist
        if (data.natureza) {
          setSelectedNature(loadedItems.find(item => item.name === data.natureza));
        }
        if (data.comportamento) {
          setSelectedDemeanor(loadedItems.find(item => item.name === data.comportamento));
        }
      } catch (error) {
        console.error('Error loading natures and demeanors:', error);
      }
    };

    loadNaturesAndDemeanors();
  }, [data.natureza, data.comportamento]);

  const handleChange = (field) => (event) => {
    onChange(field, event.target.value);
  };

  const handleFieldClick = (field) => {
    setCurrentField(field);
    setIsOverlayOpen(true);
  };

  const handleSelect = (selected) => {
    if (currentField) {
      onChange(currentField, selected.name);
      if (currentField === 'natureza') {
        setSelectedNature(selected);
      } else if (currentField === 'comportamento') {
        setSelectedDemeanor(selected);
      }
      setIsOverlayOpen(false);
      setCurrentField(null);
    }
  };

  const getOverlayTitle = () => {
    return currentField === 'natureza' ? 'Selecione a Natureza' : 'Selecione o Comportamento';
  };

  const getOverlayDescription = () => {
    return currentField === 'natureza' 
      ? 'A Natureza é a verdadeira personalidade do personagem, como ele realmente é por dentro.'
      : 'O Comportamento é a máscara que o personagem mostra ao mundo, como ele age em público.';
  };

  return (
    <>
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
            Personalidade
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 4,
            flex: 1,
            justifyContent: 'space-evenly'
          }}>
            <TextField
              label="Conceito"
              value={data.conceito || ''}
              onChange={handleChange('conceito')}
              variant="outlined"
              fullWidth
            />
            <Tooltip 
              title={selectedNature?.regainWillpower || ''}
              placement="top"
              arrow
              enterDelay={500}
              sx={{
                '& .MuiTooltip-tooltip': {
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: '1px solid #8b0000',
                  fontSize: '0.9rem',
                  padding: '8px 12px',
                  maxWidth: 300
                },
                '& .MuiTooltip-arrow': {
                  color: '#8b0000'
                }
              }}
            >
              <TextField
                label="Natureza"
                value={data.natureza || ''}
                onClick={() => handleFieldClick('natureza')}
                InputProps={{
                  readOnly: true,
                  style: { cursor: 'pointer' }
                }}
                variant="outlined"
                fullWidth
              />
            </Tooltip>
            <Tooltip 
              title={selectedDemeanor?.regainWillpower || ''}
              placement="top"
              arrow
              enterDelay={500}
              sx={{
                '& .MuiTooltip-tooltip': {
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: '1px solid #8b0000',
                  fontSize: '0.9rem',
                  padding: '8px 12px',
                  maxWidth: 300
                },
                '& .MuiTooltip-arrow': {
                  color: '#8b0000'
                }
              }}
            >
              <TextField
                label="Comportamento"
                value={data.comportamento || ''}
                onClick={() => handleFieldClick('comportamento')}
                InputProps={{
                  readOnly: true,
                  style: { cursor: 'pointer' }
                }}
                variant="outlined"
                fullWidth
              />
            </Tooltip>
          </Box>
        </CardContent>
      </Card>

      <SelectionOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        title={getOverlayTitle()}
        description={getOverlayDescription()}
        options={naturesAndDemeanors.map(item => ({
          id: item.id,
          name: item.name,
          description: `${item.description}\n\nRecuperação de Força de Vontade: ${item.regainWillpower}`,
          originalName: item.originalName
        }))}
        onSelect={handleSelect}
      />
    </>
  );
};

export default PersonalityCard;
