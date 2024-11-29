import React from 'react';
import { Box, Typography } from '@mui/material';
import UnitBlood from './UnitBlood';

const BloodPool = ({ value = 0, onChange, max = 10, perTurn = 1 }) => {
  const handleBloodPointChange = (index, isChecked) => {
    if (!onChange) return;

    let newValue = value;
    if (isChecked) {
      // Se está marcando, marca todos até o índice
      newValue = index + 1;
    } else {
      // Se está desmarcando, desmarca todos a partir do índice
      newValue = index;
    }
    onChange(newValue);
  };

  return (
    <Box>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(10, auto)',
        gap: '2px',
        justifyContent: 'center'
      }}>
        {Array.from({ length: max }).map((_, index) => (
          <UnitBlood
            key={index}
            value={index < value ? 1 : 0}
            onChange={(isChecked) => handleBloodPointChange(index, isChecked)}
            readOnly={false}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BloodPool;
