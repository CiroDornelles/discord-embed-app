import React from 'react';
import { CardContent, CardHeader, Box, Typography } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

export const BloodPoolCard = ({
  bloodPool = { current: 0, max: 20 },
  onBloodPoolChange,
  disabled = false
}) => {
  const safeBloodPool = {
    current: bloodPool?.current || 0,
    max: bloodPool?.max || 20
  };

  const handleBloodPoolChange = (value) => {
    onBloodPoolChange?.({ ...safeBloodPool, current: value });
  };

  return (
    <VampireCard sx={{ height: '100%' }}>
      <CardHeader title="Blood Pool" />
      <CardContent>
        <Box>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Blood Points ({safeBloodPool.current}/{safeBloodPool.max})
          </Typography>
          <StatDots
            value={safeBloodPool.current}
            max={safeBloodPool.max}
            onChange={handleBloodPoolChange}
            disabled={disabled}
          />
        </Box>
      </CardContent>
    </VampireCard>
  );
};
