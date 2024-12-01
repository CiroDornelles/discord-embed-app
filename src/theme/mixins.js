export const mixins = {
  cardHover: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(139, 0, 0, 0.3)',
    }
  },
  vampireGradient: {
    backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  },
  titleDecoration: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-0.5em',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '2px',
      backgroundColor: '#8b0000',
      opacity: 0.7,
    }
  },
  statDot: {
    borderRadius: '50%',
    border: '2px solid',
    borderColor: 'primary.main',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderColor: 'rgba(139, 0, 0, 0.7)',
      transform: 'scale(1.05)',
    },
    '&.filled': {
      backgroundColor: 'primary.main',
      '&:hover': {
        backgroundColor: 'rgba(139, 0, 0, 0.95)',
        borderColor: 'rgba(139, 0, 0, 0.7)',
        transform: 'scale(1.05)',
      }
    },
    '&.empty': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(139, 0, 0, 0.03)',
        borderColor: 'rgba(139, 0, 0, 0.7)',
        transform: 'scale(1.05)',
      }
    },
    '&.disabled': {
      cursor: 'default',
      '&:hover': {
        transform: 'none',
        borderColor: 'primary.main',
      }
    }
  },
  inputField: {
    '& .MuiInputBase-input': {
      color: '#ffffff',
    },
    '& .MuiInputLabel-root': {
      color: '#8b0000',
      fontFamily: 'MedievalSharp, cursive',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#000000',
      transition: 'all 0.2s ease-in-out',
      '& fieldset': {
        borderColor: '#3d0000',
      },
      '&:hover fieldset': {
        borderColor: '#8b0000',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8b0000',
        borderWidth: '2px',
      },
    },
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
};
