import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import UnitBlood from './UnitBlood';

const BloodPool = ({ value = 0, onChange, max = 10, perTurn = 1 }) => {
  const [animatingValue, setAnimatingValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (!isAnimating) {
      setAnimatingValue(value);
    }
  }, [value, isAnimating]);

  const animateBloodFill = (startValue, targetValue) => {
    setIsAnimating(true);
    setAnimatingValue(startValue);

    const fillNextSquare = (current) => {
      if (current <= targetValue) {
        setAnimatingValue(current);
        setTimeout(() => fillNextSquare(current + 1), 150); // 150ms entre cada quadrado
      } else {
        setIsAnimating(false);
        onChange(targetValue);
      }
    };

    fillNextSquare(startValue + 1);
  };

  const handleBloodPointChange = (index) => {
    if (!onChange || isAnimating) return;

    const targetValue = index + 1;
    
    // Se clicar no mesmo valor, diminui em 1 (sem animação)
    if (targetValue === value) {
      onChange(index);
      return;
    }

    // Se o valor alvo é maior que o atual, anima o preenchimento
    if (targetValue > value) {
      animateBloodFill(value, targetValue);
    } else {
      // Se está diminuindo, não anima
      onChange(targetValue);
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
            value={index < animatingValue ? 1 : 0}
            onChange={() => handleBloodPointChange(index)}
            readOnly={isAnimating}
            isAnimating={isAnimating && index === animatingValue - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BloodPool;
