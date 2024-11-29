import React, { memo } from 'react';
import { Box, Tooltip } from '@mui/material';

const UnitBlood = memo(({ 
  value, 
  onChange, 
  readOnly = false, 
  isAnimating = false, 
  isSettling = false,
  tooltipText
}) => {
  const handleClick = () => {
    if (readOnly) return;
    onChange();
  };

  const bloodPoint = (
    <Box
      onClick={handleClick}
      sx={{
        width: '18px',
        height: '18px',
        border: '1px solid #8b0000',
        backgroundColor: value === 1 ? '#8b0000' : 'transparent',
        cursor: readOnly ? 'default' : 'pointer',
        transition: 'all 0.3s ease',
        margin: '2px',
        opacity: readOnly ? 0.3 : 1,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: value === 1 ? '0 0 3px rgba(139, 0, 0, 0.5)' : 'none',
        '&:hover': {
          backgroundColor: readOnly 
            ? (value === 1 ? '#8b0000' : 'transparent') 
            : (value === 1 ? '#6b0000' : 'rgba(139, 0, 0, 0.1)'),
          boxShadow: readOnly ? 'none' : '0 0 5px rgba(139, 0, 0, 0.5)',
          transform: readOnly ? 'none' : 'scale(1.1)',
        },
        ...(isAnimating && {
          animation: 'pulse 0.6s infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 rgba(139, 0, 0, 0.7)',
            },
            '70%': {
              transform: 'scale(1.1)',
              boxShadow: '0 0 0 10px rgba(139, 0, 0, 0)',
            },
            '100%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 rgba(139, 0, 0, 0)',
            },
          },
        }),
        ...(isSettling && {
          animation: 'settle 0.6s ease-out',
          '@keyframes settle': {
            '0%': {
              transform: 'scale(1.1)',
            },
            '100%': {
              transform: 'scale(1)',
            },
          },
        }),
      }}
    />
  );

  return tooltipText ? (
    <Tooltip
      title={tooltipText}
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
      {bloodPoint}
    </Tooltip>
  ) : bloodPoint;
});

UnitBlood.displayName = 'UnitBlood';

export default UnitBlood;
