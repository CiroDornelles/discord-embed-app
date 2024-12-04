import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

const DotContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5)
}));

const Dot = styled(Box, {
  shouldForwardProp: (prop) => !['active', 'dotSize'].includes(prop)
})(({ theme, active, dotSize, disabled }) => ({
  width: dotSize,
  height: dotSize,
  borderRadius: '50%',
  cursor: disabled ? 'default' : 'pointer',
  transition: 'all 0.2s ease-in-out',
  ...(active ? {
    backgroundColor: theme.palette.primary.main,
    '&:hover': !disabled && {
      opacity: 0.8,
      boxShadow: `0 0 8px ${theme.palette.primary.main}`,
    },
  } : {
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.primary.main}`,
    '&:hover': !disabled && {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.3,
      boxShadow: `0 0 8px ${theme.palette.primary.main}`,
    },
  }),
  ...(disabled && {
    opacity: 0.5,
    '&:hover': {
      opacity: 0.5,
      boxShadow: 'none',
    },
  }),
}));

export const StatDots = ({
  value = 0,
  max = 5,
  onChange,
  disabled = false,
  size = 20,
  descriptions = {}
}) => {
  const handleClick = (index) => {
    if (!disabled && onChange) {
      onChange(index + 1);
    }
  };

  const handleContextMenu = (e, index) => {
    e.preventDefault();
    if (!disabled && onChange) {
      onChange(index);
    }
  };

  return (
    <DotContainer>
      {Array(max).fill(0).map((_, index) => (
        <Tooltip 
          key={index} 
          title={descriptions[(index + 1).toString()] || ''} 
          arrow
        >
          <Dot
            onClick={() => handleClick(index)}
            onContextMenu={(e) => handleContextMenu(e, index)}
            active={index < value}
            disabled={disabled}
            dotSize={size}
          />
        </Tooltip>
      ))}
    </DotContainer>
  );
};
