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

  const renderDots = (option) => {
    return (
      <Box sx={{ display: 'flex', gap: 1 }}>
        {Array.from({ length: maxDots }).map((_, index) => (
          <Tooltip
            key={index}
            title={option.levels?.[index]?.description || ''}
            placement="top"
            sx={{
              tooltip: {
                backgroundColor: '#000000',
                border: '1px solid #3d0000',
                color: '#ffffff',
                fontFamily: 'MedievalSharp, cursive',
                fontSize: '0.9rem',
                maxWidth: 300
              }
            }}
          >
            <div
              onClick={() => onSelect({ ...option, value: index + 1 })}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#8b0000',
                border: '2px solid #8b0000',
                cursor: 'pointer',
                opacity: option.value === index + 1 ? 1 : 0.5,
                transition: 'opacity 0.2s'
              }}
            />
          </Tooltip>
        ))}
      </Box>
    );
  };

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
          maxWidth: '600px',
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

        <Typography variant="h5" sx={{ mb: 3, color: '#8b0000' }}>
          {title}
        </Typography>

        {description && (
          <Typography variant="body2" sx={{ mb: 2, color: '#999' }}>
            {description}
          </Typography>
        )}

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 2,
        }}>
          {options.map((option) => (
            <Paper
              key={option.id}
              sx={{
                p: 2,
                backgroundColor: '#2a2a2a',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: '#3a3a3a',
                  transform: 'translateY(-2px)',
                },
                border: '1px solid #444',
              }}
            >
              <Typography variant="subtitle1" sx={{ mb: 1, color: '#fff' }}>
                {option.name}
              </Typography>
              {option.description && (
                <Typography variant="body2" sx={{ color: '#ccc', mb: 1 }}>
                  {option.description}
                </Typography>
              )}
              {renderDots(option)}
            </Paper>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default SelectionOverlay;
