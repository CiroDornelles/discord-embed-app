import React from 'react';
import { CardContent, CardHeader, Box, Typography } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';

const HEALTH_STATES = [
  'Healthy',
  'Bruised',
  'Hurt',
  'Injured',
  'Wounded',
  'Mauled',
  'Crippled',
  'Incapacitated'
];

export const HealthCard = ({
  health,
  onHealthChange,
  disabled = false
}) => {
  return (
    <VampireCard sx={{ 
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardHeader title="Health" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}>
          {health.map((state, index) => (
            <Box key={index} sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 0.5
            }}>
              <Typography variant="body2">
                {HEALTH_STATES[index]}
              </Typography>
              <Box 
                onClick={() => {
                  if (!disabled) {
                    const newHealth = [...health];
                    newHealth[index] = !newHealth[index];
                    onHealthChange?.(newHealth);
                  }
                }}
                sx={{ 
                  width: 24,
                  height: 24,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '50%',
                  backgroundColor: state ? 'primary.main' : 'transparent',
                  cursor: disabled ? 'default' : 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: state ? 'primary.dark' : 'primary.main',
                    opacity: disabled ? 1 : 0.7,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </VampireCard>
  );
};
