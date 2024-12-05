import React, { useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Tooltip, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const DotContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  alignItems: 'center',
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  '&:focus-within': {
    outline: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
  '&[aria-disabled="true"]': {
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed',
  }
}));

const Dot = styled(Box, {
  shouldForwardProp: (prop) => !['active', 'dotSize', 'focused', 'disabled'].includes(prop)
})(({ theme, active, dotSize, disabled, focused }) => ({
  width: dotSize,
  height: dotSize,
  borderRadius: '50%',
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: theme.transitions.create(
    ['background-color', 'border-color', 'box-shadow', 'opacity', 'transform'],
    { duration: theme.transitions.duration.shorter }
  ),
  border: `2px solid ${
    disabled 
      ? theme.palette.action.disabled 
      : active 
        ? theme.palette.primary.main 
        : theme.palette.grey[400]
  }`,
  backgroundColor: active 
    ? disabled 
      ? theme.palette.action.disabled 
      : theme.palette.primary.main 
    : 'transparent',
  opacity: disabled ? theme.palette.action.disabledOpacity : 1,
  transform: 'scale(1)',
  
  '&:hover': !disabled && {
    backgroundColor: active 
      ? theme.palette.primary.dark 
      : alpha(theme.palette.primary.main, 0.1),
    borderColor: active 
      ? theme.palette.primary.dark 
      : theme.palette.primary.main,
    transform: 'scale(1.1)',
    opacity: 0.9,
  },
  
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.primary.main}`,
  },
  
  '&:active': !disabled && {
    transform: 'scale(0.95)',
  },
  
  ...(focused && {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.primary.main}`,
  }),

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
  }
}));

const StatDots = React.memo(({
  value = 0,
  max = 5,
  onChange,
  disabled = false,
  size = 20,
  descriptions = {},
  'aria-label': ariaLabel,
  name,
}) => {
  const theme = useTheme();
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleClick = useCallback((index) => {
    if (!disabled && onChange) {
      onChange(index + 1);
    }
  }, [disabled, onChange]);

  const handleContextMenu = useCallback((e, index) => {
    e.preventDefault();
    if (!disabled && onChange) {
      onChange(index);
    }
  }, [disabled, onChange]);

  const handleKeyDown = useCallback((e, index) => {
    if (disabled) return;
    
    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        handleClick(index);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, max - 1));
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(max - 1);
        break;
      default:
        break;
    }
  }, [disabled, handleClick, max]);

  const dots = useMemo(() => (
    Array(max).fill(0).map((_, index) => {
      const level = index + 1;
      const description = descriptions[level] || `Level ${level}`;
      
      return (
        <Tooltip 
          key={index}
          title={description}
          arrow
          placement="top"
          enterDelay={400}
          leaveDelay={200}
        >
          <Dot
            role="button"
            tabIndex={0}
            onClick={() => handleClick(index)}
            onContextMenu={(e) => handleContextMenu(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(-1)}
            active={index < value}
            disabled={disabled}
            dotSize={size}
            focused={focusedIndex === index}
            aria-pressed={index < value}
            aria-label={description}
            data-testid={`${name}-dot-${index}`}
          />
        </Tooltip>
      );
    })
  ), [value, max, disabled, size, descriptions, focusedIndex, handleClick, handleContextMenu, handleKeyDown, name]);

  return (
    <DotContainer
      role="group"
      aria-label={ariaLabel || 'Rating dots'}
      aria-disabled={disabled}
      data-testid={name}
    >
      {dots}
    </DotContainer>
  );
});

StatDots.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.number,
  descriptions: PropTypes.objectOf(PropTypes.string),
  'aria-label': PropTypes.string,
  name: PropTypes.string,
};

StatDots.defaultProps = {
  value: 0,
  max: 5,
  disabled: false,
  size: 20,
  descriptions: {},
  name: 'stat-dots',
};

StatDots.displayName = 'StatDots';

export { StatDots };
