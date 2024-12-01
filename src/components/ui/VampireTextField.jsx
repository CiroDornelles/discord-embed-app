import { TextField, styled } from '@mui/material';

export const VampireTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create([
      'border-color',
      'box-shadow',
      'background-color'
    ]),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.action.hover,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}33`,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.divider,
    transition: theme.transitions.create('border-color'),
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 0.7,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    color: theme.palette.text.secondary,
  },
}));
