import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const StatCarousel = ({ items }) => {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '400px', // Altura mínima para garantir que os cards sejam visíveis
      '& .swiper': {
        width: '100%',
        height: '100%',
        padding: '20px 0',
      },
      '& .swiper-slide': {
        width: '300px',
        height: 'auto', // Altura automática baseada no conteúdo
        '& > *': { // Aplica estilos a todos os filhos diretos do slide
          height: '100%',
          width: '100%',
        }
      },
      '& .swiper-slide-active': {
        transform: 'scale(1)',
      },
      '& .swiper-slide-prev, & .swiper-slide-next': {
        transform: 'scale(0.85)',
      },
      '& .swiper-pagination': {
        bottom: 0,
      },
      '& .swiper-pagination-bullet': {
        backgroundColor: 'primary.main',
      },
    }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ 
              height: '100%',
              '& > *': { // Garante que o card ocupe todo o espaço disponível
                height: '100%',
                width: '100%',
              }
            }}>
              {item}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
