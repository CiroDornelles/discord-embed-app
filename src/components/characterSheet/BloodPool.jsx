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
    <Box
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-10px',
          background: 'radial-gradient(circle at center, rgba(139, 0, 0, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(10, auto)',
          gap: '4px',
          justifyContent: 'center',
          padding: '10px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '1px solid rgba(139, 0, 0, 0.3)',
            borderRadius: '4px',
            pointerEvents: 'none'
          }
        }}
      >
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
