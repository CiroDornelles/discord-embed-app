import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const coverflowEffect = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true
};

export const CardCoverflow = ({ 
  cards,
  initialSlide = 0,
  onSlideChange = () => {},
}) => {
  return (
    <Box sx={{
      width: '100%',
      padding: '50px 0',
      position: 'relative',
      '& .swiper': {
        width: '100%',
        paddingTop: '50px',
        paddingBottom: '50px',
      },
      '& .swiper-slide': {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        maxWidth: '500px',
        filter: 'brightness(0.7)',
        transition: 'filter 0.3s ease-in-out',
        
        '&.swiper-slide-active': {
          filter: 'brightness(1)',
        },
      },
      '& .swiper-pagination': {
        position: 'absolute',
        bottom: '10px',
      },
      '& .swiper-pagination-bullet': {
        backgroundColor: (theme) => theme.palette.primary.main,
        opacity: 0.5,
        '&.swiper-pagination-bullet-active': {
          opacity: 1,
        },
      },
      // Adiciona um gradiente sutil nas bordas para melhorar o efeito visual
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100px',
        zIndex: 2,
        pointerEvents: 'none',
      },
      '&::before': {
        left: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)',
      },
      '&::after': {
        right: 0,
        background: 'linear-gradient(to left, rgba(0,0,0,0.5), transparent)',
      },
    }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={initialSlide}
        coverflowEffect={coverflowEffect}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            {card}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
