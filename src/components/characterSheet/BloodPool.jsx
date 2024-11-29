import React, { memo, useMemo } from 'react';
import { Box } from '@mui/material';
import UnitBlood from './UnitBlood';
import { useBloodPoolAnimation } from '../../hooks/useBloodPoolAnimation';
import { useCharacter } from '../../contexts/CharacterContext';

const BloodPool = memo(({ max, perTurn }) => {
  const { character, updateBloodPool } = useCharacter();
  const value = character.status.bloodPool.current;

  const {
    animatingValue,
    isAnimating,
    isSettling,
    handleBloodPointChange
  } = useBloodPoolAnimation(value, updateBloodPool);

  const bloodTooltips = useMemo(() => {
    const tooltips = [];
    for (let i = 0; i < max; i++) {
      const points = i + 1;
      const isMaxPerTurn = points === perTurn;
      const tooltipText = `Ponto de Sangue ${points}${isMaxPerTurn ? ' (Máximo por turno)' : ''}`;
      tooltips.push(tooltipText);
    }
    return tooltips;
  }, [max, perTurn]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2px',
        maxWidth: '200px',
        padding: '8px',
        border: '1px solid rgba(139, 0, 0, 0.3)',
        borderRadius: '4px',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(139, 0, 0, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }
      }}
    >
      {Array.from({ length: max }).map((_, index) => (
        <UnitBlood
          key={index}
          value={index < animatingValue ? 1 : 0}
          onChange={() => handleBloodPointChange(index)}
          isAnimating={isAnimating && index === animatingValue - 1}
          isSettling={isSettling && index < animatingValue}
          readOnly={index >= max}
          tooltipText={bloodTooltips[index]}
        />
      ))}
    </Box>
  );
});

BloodPool.displayName = 'BloodPool';

export default BloodPool;
