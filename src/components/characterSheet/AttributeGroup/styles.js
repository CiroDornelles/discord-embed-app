import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledAttributeBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: { xs: '300px', sm: '350px' },
  padding: 'var(--spacing-lg)',
  backgroundColor: 'var(--background-secondary)',
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--shadow-md)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    boxShadow: 'var(--shadow-lg)',
    transform: 'translateY(-2px)',
  }
}));

export const StyledAttributeRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 'var(--spacing-sm)',
  marginBottom: 'var(--spacing-sm)',
  borderRadius: 'var(--border-radius-sm)',
  transition: 'background-color 0.2s ease',
  
  '&:hover': {
    backgroundColor: 'var(--background-hover)',
  }
}));

export const StyledAttributeName = styled(Box)(({ theme }) => ({
  fontFamily: 'MedievalSharp, cursive',
  fontSize: '1.1rem',
  color: 'var(--text)',
  marginRight: 'var(--spacing-md)',
  flex: '1',
}));
