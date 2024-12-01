import { TextField, styled } from '@mui/material';
import { colors } from '../../theme/colors';

export const VampireTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: colors.background.paper,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: colors.background.elevated,
    },
    '&.Mui-focused': {
      backgroundColor: colors.background.elevated,
      boxShadow: `0 0 0 2px ${colors.primary.main}33`,
    },
  },
  '& .MuiInputLabel-root': {
    color: colors.primary.main,
    '&.Mui-focused': {
      color: colors.primary.light,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.border.primary,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.primary.main,
    borderWidth: 2,
  },
  '& .MuiInputBase-input': {
    color: colors.text.primary,
  },
}));
