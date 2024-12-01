import React from 'react';
import { CardContent, CardHeader, Box, Typography } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

export const PathCard = ({
  path = { current: 0, max: 10 },
  onPathChange,
  disabled = false
}) => {
  const safePath = {
    current: path?.current || 0,
    max: path?.max || 10
  };

  const handlePathChange = (value) => {
    onPathChange?.({ ...safePath, current: value });
  };

  return (
    <VampireCard sx={{ height: '100%' }}>
      <CardHeader title="Path of Enlightenment" />
      <CardContent>
        <Box>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Rating ({safePath.current}/{safePath.max})
          </Typography>
          <StatDots
            value={safePath.current}
            max={safePath.max}
            onChange={handlePathChange}
            disabled={disabled}
          />
        </Box>
      </CardContent>
    </VampireCard>
  );
};
