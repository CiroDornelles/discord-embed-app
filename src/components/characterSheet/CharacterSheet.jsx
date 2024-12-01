import React, { Suspense } from 'react';
import { Box, Grid, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import Header from './Header';

// Lazy load components for better performance
const BasicInfoCard = React.lazy(() => import('./cards/BasicInfoCard'));
const PersonalityCard = React.lazy(() => import('./cards/PersonalityCard'));
const VampireInfoCard = React.lazy(() => import('./cards/VampireInfoCard'));
const AttributesSection = React.lazy(() => import('./AttributesSection'));
const AbilitiesSection = React.lazy(() => import('./AbilitiesSection'));
const AdvantagesSection = React.lazy(() => import('./AdvantagesSection'));
const BackgroundsSection = React.lazy(() => import('./BackgroundsSection'));
const CharacterStatusSection = React.lazy(() => import('./CharacterStatusSection'));

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 200,
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

const CharacterSheet = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Header />
      
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6} lg={4}>
          <Suspense fallback={<LoadingFallback />}>
            <BasicInfoCard />
          </Suspense>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Suspense fallback={<LoadingFallback />}>
            <PersonalityCard />
          </Suspense>
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <Suspense fallback={<LoadingFallback />}>
            <VampireInfoCard />
          </Suspense>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid item xs={12} lg={6}>
          <Suspense fallback={<LoadingFallback />}>
            <AttributesSection />
          </Suspense>
        </Grid>
        
        <Grid item xs={12} lg={6}>
          <Suspense fallback={<LoadingFallback />}>
            <AbilitiesSection />
          </Suspense>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Suspense fallback={<LoadingFallback />}>
            <AdvantagesSection />
          </Suspense>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Suspense fallback={<LoadingFallback />}>
            <BackgroundsSection />
          </Suspense>
        </Grid>
        
        <Grid item xs={12}>
          <Suspense fallback={<LoadingFallback />}>
            <CharacterStatusSection />
          </Suspense>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CharacterSheet;
