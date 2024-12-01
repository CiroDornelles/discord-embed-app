import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const StatCarousel = ({ items }) => {
  return (
    <Box sx={{
      '& .swiper': {
        width: '100%',
        height: '100%',
        pb: 4,
      },
      '& .swiper-pagination': {
        bottom: 0,
      },
      '& .swiper-pagination-bullet': {
        backgroundColor: 'primary.main',
      },
      '& .swiper-button-next, & .swiper-button-prev': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.light',
        },
        '&.swiper-button-disabled': {
          opacity: 0.35,
          cursor: 'auto',
          pointerEvents: 'none',
        },
      },
    }}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
