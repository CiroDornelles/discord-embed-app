import React, { useState } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  perspective: '1000px',
}));

const CarouselWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s ease',
}));

const CarouselItem = styled(Box)(({ theme, active, position }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: 'all 0.5s ease',
  transform: position === 'center' 
    ? 'translateX(0) scale(1) translateZ(0)'
    : position === 'left'
    ? 'translateX(-100%) scale(0.8) translateZ(-100px)'
    : 'translateX(100%) scale(0.8) translateZ(-100px)',
  opacity: position === 'center' ? 1 : 0.6,
  zIndex: position === 'center' ? 2 : 1,
}));

const CarouselButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 3,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.left': {
    left: theme.spacing(2),
  },
  '&.right': {
    right: theme.spacing(2),
  },
}));

const CoverflowCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : React.Children.count(children) - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < React.Children.count(children) - 1 ? prev + 1 : 0));
  };

  const getItemPosition = (index) => {
    if (index === activeIndex) return 'center';
    if (index === activeIndex - 1 || (activeIndex === 0 && index === React.Children.count(children) - 1)) return 'left';
    return 'right';
  };

  return (
    <CarouselContainer>
      <CarouselButton className="left" onClick={handlePrevious}>
        <KeyboardArrowLeft />
      </CarouselButton>
      
      <CarouselWrapper>
        {React.Children.map(children, (child, index) => (
          <CarouselItem position={getItemPosition(index)}>
            {child}
          </CarouselItem>
        ))}
      </CarouselWrapper>
      
      <CarouselButton className="right" onClick={handleNext}>
        <KeyboardArrowRight />
      </CarouselButton>
    </CarouselContainer>
  );
};

export default CoverflowCarousel;
