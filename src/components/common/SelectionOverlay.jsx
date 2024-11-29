import React from 'react';
import { Box, Typography, IconButton, Paper, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DotRating from '../characterSheet/DotRating';

const SelectionOverlay = ({
  isOpen,
  onClose,
  title,
  options,
  onSelect,
  maxDots = 5,
  description
}) => {
  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
        backdropFilter: 'blur(3px)',
      }}
      onClick={onClose}
    >
      <Paper
        sx={{
          width: '90%',
          maxWidth: '800px',
          maxHeight: '80vh',
          overflow: 'auto',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          p: 3,
          position: 'relative',
          border: '1px solid #8b0000',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#8b0000',
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" sx={{ mb: 2, color: '#8b0000', textAlign: 'center' }}>
          {title}
        </Typography>

        {description && (
          <Typography variant="body1" sx={{ mb: 3, color: '#ccc', textAlign: 'center', fontStyle: 'italic' }}>
            {description}
          </Typography>
        )}

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
        }}>
          {options.map((option) => (
            <Paper
              key={option.id}
              onClick={() => onSelect(option)}
              sx={{
                p: 2,
                backgroundColor: '#2a2a2a',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: '#3a3a3a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(139, 0, 0, 0.2)',
                },
                border: '1px solid #444',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff',
                  borderBottom: '1px solid #8b0000',
                  pb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {option.name}
                <Typography variant="caption" sx={{ color: '#999' }}>
                  ({option.originalName})
                </Typography>
              </Typography>
              
              {option.description && (
                <Typography variant="body2" sx={{ color: '#ccc', flex: 1 }}>
                  {option.description}
                </Typography>
              )}
              
              {option.regainWillpower && (
                <Box sx={{ mt: 1, p: 1, backgroundColor: 'rgba(139, 0, 0, 0.1)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: '#8b0000', fontWeight: 'bold' }}>
                    Recuperar Força de Vontade:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc' }}>
                    {option.regainWillpower}
                  </Typography>
                </Box>
              )}
            </Paper>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default SelectionOverlay;
