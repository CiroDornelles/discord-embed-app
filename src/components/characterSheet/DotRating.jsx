import React, { memo, useCallback, useMemo } from 'react';
import { Box, Tooltip } from '@mui/material';

const Dot = memo(({ filled, onClick, disabled, tooltipText }) => (
  <Tooltip
    title={tooltipText || ''}
    placement="top"
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
    <Box
      onClick={disabled ? undefined : onClick}
      sx={{
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '2px solid #8b0000',
        backgroundColor: filled ? '#8b0000' : 'transparent',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.5 : 1,
        '&:hover': {
          transform: disabled ? 'none' : 'scale(1.1)',
          boxShadow: disabled ? 'none' : '0 0 5px rgba(139, 0, 0, 0.5)',
        },
      }}
    />
  </Tooltip>
));

Dot.displayName = 'Dot';

const DotRating = memo(({ 
  value = 0, 
  onChange, 
  max = 5, 
  hasSelectedItem = true, 
  onEmptyClick,
  tooltips = [],
  attributeData = {}
}) => {
  const handleClick = useCallback((newValue) => {
    if (!hasSelectedItem && onEmptyClick) {
      onEmptyClick();
      return;
    }
    
    if (newValue === value) {
      onChange(value - 1);
    } else {
      onChange(newValue);
    }
  }, [value, onChange, hasSelectedItem, onEmptyClick]);

  const getTooltipText = useCallback((index) => {
    // Primeiro verifica se há um tooltip explícito
    if (tooltips[index]) return tooltips[index];

    // Se não houver tooltip explícito, verifica os dados do atributo
    if (attributeData?.levels) {
      const level = index + 1;
      
      if (Array.isArray(attributeData.levels)) {
        // Para virtudes e backgrounds (array de objetos)
        const levelData = attributeData.levels.find(l => l.level === level);
        if (levelData) {
          return levelData.description;
        }
      } else if (typeof attributeData.levels === 'object') {
        // Para atributos (objeto com níveis)
        return attributeData.levels[level] || '';
      }
    }

    return '';
  }, [tooltips, attributeData]);

  const dots = useMemo(() => (
    Array.from({ length: max }).map((_, index) => (
      <Dot
        key={index}
        filled={index < value}
        onClick={() => handleClick(index + 1)}
        disabled={!hasSelectedItem}
        tooltipText={getTooltipText(index)}
      />
    ))
  ), [max, value, handleClick, hasSelectedItem, getTooltipText]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        padding: '4px',
      }}
    >
      {dots}
    </Box>
  );
});

DotRating.displayName = 'DotRating';

export default DotRating;
