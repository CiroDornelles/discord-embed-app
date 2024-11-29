import React from 'react';
import { Tooltip } from '@mui/material';

const DotRating = ({ 
  value = 0, 
  onChange, 
  max = 5, 
  hasSelectedItem = true, 
  onEmptyClick,
  tooltips = [],
  attributeData = {}
}) => {
  const handleClick = (newValue) => {
    if (!hasSelectedItem && onEmptyClick) {
      onEmptyClick();
      return;
    }
    
    if (newValue === value) {
      onChange(newValue - 1);
    } else {
      onChange(newValue);
    }
  };

  const renderDot = (index) => {
    const filled = index < value;
    const dot = (
      <div
        onClick={() => handleClick(index + 1)}
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: filled ? '#8b0000' : 'transparent',
          border: '2px solid #8b0000',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
      />
    );

    // Ajuste para acessar corretamente os níveis do atributo
    const tooltipText = tooltips[index] || (attributeData.levels && attributeData.levels[index + 1]);

    if (tooltipText) {
      return (
        <Tooltip
          key={index}
          title={tooltipText}
          placement="top"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'rgba(0, 0, 0, 0.87)',
                color: 'white',
                fontSize: '0.875rem',
                padding: '8px 12px',
                maxWidth: 300,
                '& .MuiTooltip-arrow': {
                  color: 'rgba(0, 0, 0, 0.87)'
                }
              }
            }
          }}
        >
          <span style={{ display: 'inline-flex' }}>{dot}</span>
        </Tooltip>
      );
    }

    return <span key={index} style={{ display: 'inline-flex' }}>{dot}</span>;
  };

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: max }).map((_, index) => renderDot(index))}
    </div>
  );
};

export default DotRating;
