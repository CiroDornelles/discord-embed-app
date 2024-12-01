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
            ...theme.mixins.statDot,
            ...(disabled && theme.mixins.statDot['&.disabled']),
            ...(index < value ? theme.mixins.statDot['&.filled'] : theme.mixins.statDot['&.empty'])
          }}
        />
      ))}
    </Box>
  );
};
