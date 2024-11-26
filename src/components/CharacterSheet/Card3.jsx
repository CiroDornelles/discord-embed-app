import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Radio,
  Stack,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

const DotGroup = ({ value, max = 5 }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
      {[...Array(max)].map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: index < value ? 'primary.main' : 'action.disabled',
            transition: 'background-color 0.2s'
          }}
        />
      ))}
    </Box>
  );
};

const AttributeRow = ({ name, value, onChange }) => {
  const handleTouchStart = React.useRef({ x: 0 });
  const [isDragging, setIsDragging] = React.useState(false);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const diff = touch.clientX - handleTouchStart.current.x;
    
    if (Math.abs(diff) > 30) {
      const direction = diff > 0 ? 1 : -1;
      const newValue = Math.max(1, Math.min(5, value + direction));
      onChange(newValue);
      handleTouchStart.current.x = touch.clientX;
    }
  };

  return (
    <Box
      component={motion.div}
      whileTap={{ scale: 0.98 }}
      onTouchStart={(e) => {
        handleTouchStart.current.x = e.touches[0].clientX;
        setIsDragging(true);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      sx={{ mb: 2, touchAction: 'pan-y' }}
    >
      <Stack direction="row" alignItems="center">
        <Typography sx={{ minWidth: 100 }}>{name}</Typography>
        <RadioGroup
          row
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          sx={{ ml: 2 }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <FormControlLabel
              key={num}
              value={num}
              control={
                <StyledRadio
                  checked={value >= num}
                  onChange={() => onChange(num)}
                />
              }
              label=""
            />
          ))}
        </RadioGroup>
        <DotGroup value={value} />
      </Stack>
    </Box>
  );
};

const GenerationCard = () => {
  const [attributes, setAttributes] = useState({
    physical: {
      'Força': 1,
      'Destreza': 1,
      'Vigor': 1
    },
    social: {
      'Carisma': 1,
      'Manipulação': 1,
      'Aparência': 1
    },
    mental: {
      'Percepção': 1,
      'Inteligência': 1,
      'Raciocínio': 1
    }
  });

  const handleAttributeChange = (category, attr) => (newValue) => {
    setAttributes(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [attr]: newValue
      }
    }));
  };

  const renderAttributeGroup = (title, attrs, category) => (
    <StyledPaper elevation={3} sx={{ mb: 4 }}>
      <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 3 }}>
        {title}
      </Typography>
      {Object.entries(attrs).map(([attr, value]) => (
        <AttributeRow
          key={attr}
          name={attr}
          value={value}
          onChange={handleAttributeChange(category, attr)}
        />
      ))}
    </StyledPaper>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {renderAttributeGroup('Atributos Físicos', attributes.physical, 'physical')}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderAttributeGroup('Atributos Sociais', attributes.social, 'social')}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderAttributeGroup('Atributos Mentais', attributes.mental, 'mental')}
        </Grid>
      </Grid>
    </Box>
  );
};

export default GenerationCard;