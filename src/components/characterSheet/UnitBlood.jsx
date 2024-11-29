import React from 'react';
import { Box } from '@mui/material';

const UnitBlood = ({ 
  value = 0, 
  onChange, 
  max = 1, 
  readOnly = false,
  type = 'blood'
}) => {
  const handleClick = () => {
    if (readOnly) return;
    onChange(value === 1 ? 0 : 1);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: '20px',
        height: '20px',
        border: '1px solid #8b0000',
        backgroundColor: value === 1 ? '#8b0000' : 'transparent',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: value === 1 ? '#6b0000' : 'rgba(139, 0, 0, 0.1)',
        },
        transition: 'background-color 0.2s',
        margin: '2px',
        opacity: readOnly ? 0.3 : 1
      }}
    />
  );
};

export default UnitBlood;
