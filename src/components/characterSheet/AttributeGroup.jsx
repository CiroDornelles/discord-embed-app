import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import DotRating from './DotRating';

const AttributeGroup = ({ title, attributes, data }) => {
  const [values, setValues] = useState(
    attributes.reduce((acc, attr) => ({ ...acc, [attr]: 1 }), {})
  );

  const handleChange = (attr, value) => {
    setValues(prev => ({ ...prev, [attr]: value }));
  };

  return (
    <Paper elevation={3} sx={{ 
      p: 3,
      backgroundColor: 'background.paper',
      borderRadius: 2,
      border: '1px solid #3d0000',
      height: '100%',
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography variant="h6" sx={{ 
        textAlign: 'center', 
        mb: 3,
        color: '#8b0000',
        fontFamily: 'MedievalSharp, cursive',
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          width: '20%',
          height: '2px',
          backgroundColor: '#8b0000',
        },
        '&::before': {
          left: 0,
        },
        '&::after': {
          right: 0,
        },
      }}>
        {title}
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        {attributes.map((attr) => (
          <Box key={attr} sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            mb: 2 
          }}>
            <Typography sx={{ 
              minWidth: '100px',
              color: '#3d0000',
              fontFamily: 'MedievalSharp, cursive',
            }}>
              {attr}
            </Typography>
            <DotRating
              value={values[attr]}
              onChange={(value) => handleChange(attr, value)}
              attributeData={data?.[attr.toLowerCase()]}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default AttributeGroup;
