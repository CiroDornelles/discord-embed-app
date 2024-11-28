import React, { useState } from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import BasicInfoCard from './BasicInfoCard';
import PersonalityCard from './PersonalityCard';
import VampireInfoCard from './VampireInfoCard';
import Header from './Header';
import AttributesSection from './AttributesSection';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const CharacterSheet = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [characterData, setCharacterData] = useState({
    basicInfo: {
      name: '',
      player: '',
      chronicle: ''
    },
    personalityInfo: {
      nature: '',
      demeanor: '',
      concept: ''
    },
    vampireInfo: {
      clan: '',
      generation: '',
      sire: '',
      predator: ''
    }
  });

  const handleBasicInfoChange = (field, value) => {
    setCharacterData(prev => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: value
      }
    }));
  };

  const handlePersonalityInfoChange = (field, value) => {
    setCharacterData(prev => ({
      ...prev,
      personalityInfo: {
        ...prev.personalityInfo,
        [field]: value
      }
    }));
  };

  const handleVampireInfoChange = (field, value) => {
    setCharacterData(prev => ({
      ...prev,
      vampireInfo: {
        ...prev.vampireInfo,
        [field]: value
      }
    }));
  };

  const renderInfoCards = () => {
    const cards = [
      <SwiperSlide key="basic">
        <BasicInfoCard 
          data={characterData.basicInfo} 
          onDataChange={handleBasicInfoChange} 
        />
      </SwiperSlide>,
      <SwiperSlide key="personality">
        <PersonalityCard 
          data={characterData.personalityInfo} 
          onDataChange={handlePersonalityInfoChange} 
        />
      </SwiperSlide>,
      <SwiperSlide key="vampire">
        <VampireInfoCard 
          data={characterData.vampireInfo} 
          onDataChange={handleVampireInfoChange} 
        />
      </SwiperSlide>
    ];

    if (isMobile) {
      return (
        <Grid2 item xs={12}>
          <Box sx={{ 
            '.swiper': {
              width: '100%',
              padding: '50px 0',
            },
            '.swiper-slide': {
              width: '300px',
              height: 'auto',
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
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {cards}
            </Swiper>
          </Box>
        </Grid2>
      );
    }

    return (
      <>
        <Grid2 item xs={12} md={4}>
          <BasicInfoCard 
            data={characterData.basicInfo} 
            onDataChange={handleBasicInfoChange} 
          />
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <PersonalityCard 
            data={characterData.personalityInfo} 
            onDataChange={handlePersonalityInfoChange} 
          />
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <VampireInfoCard 
            data={characterData.vampireInfo} 
            onDataChange={handleVampireInfoChange} 
          />
        </Grid2>
      </>
    );
  };

  return (
    <Box sx={{ 
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      margin: 0,
      padding: isMobile ? '10px' : '20px',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Header />
      <Grid2
        container
        spacing={2}
        justifyContent="center"
      >
        {renderInfoCards()}
      </Grid2>
      <AttributesSection />
    </Box>
  );
};

export default CharacterSheet;
