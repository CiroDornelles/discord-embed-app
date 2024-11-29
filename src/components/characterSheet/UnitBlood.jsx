import React from 'react';
import { Box } from '@mui/material';

const UnitBlood = ({ 
  value, 
  onChange, 
  readOnly = false
}) => {
  const handleClick = () => {
    if (readOnly) return;
    onChange();
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: '18px',
        height: '18px',
        border: '1px solid #8b0000',
        backgroundColor: value === 1 ? '#8b0000' : 'transparent',
        cursor: readOnly ? 'default' : 'pointer',
        '&:hover': {
          backgroundColor: readOnly 
            ? (value === 1 ? '#8b0000' : 'transparent') 
            : (value === 1 ? '#6b0000' : 'rgba(139, 0, 0, 0.1)'),
          boxShadow: readOnly ? 'none' : '0 0 5px rgba(139, 0, 0, 0.5)',
          transform: readOnly ? 'none' : 'scale(1.1)',
        },
        transition: 'all 0.3s ease',
        margin: '2px',
        opacity: readOnly ? 0.3 : 1,
        position: 'relative',
        boxShadow: value === 1 ? '0 0 3px rgba(139, 0, 0, 0.5)' : 'none',
        '&::before': value === 1 ? {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          backgroundColor: '#ff0000',
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'pulse 2s infinite'
        } : {},
        '@keyframes pulse': {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 0.6
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.5)',
            opacity: 0.3
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 0.6
          }
        }
      }}
    />
  );
};

export default UnitBlood;
