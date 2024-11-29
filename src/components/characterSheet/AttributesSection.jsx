import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import AttributeGroup from './AttributeGroup';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const attributeGroups = [
  {
    title: 'Físicos',
    category: 'physical'
  },
  {
    title: 'Sociais',
    category: 'social'
  },
  {
    title: 'Mentais',
    category: 'mental'
  }
];

const AttributesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          mb: 4,
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #8b0000, transparent)',
          }
        }}
      >
        Atributos
      </Typography>

      {isMobile ? (
        <Box sx={{
          '.swiper': {
            width: '100%',
            padding: '20px 0 40px',
          },
          '.swiper-slide': {
            width: '85%',
            maxWidth: '300px',
          },
          '.swiper-button-next, .swiper-button-prev': {
            color: '#8b0000',
            '&:after': {
              fontSize: '24px',
            }
          },
          '.swiper-pagination-bullet': {
            backgroundColor: '#8b0000',
            opacity: 0.5,
          },
          '.swiper-pagination-bullet-active': {
            backgroundColor: '#8b0000',
            opacity: 1,
          }
        }}>
          <Swiper
            className="swiper-parent"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
          >
            {attributeGroups.map((group, index) => (
              <SwiperSlide key={index}>
                <AttributeGroup title={group.title} category={group.category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        <Grid2 container spacing={4} justifyContent="center">
          {attributeGroups.map((group, index) => (
            <Grid2 key={index} xs={12} sm={6} md={4}>
              <AttributeGroup title={group.title} category={group.category} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default AttributesSection;
