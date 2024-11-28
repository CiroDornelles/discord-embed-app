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
      <Typography variant="h6" sx={{ color: 'primary.main', borderBottom: '2px solid', borderColor: 'primary.main', mb: 1 }}>
        {title}
      </Typography>
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
              title={attribute.description}
              placement="right"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'rgba(0, 0, 0, 0.87)',
                    color: 'white',
                    fontSize: '0.875rem',
                    padding: '8px 12px',
                    maxWidth: 300,
                    '& .MuiTooltip-arrow': {
                      color: 'rgba(0, 0, 0, 0.87)'
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
              attributeData={{
                ...attribute,
                levels: attribute.levels || {}
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AttributeGroup;
