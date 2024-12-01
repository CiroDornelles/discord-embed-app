import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const StatDots = ({
  value = 0,
  max = 5,
  onChange,
  disabled = false,
  size = 20
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      display: 'flex',
      gap: 0.5
    }}>
      {Array(max).fill(0).map((_, index) => (
        <Box
          key={index}
          onClick={() => !disabled && onChange?.(index + 1)}
          onContextMenu={(e) => {
            e.preventDefault();
            !disabled && onChange?.(index);
          }}
          sx={{
            width: size,
            height: size,
            borderRadius: '50%',
            cursor: disabled ? 'default' : 'pointer',
            transition: 'all 0.2s ease-in-out',
            ...(index < value ? {
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                opacity: 0.8,
                boxShadow: `0 0 8px ${theme.palette.primary.main}`,
              },
            } : {
              backgroundColor: 'transparent',
              border: `2px solid ${theme.palette.primary.main}`,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                opacity: 0.3,
                boxShadow: `0 0 8px ${theme.palette.primary.main}`,
              },
            }),
            ...(disabled && {
              opacity: 0.5,
              cursor: 'default',
              '&:hover': {
                opacity: 0.5,
                boxShadow: 'none',
              },
            }),
          }}
        />
      ))}
    </Box>
  );
};
