import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery, Tooltip } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2";
import DotRating from "./DotRating";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Ordem específica das habilidades conforme o livro
const TALENTS_ORDER = [
  'alertness', 'athletics', 'awareness', 'brawl', 'empathy', 
  'expression', 'intimidation', 'leadership', 'legerdemain', 'subterfuge'
];

const SKILLS_ORDER = [
  'animal_ken', 'archery', 'commerce', 'crafts', 'etiquette',
  'melee', 'performance', 'ride', 'stealth', 'survival'
];

const KNOWLEDGES_ORDER = [
  'academics', 'enigmas', 'hearth_wisdom', 'investigation', 'law',
  'medicine', 'occult', 'politics', 'seneschal', 'theology'
];

const loadAbilities = async (category, orderArray) => {
  try {
    const context = import.meta.glob('../../data/wod/vampire/v20_dark_ages/abilities/**/*.json', { eager: true });
    const abilitiesMap = new Map();

    for (const [path, module] of Object.entries(context)) {
      if (path.includes(`/${category}/`)) {
        const fileName = path.split('/').pop().replace('.json', '');
        try {
          const abilityData = module.default || module;
          if (!abilityData) {
            console.warn(`No default export found for ability ${fileName}`);
            continue;
          }
          
          abilitiesMap.set(fileName, {
            key: fileName,
            name: abilityData.name || fileName,
            description: abilityData.description || '',
            levels: Object.values(abilityData.levels || {}),
            flavorText: abilityData.flavorText || '',
            fileName
          });
        } catch (error) {
          console.error(`Error processing ability ${fileName}:`, error);
        }
      }
    }

    // Ordenar as habilidades conforme a ordem especificada
    return orderArray.map(key => abilitiesMap.get(key)).filter(Boolean);
  } catch (error) {
    console.error(`Error loading ${category} abilities:`, error);
    return [];
  }
};

const AbilityGroup = ({ title, abilities = [] }) => {
  const [values, setValues] = useState({});

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getLevelDescription = (abilityName, level) => {
    const ability = abilities.find(ab => ab.name === abilityName);
    if (ability && ability.levels && ability.levels[level - 1]) {
      const levelData = ability.levels[level - 1];
      return `${levelData.name}: ${levelData.description}`;
    }
    return '';
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        backgroundColor: '#000000',
        borderRadius: 2,
        border: '1px solid #3d0000',
        backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        '&:hover': {
          backgroundColor: '#0a0a0a',
          transition: 'background-color 0.3s ease'
        }
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          color: '#8b0000',
          fontFamily: 'MedievalSharp, cursive',
          mb: 2,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          borderBottom: '2px solid #8b0000',
          pb: 1
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {abilities.map((ability, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '&:hover': {
                backgroundColor: 'rgba(139, 0, 0, 0.1)',
              },
              transition: 'background-color 0.2s',
              padding: '4px 8px',
              borderRadius: 1
            }}
          >
            <Tooltip
              title={
                <div>
                  <strong style={{ color: 'white' }}>{ability.name}</strong>
                  {ability.description && (
                    <>
                      <br />
                      <br />
                      <span style={{ color: 'white' }}>{ability.description}</span>
                    </>
                  )}
                  {values[ability.key] > 0 && (
                    <>
                      <br />
                      <br />
                      <span style={{ color: 'white' }}>{getLevelDescription(ability.name, values[ability.key])}</span>
                    </>
                  )}
                </div>
              }
              arrow
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'rgba(0, 0, 0, 0.95)',
                    color: '#fff',
                    border: '1px solid #8b0000',
                    '& .MuiTooltip-arrow': {
                      color: '#000',
                      '&::before': {
                        border: '1px solid #8b0000'
                      }
                    },
                    maxWidth: 300,
                    p: 2,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                    textShadow: 'none',
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }
                }
              }}
            >
              <Typography
                sx={{
                  minWidth: '120px',
                  color: '#fff',
                  fontFamily: 'MedievalSharp, cursive',
                  fontSize: '1rem',
                  cursor: 'help'
                }}
              >
                {ability.name}
              </Typography>
            </Tooltip>
            <DotRating
              value={values[ability.key] || 0}
              onChange={(newValue) => handleChange(ability.key, newValue)}
              max={5}
              tooltips={Array.from({ length: 5 }, (_, i) => getLevelDescription(ability.name, i + 1))}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

const AbilitiesSection = () => {
  const [abilities, setAbilities] = useState({
    talents: [],
    skills: [],
    knowledges: []
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const loadAllAbilities = async () => {
      const talents = await loadAbilities('talents', TALENTS_ORDER);
      const skills = await loadAbilities('skills', SKILLS_ORDER);
      const knowledges = await loadAbilities('knowledges', KNOWLEDGES_ORDER);
      
      setAbilities({
        talents,
        skills,
        knowledges
      });
    };

    loadAllAbilities();
  }, []);

  const renderAbilityGroups = () => {
    const groups = [
      { title: "Talentos", abilities: abilities.talents },
      { title: "Perícias", abilities: abilities.skills },
      { title: "Conhecimentos", abilities: abilities.knowledges }
    ];

    if (isMobile) {
      return (
        <Box sx={{ 
          width: '100%',
          '.swiper': {
            width: '100%',
            padding: '50px 0',
          },
          '.swiper-slide': {
            width: '300px',
            height: 'auto',
            background: 'transparent',
            transformStyle: 'preserve-3d',
          },
          '.swiper-slide-active': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s',
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
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
            {groups.map((group, index) => (
              <SwiperSlide key={index}>
                <AbilityGroup title={group.title} abilities={group.abilities} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      );
    }

    return (
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        width: '100%',
        justifyContent: 'space-between'
      }}>
        {groups.map((group, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <AbilityGroup title={group.title} abilities={group.abilities} />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ 
      width: '100%',
      visibility: 'visible',
      p: 2
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          color: 'primary.main',
          textAlign: 'center'
        }}
      >
        Habilidades
      </Typography>

      {renderAbilityGroups()}
    </Box>
  );
};

export default AbilitiesSection;
