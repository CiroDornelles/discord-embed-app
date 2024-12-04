import React from 'react';
import { 
  Box,
  CardContent, 
  CardHeader, 
  Typography,
  Tooltip,
  styled
} from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { StatDots } from '../common/StatDots';

const AttributeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0.5, 0)
}));

const AttributeLabel = styled(Typography)(({ theme }) => ({
  minWidth: 120,
  '& span': {
    cursor: 'help'
  }
}));

const AttributeTooltip = ({ name, description }) => (
  <Box>
    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
      {name}
    </Typography>
    <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
      {description}
    </Typography>
  </Box>
);

export const AttributeCard = ({
  title,
  stats,
  onStatChange,
  disabled = false
}) => {
  const renderAttributeName = (attribute, attributeData) => (
    <Tooltip
      title={<AttributeTooltip name={attributeData.name} description={attributeData.description} />}
      arrow
    >
      <span>{attributeData.name}</span>
    </Tooltip>
  );

  return (
    <VampireCard sx={{ 
      width: '100%',
      maxWidth: 400,
      margin: '0 auto',
    }}>
      <CardHeader 
        title={title} 
        sx={{ textAlign: 'center' }} 
      />
      <CardContent>
        {Object.entries(stats || {}).map(([name, data]) => (
          <AttributeBox key={name}>
            <AttributeLabel>
              {renderAttributeName(name, data)}
            </AttributeLabel>
            <StatDots
              value={data.value || 0}
              max={5}
              onChange={(newValue) => onStatChange(name, newValue)}
              disabled={disabled}
              descriptions={data.levels || {}}
            />
          </AttributeBox>
        ))}
      </CardContent>
    </VampireCard>
  );
};
