import React from 'react';
import { CardContent, CardHeader, Box, Typography } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

export const ResourcesCard = ({
  path = { current: 0, max: 10 },
  bloodPool = { current: 0, max: 20 },
  willpower = { permanent: 0, temporary: Array(10).fill(false) },
  onPathChange,
  onBloodPoolChange,
  onWillpowerChange,
  disabled = false
}) => {
  // Garantir que willpower tenha uma estrutura válida
  const safeWillpower = {
    permanent: willpower?.permanent || 0,
    temporary: willpower?.temporary || Array(10).fill(false)
  };

  const handlePathChange = (value) => {
    onPathChange?.({ ...path, current: value });
  };

  const handleBloodPoolChange = (value) => {
    onBloodPoolChange?.({ ...bloodPool, current: value });
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

  // Garantir que path e bloodPool tenham estrutura válida
  const safePath = {
    current: path?.current || 0,
    max: path?.max || 10
  };

  const safeBloodPool = {
    current: bloodPool?.current || 0,
    max: bloodPool?.max || 20
  };

  return (
    <VampireCard sx={{ height: '100%' }}>
      <CardHeader title="Resources" />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Path of Enlightenment ({safePath.current}/{safePath.max})
          </Typography>
          <StatDots
            value={safePath.current}
            max={safePath.max}
            onChange={handlePathChange}
            disabled={disabled}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Blood Pool ({safeBloodPool.current}/{safeBloodPool.max})
          </Typography>
          <StatDots
            value={safeBloodPool.current}
            max={safeBloodPool.max}
            onChange={handleBloodPoolChange}
            disabled={disabled}
          />
        </Box>

        <Box>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Willpower
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography variant="caption" color="primary">
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
            <Typography variant="caption" color="primary">
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
        </Box>
      </CardContent>
    </VampireCard>
  );
};
