import React from 'react';
import { CardContent, CardHeader, useTheme, useMediaQuery } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AttributeCard } from './AttributeCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';
import { StatCarousel } from '../common/StatCarousel';

export const AttributesCard = ({
  physical,
  social,
  mental,
  onAttributeChange,
  disabled = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAttributeChange = (category) => (attribute, value) => {
    onAttributeChange?.(category, attribute, value);
  };

  const attributeCards = [
    <AttributeCard
      key="physical"
      title="Physical"
      stats={physical}
      onStatChange={handleAttributeChange('physical')}
      disabled={disabled}
    />,
    <AttributeCard
      key="social"
      title='Social'
      stats={social}
      onStatChange={handleAttributeChange('social')}
      disabled={disabled}
    />,
    <AttributeCard
      key="mental"
      title="Mental"
      stats={mental}
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
