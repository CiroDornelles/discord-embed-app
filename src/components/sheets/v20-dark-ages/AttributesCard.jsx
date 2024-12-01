import React from 'react';
import { CardContent, CardHeader } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AttributeCard } from './AttributeCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';

export const AttributesCard = ({
  physical,
  social,
  mental,
  onAttributeChange,
  disabled = false
}) => {
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
      title="Social"
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
        <AdaptiveCardLayout 
          cards={attributeCards}
          spacing={4}
          minCardWidth={300}
        />
      </CardContent>
    </VampireCard>
  );
};
