import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Tooltip } from '@mui/material';
import DotRating from './DotRating';

// Ordem específica dos atributos conforme o livro
const PHYSICAL_ORDER = ['strength', 'dexterity', 'stamina'];
const SOCIAL_ORDER = ['charisma', 'manipulation', 'appearance'];
const MENTAL_ORDER = ['perception', 'intelligence', 'wits'];

const loadAttributes = async (category) => {
  try {
    const modules = import.meta.glob('../../data/wod/vampire/v20_dark_ages/attributes/*.json');
    const filePath = `../../data/wod/vampire/v20_dark_ages/attributes/${category}.json`;
    
    console.log('Loading attributes for category:', category);
    console.log('File path:', filePath);
    console.log('Available modules:', modules);
    
    const module = modules[filePath];
    if (!module) {
      console.error(`Attribute file not found for category: ${category}`);
      return [];
    }

    const response = await module();
    const data = response.default;
    console.log('Loaded attribute data:', data);

    if (!data) {
      console.error(`No data found in attribute file for category: ${category}`);
      return [];
    }

    const attributes = Object.entries(data).map(([key, attr]) => ({
      name: attr.name,
      description: attr.description,
      key: key,
      nameOriginal: attr.nameOriginal,
      levels: attr.levels
    }));
    
    console.log('Processed attributes:', attributes);
    return attributes;
  } catch (error) {
    console.error('Error loading attributes:', error);
    return [];
  }
};

const AttributeGroup = ({ title, category }) => {
  const [attributes, setAttributes] = useState([]);
  const [values, setValues] = useState({});

  useEffect(() => {
    const loadAttributesByCategory = async () => {
      try {
        const orderMap = {
          physical: PHYSICAL_ORDER,
          social: SOCIAL_ORDER,
          mental: MENTAL_ORDER
        };

        const loadedAttributes = await loadAttributes(category);
        // Ordenar os atributos de acordo com a ordem definida
        const orderedAttributes = orderMap[category].map(key => 
          loadedAttributes.find(attr => attr.key === key)
        ).filter(Boolean);
        
        setAttributes(orderedAttributes);
        
        // Inicializa os valores preservando os valores existentes
        setValues(prev => {
          const newValues = orderedAttributes.reduce((acc, attr) => ({
            ...acc,
            [attr.key]: prev[attr.key] || 1
          }), {});
          return newValues;
        });
      } catch (error) {
        console.error('Error loading attributes by category:', error);
      }
    };

    if (category) {
      loadAttributesByCategory();
    }
  }, [category]);

  const handleChange = (attrKey, value) => {
    setValues(prev => ({
      ...prev,
      [attrKey]: value
    }));
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
        minWidth: { xs: '300px', sm: '350px' },
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
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
            mb: 2,
            position: 'relative',
            px: 4,
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              width: '15%',
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
          {title}
        </Typography>
      </Paper>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          alignItems: 'stretch'
        }
      }}>
        {attributes.map((attribute) => (
          <Box
            key={attribute.key}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
              width: '100%',
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'stretch'
              }
            }}
          >
            <Tooltip 
              title={attribute.description || ''}
              placement="left"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'rgba(0, 0, 0, 0.95)',
                    color: 'white',
                    fontSize: '0.875rem',
                    padding: '8px 12px',
                    maxWidth: 300,
                    border: '1px solid #8b0000',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                    '& .MuiTooltip-arrow': {
                      color: 'rgba(0, 0, 0, 0.95)',
                      '&::before': {
                        border: '1px solid #8b0000'
                      }
                    }
                  }
                }
              }}
            >
              <Typography
                sx={{
                  minWidth: '120px',
                  color: 'white',
                  cursor: 'help'
                }}
              >
                {attribute.name}
              </Typography>
            </Tooltip>
            <DotRating
              value={values[attribute.key] || 0}
              onChange={(newValue) => {
                handleChange(attribute.key, newValue);
              }}
              attributeData={attribute}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AttributeGroup;
