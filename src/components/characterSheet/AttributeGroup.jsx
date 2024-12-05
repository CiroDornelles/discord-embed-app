import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Box, Typography, Paper, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import DotRating from './DotRating';

// Attribute order constants as defined in the book
const ATTRIBUTE_ORDERS = {
  physical: ['strength', 'dexterity', 'stamina'],
  social: ['charisma', 'manipulation', 'appearance'],
  mental: ['perception', 'intelligence', 'wits']
};

const loadAttributes = async (category) => {
  try {
    const modules = import.meta.glob('../../data/wod/vampire/v20_dark_ages/attributes/*.json');
    const filePath = `../../data/wod/vampire/v20_dark_ages/attributes/${category}.json`;
    
    const module = modules[filePath];
    if (!module) {
      console.error(`Attribute file not found for category: ${category}`);
      return [];
    }

    const response = await module();
    const data = response.default;

    if (!data) {
      console.error(`No data found in attribute file for category: ${category}`);
      return [];
    }

    return Object.entries(data).map(([key, attr]) => ({
      name: attr.name,
      description: attr.description,
      key: key,
      nameOriginal: attr.nameOriginal,
      levels: attr.levels
    }));
  } catch (error) {
    console.error('Error loading attributes:', error);
    return [];
  }
};

const AttributeGroup = ({ title, category }) => {
  const [attributes, setAttributes] = useState([]);
  const [values, setValues] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const loadAttributesByCategory = async () => {
      try {
        const loadedAttributes = await loadAttributes(category);
        const orderedAttributes = ATTRIBUTE_ORDERS[category]
          ?.map(key => loadedAttributes.find(attr => attr.key === key))
          .filter(Boolean) || [];
        
        setAttributes(orderedAttributes);
        setValues(prev => ({
          ...prev,
          ...Object.fromEntries(orderedAttributes.map(attr => [attr.key, prev[attr.key] || 1]))
        }));
      } catch (error) {
        console.error('Error loading attributes by category:', error);
      }
    };

    if (category) {
      loadAttributesByCategory();
    }
  }, [category]);

  const handleChange = useCallback((attrKey, value) => {
    setValues(prev => ({
      ...prev,
      [attrKey]: value
    }));
  }, []);

  const paperStyles = useMemo(() => ({
    p: 2,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.primary.dark}`,
    backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), 
                     linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }), [theme]);

  const titleStyles = useMemo(() => ({
    color: theme.palette.primary.main,
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
      backgroundColor: theme.palette.primary.main,
    },
    '&::before': { left: 0 },
    '&::after': { right: 0 },
  }), [theme]);

  return (
    <Box 
      component="section"
      aria-labelledby={`${category}-attributes-title`}
      sx={{ 
        width: '100%',
        minWidth: { xs: '300px', sm: '350px' },
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Paper elevation={3} sx={paperStyles}>
        <Typography
          id={`${category}-attributes-title`}
          variant="h6"
          align="center"
          sx={titleStyles}
        >
          {title}
        </Typography>
      </Paper>
      <Box 
        component="div"
        role="group"
        aria-label={`${title} attributes group`}
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexDirection: isMobile ? 'column' : 'column',
          alignItems: isMobile ? 'stretch' : 'initial'
        }}
      >
        {attributes.map((attribute) => (
          <Box
            key={attribute.key}
            component="div"
            role="group"
            aria-label={`${attribute.name} attribute rating`}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'stretch' : 'center',
              gap: 2,
              width: '100%'
            }}
          >
            <Tooltip 
              title={attribute.description || ''}
              placement="left"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: theme.palette.grey[900],
                    color: theme.palette.common.white,
                    fontSize: theme.typography.pxToRem(14),
                    padding: theme.spacing(1, 1.5),
                    maxWidth: 300,
                    border: `1px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[4],
                    '& .MuiTooltip-arrow': {
                      color: theme.palette.grey[900],
                      '&::before': {
                        border: `1px solid ${theme.palette.primary.main}`
                      }
                    }
                  }
                }
              }}
            >
              <Typography
                component="label"
                htmlFor={`${attribute.key}-rating`}
                sx={{
                  minWidth: '120px',
                  color: theme.palette.common.white,
                  cursor: 'help'
                }}
              >
                {attribute.name}
              </Typography>
            </Tooltip>
            <DotRating
              id={`${attribute.key}-rating`}
              value={values[attribute.key] || 0}
              onChange={(newValue) => handleChange(attribute.key, newValue)}
              attributeData={attribute}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

AttributeGroup.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.oneOf(['physical', 'social', 'mental']).isRequired
};

export default AttributeGroup;
