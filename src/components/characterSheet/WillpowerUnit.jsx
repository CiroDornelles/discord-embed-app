import React from 'react';
import { Box } from '@mui/material';
import DotRating from './DotRating';
import Checkbox from '@mui/material/Checkbox';

const WillpowerUnit = ({ index, permanentValue, temporaryValue, onPermanentChange, onTemporaryChange }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: 0.25,
      '& .dot-rating': {
        transform: 'scale(2.2)',
      }
    }}>
      <DotRating
        value={permanentValue ? 1 : 0}
        max={1}
        onChange={() => onPermanentChange(index)}
        color="#8b0000"
        className="dot-rating"
      />
      <Checkbox
        checked={temporaryValue}
        onChange={(e) => onTemporaryChange(index, e.target.checked)}
        disabled={!permanentValue}
        sx={{
          color: '#3d0000',
          '&.Mui-checked': {
            color: '#8b0000',
          },
          '&.Mui-disabled': {
            color: '#3d0000',
            opacity: 0.5,
          },
          padding: '2px'
        }}
      />
    </Box>
  );
};

export default WillpowerUnit;
