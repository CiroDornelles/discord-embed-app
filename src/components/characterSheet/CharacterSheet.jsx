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
import AbilitiesSection from './AbilitiesSection';
import AdvantagesSection from './AdvantagesSection';
import CharacterStatusSection from './CharacterStatusSection';
import { CharacterProvider } from '../../contexts/CharacterContext';

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
      nome: '',
      jogador: '',
      cronica: ''
    },
    personalityInfo: {
      natureza: '',
      comportamento: '',
      conceito: ''
    },
    vampireInfo: {
      cla: '',
      geracao: '',
      senhor: '',
      predador: ''
    },
    habilidades: {},
    vantagens: {
      virtudes: {
        consciencia: 0,
        autocontrole: 0,
        coragem: 0
      },
      antecedentes: [] // Inicializando o array de antecedentes
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

  const handleAbilitiesChange = (field, value) => {
    setCharacterData(prev => ({
      ...prev,
      habilidades: {
        ...prev.habilidades,
        [field]: value
      }
    }));
  };

  const handleAdvantagesChange = (category, field, value) => {
    console.log('handleAdvantagesChange:', { category, field, value });
    setCharacterData(prev => {
      const vantagens = { ...prev.vantagens };
      
      if (category === 'virtudes') {
        // Para virtudes, atualizamos diretamente o valor
        if (!vantagens[category]) {
          vantagens[category] = {};
        }
        vantagens[category] = {
          ...vantagens[category],
          [field]: value
        };
      } else {
        // Para outros casos (antecedentes, disciplinas)
        if (!vantagens[category]) {
          vantagens[category] = [];
        }

        // Extrai o índice e a propriedade do campo (ex: "0.name" -> index = 0, prop = "name")
        const [indexStr, prop] = field.split('.');
        const index = parseInt(indexStr, 10);

        // Inicializa o objeto no índice se não existir
        if (!vantagens[category][index]) {
          vantagens[category][index] = {};
        }

        // Atualiza a propriedade específica
        vantagens[category][index] = {
          ...vantagens[category][index],
          [prop]: value
        };
      }

      const newState = {
        ...prev,
        vantagens
      };
      console.log('Novo estado:', newState);
      return newState;
    });
  };

  const renderInfoCards = () => {
    const cards = [
      <SwiperSlide key="basic">
        <BasicInfoCard 
          data={characterData.basicInfo} 
          onChange={handleBasicInfoChange} 
        />
      </SwiperSlide>,
      <SwiperSlide key="personality">
        <PersonalityCard 
          data={characterData.personalityInfo} 
          onChange={handlePersonalityInfoChange} 
        />
      </SwiperSlide>,
      <SwiperSlide key="vampire">
        <VampireInfoCard 
          data={characterData.vampireInfo} 
          onChange={handleVampireInfoChange}
          vantagens={characterData.vantagens}
        />
      </SwiperSlide>
    ];

    if (isMobile) {
      return (
        <Box sx={{ 
          width: '100%',
          '.swiper': {
            width: '100%',
            padding: '20px 0',
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
      );
    }

    return (
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        width: '100%',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        '& > *': {
          flex: '0 1 350px',
        }
      }}>
        <BasicInfoCard 
          data={characterData.basicInfo} 
          onChange={handleBasicInfoChange} 
        />
        <PersonalityCard 
          data={characterData.personalityInfo} 
          onChange={handlePersonalityInfoChange} 
        />
        <VampireInfoCard 
          data={characterData.vampireInfo} 
          onChange={handleVampireInfoChange}
          vantagens={characterData.vantagens}
        />
      </Box>
    );
  };

  return (
    <CharacterProvider>
      <Box sx={{ 
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Header />
        
        <Box 
          sx={{ 
            flex: 1,
            p: { xs: 1, sm: 2, md: 3 },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: '1200px',
            width: '100%',
            alignItems: 'center'
          }}
        >
          {renderInfoCards()}
          <AttributesSection />
          <AbilitiesSection data={characterData.habilidades} onChange={handleAbilitiesChange} />
          <AdvantagesSection data={characterData.vantagens} onChange={handleAdvantagesChange} />
          <CharacterStatusSection vantagens={characterData.vantagens} />
        </Box>
      </Box>
    </CharacterProvider>
  );
};

export default CharacterSheet;
