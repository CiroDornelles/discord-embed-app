import React from 'react';
import { Tooltip } from '@mui/material';

const DotRating = ({ 
  value = 0, 
  onChange, 
  max = 5, 
  hasSelectedItem = true, 
  onEmptyClick,
  tooltips = []
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

    if (tooltips[index]) {
      return (
        <Tooltip
          key={index}
          title={tooltips[index]}
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
