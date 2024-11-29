import { useState, useEffect, useCallback } from 'react';

export const useBloodPoolAnimation = (value, onChange) => {
  const [animatingValue, setAnimatingValue] = useState(value);
  const [animationStatus, setAnimationStatus] = useState('idle'); // 'idle', 'animating', 'settling'

  useEffect(() => {
    if (animationStatus === 'idle') {
      setAnimatingValue(value);
    }
  }, [value, animationStatus]);

  const animateBloodFill = useCallback((startValue, targetValue) => {
    setAnimationStatus('animating');
    setAnimatingValue(startValue);

    const fillNextSquare = (current) => {
      if (current <= targetValue) {
        setAnimatingValue(current);
        setTimeout(() => fillNextSquare(current + 1), 150);
      } else {
        setAnimationStatus('settling');
        setTimeout(() => {
          setAnimationStatus('idle');
          onChange(targetValue);
        }, 600);
      }
    };

    fillNextSquare(startValue + 1);
  }, [onChange]);

  const handleBloodPointChange = useCallback((index) => {
    if (!onChange || animationStatus !== 'idle') return;

    const targetValue = index + 1;
    
    if (targetValue === value) {
      onChange(index);
      return;
    }

    if (targetValue > value) {
      animateBloodFill(value, targetValue);
    } else {
      onChange(targetValue - 1);
    }
  }, [value, onChange, animationStatus, animateBloodFill]);

  return {
    animatingValue,
    isAnimating: animationStatus === 'animating',
    isSettling: animationStatus === 'settling',
    handleBloodPointChange
  };
};
