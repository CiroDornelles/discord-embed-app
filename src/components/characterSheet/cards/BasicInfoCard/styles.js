import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'var(--background)',
  borderRadius: 'var(--border-radius-lg)',
  border: '1px solid var(--primary-dark)',
  height: '100%',
  minWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'var(--shadow-sm)',
  transition: 'var(--transition-normal)',
  transform: 'translateZ(0)', // GPU acceleration
  '&:hover': {
    boxShadow: 'var(--shadow-md)',
    transform: 'translateY(-2px) translateZ(0)',
  },
  '& .MuiInputBase-input': {
    color: 'var(--text)',
  },
  '& .MuiInputLabel-root': {
    color: 'var(--primary-color)',
    fontFamily: 'MedievalSharp, cursive',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'var(--background)',
    transition: 'var(--transition-fast)',
    '& fieldset': {
      borderColor: 'var(--primary-dark)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--primary-color)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary-color)',
      borderWidth: '2px',
    },
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 'var(--spacing-lg)',
  '&:last-child': {
    paddingBottom: 'var(--spacing-lg)',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--primary-color)',
  fontFamily: 'MedievalSharp, cursive',
  marginBottom: 'var(--spacing-lg)',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
}));
