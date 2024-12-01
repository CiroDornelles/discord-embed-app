import { Card, styled } from '@mui/material';
import { colors } from '../../theme/colors';

export const VampireCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'visible',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    background: `linear-gradient(45deg, ${colors.primary.main}, transparent)`,
    borderRadius: 'inherit',
    zIndex: -1,
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiCardHeader-root': {
    padding: theme.spacing(2, 3),
    '& .MuiCardHeader-title': {
      ...theme.typography.h5,
      color: colors.primary.main,
    },
    '& .MuiCardHeader-subheader': {
      ...theme.typography.subtitle2,
    },
  },
}));
