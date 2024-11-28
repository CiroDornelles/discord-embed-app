import React, { useState } from 'react';
import { Box, Tooltip } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import 'swiper/css';

const DotRating = ({ value = 1, onChange, max = 5, attributeData = {} }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleSlideChange = (swiper) => {
    // Previne o carrossel principal de deslizar
    const parentSwiper = swiper.el.closest('.swiper-parent')?.swiper;
    if (parentSwiper) {
      parentSwiper.allowTouchMove = false;
    }

    // Calcula o novo valor baseado na direção do slide
    const direction = swiper.touches.diff > 0 ? 1 : -1;
    const newValue = Math.max(1, Math.min(max, currentValue + direction));
    
    if (newValue !== currentValue) {
      setCurrentValue(newValue);
      onChange?.(newValue);
    }

    // Reseta a posição do Swiper para o centro
    swiper.slideTo(1, 0);
  };

  const handleTouchEnd = (swiper) => {
    // Reativa o carrossel principal
    const parentSwiper = swiper.el.closest('.swiper-parent')?.swiper;
    if (parentSwiper) {
      parentSwiper.allowTouchMove = true;
    }
  };

  const handleClick = (index) => {
    const newValue = index + 1;
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Box sx={{ 
      width: '150px',
      '.swiper-dots': {
        overflow: 'visible'
      }
    }}>
      <Swiper
        modules={[Virtual]}
        className="swiper-dots"
        slidesPerView={1}
        centeredSlides={true}
        resistanceRatio={0}
        threshold={5}
        onSlideChange={handleSlideChange}
        onTouchEnd={handleTouchEnd}
        virtual
      >
        <SwiperSlide>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 0.5,
            padding: '8px 0'
          }}>
            {[...Array(max)].map((_, index) => (
              <Tooltip
                key={index}
                title={
                  attributeData ? (
                    <Box>
                      <strong>{attributeData.name}</strong>
                      <br />
                      {attributeData.description}
                      <br />
                      <em>{attributeData.levels?.[index + 1]}</em>
                    </Box>
                  ) : ''
                }
                arrow
              >
                <Box
                  onClick={() => handleClick(index)}
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  {index < currentValue ? (
                    <CircleIcon
                      sx={{
                        color: 'purple',
                        fontSize: '1.2rem',
                      }}
                    />
                  ) : (
                    <CircleOutlinedIcon
                      sx={{
                        color: 'purple',
                        fontSize: '1.2rem',
                      }}
                    />
                  )}
                </Box>
              </Tooltip>
            ))}
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default DotRating;
