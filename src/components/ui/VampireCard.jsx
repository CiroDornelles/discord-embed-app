import { Card, styled } from '@mui/material';

export const VampireCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${theme.palette.divider}`,
  overflow: 'visible',
  transition: theme.transitions.create(
    ['box-shadow', 'transform', 'border-color'],
    {
      duration: theme.transitions.duration.shorter,
    }
  ),

  // Gradient border effect
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}40, transparent)`,
    borderRadius: 'inherit',
    zIndex: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
    opacity: 0.5,
  },

  // Hover effects
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    '&::before': {
      opacity: 1,
    },
  },

  // Card content styling
  '& .MuiCardContent-root': {
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
  },

  // Card header styling
  '& .MuiCardHeader-root': {
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(2.5, 3),
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,

    '& .MuiCardHeader-title': {
      fontFamily: theme.typography.h5.fontFamily,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: theme.palette.primary.main,
      textAlign: 'center',
      textShadow: `1px 1px 2px ${theme.palette.common.black}`,
    },

    '& .MuiCardHeader-subheader': {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.subtitle2.fontSize,
      textAlign: 'center',
    },
  },

  // Actions section styling
  '& .MuiCardActions-root': {
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
  },

  // Form field styling within card
  '& .MuiFormControl-root': {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },

  // Avatar styling if present
  '& .MuiAvatar-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },

  // Icon styling
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));
