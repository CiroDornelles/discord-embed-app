import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Tooltip, styled } from '@mui/material';
import DotRating from '../DotRating';

// Ordem específica dos atributos conforme o livro
const PHYSICAL_ORDER = ['strength', 'dexterity', 'stamina'];
const SOCIAL_ORDER = ['charisma', 'manipulation', 'appearance'];
const MENTAL_ORDER = ['perception', 'intelligence', 'wits'];

const AttributeRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  }
}));

const AttributeName = styled(Typography)(({ theme }) => ({
  fontFamily: 'MedievalSharp, cursive',
  marginRight: theme.spacing(2),
  flex: 1,
}));

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
        const orderedAttributes = orderMap[category]
          .map(key => loadedAttributes.find(attr => attr.key === key))
          .filter(Boolean);
        
        setAttributes(orderedAttributes);
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

  const renderTooltipContent = (attribute) => (
    <Box sx={{ p: 1, maxWidth: 220 }}>
      <Typography variant="subtitle2" color="primary" gutterBottom>
        {attribute.name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {attribute.description}
      </Typography>
      {attribute.levels && (
        <>
          <Typography variant="subtitle2" color="primary" sx={{ mt: 1, mb: 0.5 }}>
            Níveis:
          </Typography>
          {attribute.levels.map((level, index) => (
            <Typography key={index} variant="body2" sx={{ ml: 1, fontSize: '0.8rem' }}>
              {`${index + 1}: ${level}`}
            </Typography>
          ))}
        </>
      )}
    </Box>
  );

  return (
    <Paper 
      elevation={2}
      sx={{
        p: 3,
        width: '100%',
        minWidth: { xs: '300px', sm: '350px' },
        bgcolor: 'background.paper',
        transition: theme => theme.transitions.create(['box-shadow', 'transform'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          elevation: 4,
          transform: 'translateY(-2px)',
        }
      }}
    >
      <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3 }}>
        {title}
      </Typography>
      {attributes.map((attr) => (
        <Tooltip
          key={attr.key}
          title={renderTooltipContent(attr)}
          arrow
          placement="right"
          enterDelay={500}
          leaveDelay={200}
        >
          <AttributeRow>
            <AttributeName variant="body1">
              {attr.name}
            </AttributeName>
            <DotRating
              value={values[attr.key] || 1}
              onChange={(value) => handleChange(attr.key, value)}
              max={5}
            />
          </AttributeRow>
        </Tooltip>
      ))}
    </Paper>
  );
};

export default AttributeGroup;
