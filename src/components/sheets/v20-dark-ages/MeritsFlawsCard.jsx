import React from 'react';
import { CardContent, CardHeader, Box, TextField, IconButton } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const MeritsFlawsCard = ({
  merits = [],
  flaws = [],
  onMeritsChange,
  onFlawsChange,
  disabled = false
}) => {
  const handleAddMerit = () => {
    onMeritsChange?.([...merits, { name: '', value: 0 }]);
  };

  const handleAddFlaw = () => {
    onFlawsChange?.([...flaws, { name: '', value: 0 }]);
  };

  const handleRemoveMerit = (index) => {
    const newMerits = merits.filter((_, i) => i !== index);
    onMeritsChange?.(newMerits);
  };

  const handleRemoveFlaw = (index) => {
    const newFlaws = flaws.filter((_, i) => i !== index);
    onFlawsChange?.(newFlaws);
  };

  const handleMeritChange = (index, field, value) => {
    const newMerits = [...merits];
    newMerits[index] = { ...newMerits[index], [field]: value };
    onMeritsChange?.(newMerits);
  };

  const handleFlawChange = (index, field, value) => {
    const newFlaws = [...flaws];
    newFlaws[index] = { ...newFlaws[index], [field]: value };
    onFlawsChange?.(newFlaws);
  };

  const renderTraitList = (items, onAdd, onRemove, onChange, title) => (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1
      }}>
        <CardHeader 
          title={title} 
          sx={{ p: 0 }}
        />
        <IconButton 
          onClick={onAdd}
          disabled={disabled}
          size="small"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </Box>
      {items.map((item, index) => (
        <Box 
          key={index}
          sx={{ 
            display: 'flex',
            gap: 1,
            mb: 1,
            alignItems: 'center'
          }}
        >
          <TextField
            size="small"
            label="Name"
            value={item.name}
            onChange={(e) => onChange(index, 'name', e.target.value)}
            disabled={disabled}
            sx={{ flexGrow: 1 }}
          />
          <TextField
            size="small"
            label="Value"
            type="number"
            value={item.value}
            onChange={(e) => onChange(index, 'value', parseInt(e.target.value, 10) || 0)}
            disabled={disabled}
            sx={{ width: '80px' }}
            inputProps={{ min: -7, max: 7 }}
          />
          <IconButton 
            onClick={() => onRemove(index)}
            disabled={disabled}
            size="small"
            color="error"
          >
            <RemoveIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );

  return (
    <VampireCard sx={{ height: '100%' }}>
      <CardContent>
        {renderTraitList(
          merits,
          handleAddMerit,
          handleRemoveMerit,
          handleMeritChange,
          'Merits'
        )}
        {renderTraitList(
          flaws,
          handleAddFlaw,
          handleRemoveFlaw,
          handleFlawChange,
          'Flaws'
        )}
      </CardContent>
    </VampireCard>
  );
};
