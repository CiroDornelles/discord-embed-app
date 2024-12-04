import React from 'react';
import { Box, Card, Typography, Grid, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ColorPalette = () => {
  const theme = useTheme();
  
  const colorSections = [
    {
      title: 'Primary',
      colors: ['main', 'light', 'dark'].map(key => ({
        name: key,
        value: theme.palette.primary[key]
      }))
    },
    {
      title: 'Secondary',
      colors: ['main', 'light', 'dark'].map(key => ({
        name: key,
        value: theme.palette.secondary[key]
      }))
    },
    {
      title: 'Background',
      colors: ['default', 'paper'].map(key => ({
        name: key,
        value: theme.palette.background[key]
      }))
    },
    {
      title: 'Text',
      colors: ['primary', 'secondary'].map(key => ({
        name: key,
        value: theme.palette.text[key]
      }))
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Color Palette</Typography>
      <Grid container spacing={4}>
        {colorSections.map(section => (
          <Grid item xs={12} sm={6} md={3} key={section.title}>
            <Typography variant="h6" gutterBottom>{section.title}</Typography>
            {section.colors.map(color => (
              <Box key={color.name} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    width: '100%',
                    height: 50,
                    bgcolor: color.value,
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                />
                <Typography variant="caption">
                  {color.name}: {color.value}
                </Typography>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const TypographyPreview = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>Typography</Typography>
    <Typography variant="h1" gutterBottom>h1. Heading</Typography>
    <Typography variant="h2" gutterBottom>h2. Heading</Typography>
    <Typography variant="h3" gutterBottom>h3. Heading</Typography>
    <Typography variant="h4" gutterBottom>h4. Heading</Typography>
    <Typography variant="h5" gutterBottom>h5. Heading</Typography>
    <Typography variant="h6" gutterBottom>h6. Heading</Typography>
    <Typography variant="subtitle1" gutterBottom>subtitle1. Lorem ipsum dolor sit amet</Typography>
    <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum dolor sit amet</Typography>
    <Typography variant="body1" gutterBottom>body1. Lorem ipsum dolor sit amet</Typography>
    <Typography variant="body2" gutterBottom>body2. Lorem ipsum dolor sit amet</Typography>
  </Box>
);

const ComponentPreview = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>Components</Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>Form Elements</Typography>
          <Box sx={{ '& > *': { mb: 2 } }}>
            <TextField label="Standard" fullWidth />
            <TextField label="Outlined" variant="outlined" fullWidth />
            <TextField label="Filled" variant="filled" fullWidth />
            <Button variant="contained" fullWidth>Contained Button</Button>
            <Button variant="outlined" fullWidth>Outlined Button</Button>
            <Button variant="text" fullWidth>Text Button</Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>Character Card Preview</Typography>
          <TextField
            label="Character Name"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Nature"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Demeanor"
                fullWidth
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

const ThemePreview = () => (
  <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
    <ColorPalette />
    <TypographyPreview />
    <ComponentPreview />
  </Box>
);

export default ThemePreview;
