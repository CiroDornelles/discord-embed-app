import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import AttributeGroup from './AttributeGroup';
import physicalData from '../../data/wod/vampire/v20_dark_ages/attributes/physical.json';
import socialData from '../../data/wod/vampire/v20_dark_ages/attributes/social.json';
import mentalData from '../../data/wod/vampire/v20_dark_ages/attributes/mental.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const attributes = {
  physical: {
    title: 'Físicos',
    items: ['Força', 'Destreza', 'Vigor'],
    data: physicalData
  },
  social: {
    title: 'Sociais',
    items: ['Carisma', 'Manipulação', 'Aparência'],
    data: socialData
  },
  mental: {
    title: 'Mentais',
    items: ['Percepção', 'Inteligência', 'Raciocínio'],
    data: mentalData
  }
};

const AttributesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const attributeGroups = Object.entries(attributes).map(([key, group]) => (
    <AttributeGroup key={key} title={group.title} attributes={group.items} data={group.data} />
  ));

  return (
    <Box sx={{ mt: 4 }}>
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          mb: 2, 
          textAlign: 'center',
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
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
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            {attributeGroups.map((group, index) => (
              <SwiperSlide key={index}>
                {group}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        <Grid2 container spacing={4} justifyContent="center">
          {attributeGroups.map((group, index) => (
            <Grid2 key={index} xs={12} sm={6} md={4}>
              {group}
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default AttributesSection;
