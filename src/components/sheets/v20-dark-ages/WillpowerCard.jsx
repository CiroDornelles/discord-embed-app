import React from 'react';
import { CardContent, CardHeader, Box, Typography } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

export const WillpowerCard = ({
  willpower = { permanent: 0, temporary: Array(10).fill(false) },
  onWillpowerChange,
  disabled = false
}) => {
  const safeWillpower = {
    permanent: willpower?.permanent || 0,
    temporary: willpower?.temporary || Array(10).fill(false)
  };

  const handleWillpowerPermanentChange = (value) => {
    const newTemporary = Array(10).fill(false).slice(0, value);
    onWillpowerChange?.({
      permanent: value,
      temporary: newTemporary
    });
  };

  const handleWillpowerTemporaryToggle = (index) => {
    if (index >= safeWillpower.permanent) return;
    
    const newTemporary = [...safeWillpower.temporary];
    newTemporary[index] = !newTemporary[index];
    onWillpowerChange?.({
      ...safeWillpower,
      temporary: newTemporary
    });
  };

  return (
    <VampireCard sx={{ height: '100%' }}>
      <CardHeader title="Willpower" />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Permanent
          </Typography>
          <StatDots
            value={safeWillpower.permanent}
            max={10}
            onChange={handleWillpowerPermanentChange}
            disabled={disabled}
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Temporary
          </Typography>
          <Box sx={{ 
            display: 'flex',
            gap: 0.5
          }}>
            {Array(safeWillpower.permanent || 0).fill(0).map((_, index) => (
              <Box
                key={index}
                onClick={() => handleWillpowerTemporaryToggle(index)}
                sx={{
                  width: 20,
                  height: 20,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '3px',
                  backgroundColor: safeWillpower.temporary[index] ? 'primary.main' : 'transparent',
                  cursor: disabled ? 'default' : 'pointer',
                  '&:hover': {
                    backgroundColor: disabled ? undefined : 
                      safeWillpower.temporary[index] ? 'primary.dark' : 'primary.light',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </VampireCard>
  );
};
