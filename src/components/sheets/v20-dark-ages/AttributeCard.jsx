import React from 'react';
import PropTypes from 'prop-types';
import { 
  Box,
  CardContent, 
  CardHeader, 
  Typography,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

const AttributeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  },
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AttributeLabel = styled(Typography)(({ theme }) => ({
  minWidth: 120,
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightMedium,
  '& span': {
    cursor: 'help',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shortest,
    }),
  }
}));

const AttributeTooltip = React.memo(({ name, description }) => (
  <Box sx={{ p: 1, maxWidth: 300 }}>
    <Typography variant="subtitle1" sx={{ 
      fontWeight: 'bold',
      color: 'primary.main',
      mb: 0.5 
    }}>
      {name}
    </Typography>
    <Typography variant="body2" sx={{ 
      fontStyle: 'italic',
      color: 'text.secondary'
    }}>
      {description}
    </Typography>
  </Box>
));

AttributeTooltip.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

AttributeTooltip.displayName = 'AttributeTooltip';

const AttributeCard = React.memo(({
  title,
  stats,
  onStatChange,
  disabled = false
}) => {
  const theme = useTheme();

  const renderAttributeName = React.useCallback((attribute, attributeData) => (
    <Tooltip
      title={<AttributeTooltip name={attributeData.name} description={attributeData.description} />}
      arrow
      placement="left"
      enterDelay={200}
      leaveDelay={200}
    >
      <span>{attributeData.name}</span>
    </Tooltip>
  ), []);

  const handleStatChange = React.useCallback((name, newValue) => {
    if (!disabled && onStatChange) {
      onStatChange(name, newValue);
    }
  }, [disabled, onStatChange]);

  return (
    <VampireCard 
      elevation={theme.shadows[2]}
      sx={{ 
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        '&:hover': {
          elevation: theme.shadows[4],
        }
      }}
    >
      <CardHeader 
        title={title} 
        sx={{ 
          textAlign: 'center',
          '& .MuiCardHeader-title': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightBold,
          }
        }} 
      />
      <CardContent>
        {Object.entries(stats || {}).map(([name, data]) => (
          <AttributeBox 
            key={name}
            role="group"
            aria-label={`${data.name} attribute group`}
          >
            <AttributeLabel variant="body1">
              {renderAttributeName(name, data)}
            </AttributeLabel>
            <StatDots
              value={data.value || 0}
              max={5}
              onChange={(newValue) => handleStatChange(name, newValue)}
              disabled={disabled}
              descriptions={data.levels || {}}
              aria-label={`${data.name} rating`}
            />
          </AttributeBox>
        ))}
      </CardContent>
    </VampireCard>
  );
});

AttributeCard.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    description: PropTypes.string.isRequired,
    levels: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
  onStatChange: PropTypes.func,
  disabled: PropTypes.bool,
};

AttributeCard.defaultProps = {
  disabled: false,
  onStatChange: () => {},
};

AttributeCard.displayName = 'AttributeCard';

export { AttributeCard };
