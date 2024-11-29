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
    
    // Se clicar na mesma bolinha, diminui o valor
    if (newValue === value) {
      onChange(value - 1);
    } else {
      // Se clicar em uma bolinha diferente, atualiza para o novo valor
      onChange(newValue);
    }
  };

  const renderDot = (index) => {
    const filled = index < value;
    const dot = (
      <div
        onClick={() => handleClick(index + 1)}
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: filled ? '#8b0000' : 'transparent',
          border: '2px solid #8b0000',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          '&:hover': {
            backgroundColor: filled ? '#8b0000' : 'rgba(139, 0, 0, 0.3)',
          }
        }}
      />
    );

    // Lógica para obter o texto do tooltip baseado no tipo de dado
    let tooltipText = tooltips[index];
    
    if (!tooltipText && attributeData?.levels) {
      if (Array.isArray(attributeData.levels)) {
        // Para virtudes e backgrounds (array de objetos com level e description)
        const levelData = attributeData.levels.find(level => level.level === index + 1);
        tooltipText = levelData?.description;
      } else if (typeof attributeData.levels === 'object') {
        // Para atributos (objeto com chaves numéricas)
        tooltipText = attributeData.levels[index + 1];
      }
    }

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
                bgcolor: 'rgba(0, 0, 0, 0.95)',
                color: 'white',
                fontSize: '0.875rem',
                padding: '8px 12px',
                maxWidth: 300,
                border: '1px solid #8b0000',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                '& .MuiTooltip-arrow': {
                  color: 'rgba(0, 0, 0, 0.95)',
                  '&::before': {
                    border: '1px solid #8b0000'
                  }
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
