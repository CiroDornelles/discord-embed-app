import React from 'react';
import { CardContent, CardHeader, useTheme, useMediaQuery, CircularProgress, Box } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AttributeCard } from './AttributeCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';
import { StatCarousel } from '../common/StatCarousel';
import { useAttributes } from '../../../hooks/useAttributes';

export const AttributesCard = ({
  onAttributeChange,
  disabled = false
}) => {
  const { attributeData, loading, error } = useAttributes();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAttributeChange = (category) => (attribute, value) => {
    onAttributeChange?.(category, attribute, value);
  };

  if (loading) {
    return (
      <VampireCard>
        <CardHeader title="Attributes" />
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" p={4}>
            <CircularProgress />
          </Box>
        </CardContent>
      </VampireCard>
    );
  }

  if (error) {
    return (
      <VampireCard>
        <CardHeader title="Attributes" />
        <CardContent>
          <Box color="error.main" p={2}>
            Error loading attributes data. Please try again.
          </Box>
        </CardContent>
      </VampireCard>
    );
  }

  const attributeCards = [
    <AttributeCard
      key="physical"
      title="Physical"
      stats={attributeData.physical}
      onStatChange={handleAttributeChange('physical')}
      disabled={disabled}
    />, 
    <AttributeCard
      key="social"
      title='Social'
      stats={attributeData.social}
      onStatChange={handleAttributeChange('social')}
      disabled={disabled}
    />, 
    <AttributeCard
      key="mental"
      title="Mental"
      stats={attributeData.mental}
      onStatChange={handleAttributeChange('mental')}
      disabled={disabled}
    />
  ];

  return (
    <VampireCard>
      <CardHeader title="Attributes" />
      <CardContent>
        {isMobile ? (
          <StatCarousel items={attributeCards} />
        ) : (
          <AdaptiveCardLayout 
            cards={attributeCards}
            spacing={4}
            minCardWidth={300}
          />
        )}
      </CardContent>
    </VampireCard>
  );
};
