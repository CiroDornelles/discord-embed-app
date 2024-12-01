import React from 'react';
import { Box, Rating } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-icon': {
    color: theme.palette.primary.main,
  },
  '& .MuiRating-iconFilled': {
    color: theme.palette.primary.main,
  },
  '& .MuiRating-iconHover': {
    color: theme.palette.primary.light,
  },
}));

export const StatDots = ({ 
  value, 
  onChange, 
  max = 5,
  size = 'small',
  readOnly = false,
  disabled = false
}) => {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <StyledRating
        name="stat-rating"
        value={value}
        max={max}
        onChange={(event, newValue) => {
          onChange?.(newValue);
        }}
        icon={<CircleIcon fontSize={size} />}
        emptyIcon={<CircleOutlinedIcon fontSize={size} />}
        readOnly={readOnly}
        disabled={disabled}
      />
    </Box>
  );
};
