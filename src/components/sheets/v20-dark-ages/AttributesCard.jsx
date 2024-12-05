import React from 'react';
import PropTypes from 'prop-types';
import { 
  Box,
  CardContent, 
  CardHeader, 
  CircularProgress,
  useTheme,
  useMediaQuery,
  styled,
} from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { AdaptiveCardLayout } from '../../ui/AdaptiveCardLayout';
import { StatCarousel } from '../common/StatCarousel';
import { useAttributes } from '../../../hooks/useAttributes';
import { AttributeCard } from './AttributeCard';

const LoadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  minHeight: 200,
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  color: theme.palette.error.main,
  backgroundColor: theme.palette.error.light,
  borderRadius: theme.shape.borderRadius,
  '& .MuiTypography-root': {
    color: theme.palette.error.dark,
  }
}));

const AttributesCard = React.memo(({
  onAttributeChange,
  disabled = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { attributeData, loading, error } = useAttributes();

  const handleAttributeChange = React.useCallback((category) => (attribute, value) => {
    if (onAttributeChange) {
      onAttributeChange(category, attribute, value);
    }
  }, [onAttributeChange]);

  const attributeCards = React.useMemo(() => [
    <AttributeCard
      key="physical"
      title="Physical"
      stats={attributeData?.physical}
      onStatChange={handleAttributeChange('physical')}
      disabled={disabled}
    />, 
    <AttributeCard
      key="social"
      title="Social"
      stats={attributeData?.social}
      onStatChange={handleAttributeChange('social')}
      disabled={disabled}
    />, 
    <AttributeCard
      key="mental"
      title="Mental"
      stats={attributeData?.mental}
      onStatChange={handleAttributeChange('mental')}
      disabled={disabled}
    />
  ], [attributeData, handleAttributeChange, disabled]);

  const renderContent = () => {
    if (loading) {
      return (
        <LoadingBox>
          <CircularProgress 
            size={40}
            thickness={4}
            sx={{ color: 'primary.main' }}
          />
        </LoadingBox>
      );
    }

    if (error) {
      return (
        <ErrorBox>
          <Box sx={{ textAlign: 'center' }}>
            <Box 
              component="span" 
              sx={{ 
                display: 'block',
                fontSize: '2rem',
                mb: 1,
                color: 'error.dark'
              }}
            >
              ⚠️
            </Box>
            Error loading attributes data. Please try again.
          </Box>
        </ErrorBox>
      );
    }

    return isMobile ? (
      <StatCarousel items={attributeCards} />
    ) : (
      <AdaptiveCardLayout 
        cards={attributeCards}
        spacing={4}
        minCardWidth={300}
      />
    );
  };

  return (
    <VampireCard 
      elevation={theme.shadows[3]}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader 
        title="Attributes" 
        sx={{
          '& .MuiCardHeader-title': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightBold,
            textAlign: 'center',
          }
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: theme.spacing(2) }}>
        {renderContent()}
      </CardContent>
    </VampireCard>
  );
});

AttributesCard.propTypes = {
  onAttributeChange: PropTypes.func,
  disabled: PropTypes.bool,
};

AttributesCard.defaultProps = {
  disabled: false,
  onAttributeChange: () => {},
};

AttributesCard.displayName = 'AttributesCard';

export { AttributesCard };
