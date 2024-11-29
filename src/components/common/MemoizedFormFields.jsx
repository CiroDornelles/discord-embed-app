import React, { memo } from 'react';
import { TextField, FormControl, InputLabel, OutlinedInput } from '@mui/material';

export const MemoizedTextField = memo(({ label, value, onChange, ...props }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    {...props}
  />
));

export const MemoizedFormControl = memo(({ children, ...props }) => (
  <FormControl variant="outlined" {...props}>
    {children}
  </FormControl>
));

export const MemoizedInputField = memo(({ label, value, onChange, ...props }) => (
  <FormControl variant="outlined" {...props}>
    <InputLabel>{label}</InputLabel>
    <OutlinedInput
      label={label}
      value={value}
      onChange={onChange}
    />
  </FormControl>
));

// Add display names for better debugging
MemoizedTextField.displayName = 'MemoizedTextField';
MemoizedFormControl.displayName = 'MemoizedFormControl';
MemoizedInputField.displayName = 'MemoizedInputField';
