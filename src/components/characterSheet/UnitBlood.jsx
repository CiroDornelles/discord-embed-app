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
        width: '20px',
        height: '20px',
        border: '1px solid #8b0000',
        backgroundColor: value === 1 ? '#8b0000' : 'transparent',
        cursor: readOnly ? 'default' : 'pointer',
        '&:hover': {
          backgroundColor: readOnly ? (value === 1 ? '#8b0000' : 'transparent') : (value === 1 ? '#6b0000' : 'rgba(139, 0, 0, 0.1)'),
        },
        transition: 'background-color 0.2s',
        margin: '2px',
        opacity: readOnly ? 0.3 : 1
      }}
    />
  );
};

export default UnitBlood;
