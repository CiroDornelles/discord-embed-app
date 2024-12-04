import React from 'react';
import { 
  Box,
  CardContent, 
  CardHeader, 
  CircularProgress,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AttributeCard } from './AttributeCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';
import { StatCarousel } from '../common/StatCarousel';
import { useAttributes } from '../../../hooks/useAttributes';

const LoadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4)
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(2)
}));

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
          <LoadingBox>
            <CircularProgress />
          </LoadingBox>
        </CardContent>
      </VampireCard>
    );
  }

  if (error) {
    return (
      <VampireCard>
        <CardHeader title="Attributes" />
        <CardContent>
          <ErrorBox>
            Error loading attributes data. Please try again.
          </ErrorBox>
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
      title="Social"
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
