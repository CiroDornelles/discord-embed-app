import React from 'react';
import { Box } from '@mui/material';

const UnitBlood = ({ value, onChange, readOnly = false, isAnimating = false, isSettling = false }) => {
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
        backgroundColor: 'transparent',
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
        overflow: 'hidden',
        boxShadow: value === 1 ? '0 0 3px rgba(139, 0, 0, 0.5)' : 'none',
        '&::before': value === 1 ? {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          backgroundColor: '#8b0000',
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'pulse 2s infinite'
        } : {},
        '&::after': value === 1 ? {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#8b0000',
          transformOrigin: 'bottom',
          animation: isAnimating 
            ? 'fillBlood 0.15s ease-out forwards'
            : isSettling 
              ? 'settleEffect 0.6s ease-in-out forwards'
              : value === 1 
                ? 'gentleWave 3s ease-in-out infinite'
                : 'none',
          transform: isAnimating ? 'translateY(100%)' : 'none'
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
        },
        '@keyframes fillBlood': {
          '0%': {
            transform: 'translateY(100%)',
            borderRadius: '40% 40% 0 0'
          },
          '100%': {
            transform: 'translateY(0)',
            borderRadius: '0'
          }
        },
        '@keyframes settleEffect': {
          '0%': {
            transform: 'translateY(0) scaleY(1)',
            borderRadius: '0'
          },
          '25%': {
            transform: 'translateY(-15%) scaleY(1.15)',
            borderRadius: '40% 40% 0 0'
          },
          '50%': {
            transform: 'translateY(0) scaleY(0.9)',
            borderRadius: '0 0 20% 20%'
          },
          '75%': {
            transform: 'translateY(-7%) scaleY(1.07)',
            borderRadius: '20% 20% 0 0'
          },
          '100%': {
            transform: 'translateY(0) scaleY(1)',
            borderRadius: '0'
          }
        },
        '@keyframes gentleWave': {
          '0%': {
            transform: 'translateY(0) scaleY(1)',
            borderRadius: '0'
          },
          '50%': {
            transform: 'translateY(-3%) scaleY(1.03)',
            borderRadius: '10% 10% 0 0'
          },
          '100%': {
            transform: 'translateY(0) scaleY(1)',
            borderRadius: '0'
          }
        }
      }}
    />
  );
};

export default UnitBlood;
