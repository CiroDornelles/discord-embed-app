import React from 'react';
import { Box } from '@mui/material';
import UnitBlood from './UnitBlood';

const BloodPool = ({ value = 0, onChange, max = 10, perTurn = 1 }) => {
  const handleBloodPointChange = (index) => {
    if (!onChange) return;

    // Se clicar no mesmo valor, diminui em 1
    if (index + 1 === value) {
      onChange(index);
    } else {
      // Se clicar em outro valor, atualiza para o novo valor
      onChange(index + 1);
    }
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
            onChange={() => handleBloodPointChange(index)}
            readOnly={false}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BloodPool;
