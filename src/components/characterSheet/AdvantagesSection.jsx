import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, useTheme, useMediaQuery, Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import DotRating from './DotRating';
import SelectionOverlay from '../common/SelectionOverlay';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdvantagesSection = ({ data = {}, onChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [backgrounds, setBackgrounds] = useState([]);
  const [backgroundLevels, setBackgroundLevels] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [virtuesData, setVirtuesData] = useState({
    consciencia: null,
    autocontrole: null,
    coragem: null
  });

  useEffect(() => {
    const loadBackgrounds = async () => {
      const backgroundFiles = [
        'allies', 'alternate_identity', 'contacts', 'domain', 'fame',
        'generation', 'herd', 'influence', 'mentor', 'resources',
        'retainers', 'status'
      ];

      try {
        const loadedBackgrounds = await Promise.all(
          backgroundFiles.map(async (file) => {
            const response = await import(`../../data/wod/vampire/v20_dark_ages/backgrounds/${file}.json`);
            setBackgroundLevels(prev => ({
              ...prev,
              [response.name]: response.levels
            }));
            return {
              id: file,
              name: response.name,
              description: response.description,
              defaultValue: 0,
              levels: response.levels
            };
          })
        );
        setBackgrounds(loadedBackgrounds);
      } catch (error) {
        console.error('Error loading backgrounds:', error);
      }
    };

    loadBackgrounds();
  }, []);

  useEffect(() => {
    const loadVirtuesData = async () => {
      try {
        const [conscienceData, selfControlData, courageData] = await Promise.all([
          import('../../data/wod/vampire/v20_dark_ages/core/virtues/conscience.json'),
          import('../../data/wod/vampire/v20_dark_ages/core/virtues/self-control.json'),
          import('../../data/wod/vampire/v20_dark_ages/core/virtues/courage.json')
        ]);

        setVirtuesData({
          consciencia: {
            description: conscienceData.description,
            levels: Object.entries(conscienceData.system.ratings).map(([level, data]) => ({
              level: parseInt(level),
              description: `${data.conscience}: ${data.description}`
            }))
          },
          autocontrole: {
            description: selfControlData.description,
            levels: Object.entries(selfControlData.system.ratings).map(([level, data]) => ({
              level: parseInt(level),
              description: `${data.selfControl}: ${data.description}`
            }))
          },
          coragem: {
            description: courageData.description,
            levels: Object.entries(courageData.system.ratings).map(([level, data]) => ({
              level: parseInt(level),
              description: `${data.name}: ${data.description}`
            }))
          }
        });
      } catch (error) {
        console.error('Error loading virtues data:', error);
      }
    };

    loadVirtuesData();
  }, []);

  const getLevelDescription = (backgroundName, level) => {
    const background = backgrounds.find(bg => bg.name === backgroundName);
    if (background && background.levels && background.levels[level - 1]) {
      return background.levels[level - 1].description;
    }
    return '';
  };

  const handleDotChange = (category, field) => (newValue) => {
    onChange(category, field, newValue);
  };

  const handleTextChange = (category, field) => (event) => {
    onChange(category, field, event.target.value);
  };

  const handleBackgroundSelect = (background) => {
    if (currentIndex !== null) {
      onChange('antecedentes', `${currentIndex}.name`, background.name);
      onChange('antecedentes', `${currentIndex}.id`, background.id);
      onChange('antecedentes', `${currentIndex}.value`, background.value || background.defaultValue || 1);
    }
    setIsOverlayOpen(false);
  };

  const handleRemoveItem = () => {
    if (selectedAdvantage !== null) {
      const category = selectedCategory === 'disciplinas' ? 'disciplinas' : 'antecedentes';
      onChange(category, `${selectedAdvantage}.name`, '');
      onChange(category, `${selectedAdvantage}.id`, '');
      onChange(category, `${selectedAdvantage}.value`, 0);
    }
    handleMenuClose();
  };

  const handleEditItem = () => {
    if (selectedAdvantage !== null) {
      setCurrentIndex(selectedAdvantage);
      setIsOverlayOpen(true);
    }
    handleMenuClose();
  };

  const handleMenuOpen = (event, index, category) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedAdvantage(index);
    setSelectedCategory(category);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedAdvantage(null);
    setSelectedCategory(null);
  };

  const openBackgroundOverlay = (index) => {
    setCurrentIndex(index);
    setIsOverlayOpen(true);
  };

  const createAdvantageFields = (category, count, maxDots = 5) => {
    return Array(count).fill(null).map((_, index) => {
      const itemName = data[category]?.[index]?.name || '';
      const itemValue = data[category]?.[index]?.value || 0;

      const baseBox = (
        <Box 
          key={`${category}-${index}`} 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            mb: 1,
            cursor: category === 'antecedentes' ? 'pointer' : 'default',
            p: 1,
            '&:hover': category === 'antecedentes' ? {
              backgroundColor: 'rgba(139, 0, 0, 0.1)',
              borderRadius: '4px'
            } : {}
          }}
          onClick={category === 'antecedentes' && !itemName ? 
            () => openBackgroundOverlay(index) : undefined}
        >
          {category === 'antecedentes' && itemName ? (
            <Tooltip 
              title={backgrounds.find(bg => bg.name === itemName)?.description || ''}
              placement="top"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'rgba(0, 0, 0, 0.95)',
                    color: 'white',
                    fontSize: '0.875rem',
                    padding: '8px 12px',
                    maxWidth: 300,
                    border: '1px solid #8b0000',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                    '& .MuiTooltip-arrow': {
                      color: 'rgba(0, 0, 0, 0.95)',
                      '&::before': {
                        border: '1px solid #8b0000'
                      }
                    }
                  }
                }
              }}
            >
              <TextField
                size="small"
                variant="standard"
                value={itemName}
                onChange={handleTextChange(category, `${index}.name`)}
                InputProps={{
                  readOnly: category === 'antecedentes',
                  style: { color: '#ffffff' }
                }}
                sx={{
                  flex: 1,
                  '& .MuiInputBase-input': {
                    color: '#ffffff',
                    fontFamily: 'MedievalSharp, cursive',
                    cursor: 'help'
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#3d0000',
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: '#8b0000',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#8b0000',
                  },
                }}
              />
            </Tooltip>
          ) : (
            <TextField
              size="small"
              variant="standard"
              value={itemName}
              onChange={handleTextChange(category, `${index}.name`)}
              InputProps={{
                readOnly: category === 'antecedentes',
                style: { color: '#ffffff' }
              }}
              sx={{
                flex: 1,
                '& .MuiInputBase-input': {
                  color: '#ffffff',
                  fontFamily: 'MedievalSharp, cursive',
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#3d0000',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: '#8b0000',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#8b0000',
                },
              }}
            />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DotRating
              value={itemValue}
              onChange={handleDotChange(category, `${index}.value`)}
              onEmptyClick={category === 'antecedentes' ? () => openBackgroundOverlay(index) : undefined}
              hasSelectedItem={category !== 'antecedentes' || !!itemName}
              max={maxDots}
              tooltips={category === 'antecedentes' && itemName ? 
                Array.from({ length: maxDots }, (_, i) => getLevelDescription(itemName, i + 1))
                : []
              }
              attributeData={category === 'antecedentes' && itemName ? {
                levels: backgrounds.find(bg => bg.name === itemName)?.levels || []
              } : null}
            />
          </Box>
          <IconButton
            size="small"
            onClick={(e) => handleMenuOpen(e, index, category)}
            sx={{
              padding: '4px',
              color: data[category]?.[index]?.name ? '#8b0000' : 'rgba(139, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
      );

      return baseBox;
    });
  };

  const renderDisciplinas = () => (
    <Box sx={{ 
      width: '100%',
      p: 2,
      backgroundColor: '#000000',
      borderRadius: 1,
      border: '1px solid #3d0000'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center',
          color: '#8b0000',
          mb: 2,
          fontFamily: 'MedievalSharp, cursive',
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            width: '20%',
            height: '2px',
            backgroundColor: '#8b0000',
          },
          '&::before': {
            left: 0,
          },
          '&::after': {
            right: 0,
          },
        }}
      >
        DISCIPLINAS
      </Typography>
      {createAdvantageFields('disciplinas', 5, 5)}
    </Box>
  );

  const renderAntecedentes = () => (
    <Box sx={{ 
      width: '100%',
      p: 2,
      backgroundColor: '#000000',
      borderRadius: 1,
      border: '1px solid #3d0000'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center',
          color: '#8b0000',
          mb: 2,
          fontFamily: 'MedievalSharp, cursive',
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            width: '20%',
            height: '2px',
            backgroundColor: '#8b0000',
          },
          '&::before': {
            left: 0,
          },
          '&::after': {
            right: 0,
          },
        }}
      >
        ANTECEDENTES
      </Typography>
      {createAdvantageFields('antecedentes', 5)}
    </Box>
  );

  const renderVirtudes = () => (
    <Box sx={{ 
      width: '100%',
      p: 2,
      backgroundColor: '#000000',
      borderRadius: 1,
      border: '1px solid #3d0000'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center',
          color: '#8b0000',
          mb: 2,
          fontFamily: 'MedievalSharp, cursive',
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            width: '20%',
            height: '2px',
            backgroundColor: '#8b0000',
          },
          '&::before': {
            left: 0,
          },
          '&::after': {
            right: 0,
          },
        }}
      >
        VIRTUDES
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <table style={{ width: '100%', borderSpacing: '0 16px' }}>
          <tbody>
            <tr>
              <td style={{ 
                width: '150px', 
                textAlign: 'right', 
                paddingRight: '24px',
                color: '#fff',
                fontFamily: 'MedievalSharp, cursive',
                verticalAlign: 'middle'
              }}>
                <Tooltip
                  title={virtuesData.consciencia?.description || ''}
                  placement="left"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'rgba(0, 0, 0, 0.95)',
                        color: 'white',
                        fontSize: '0.875rem',
                        padding: '8px 12px',
                        maxWidth: 300,
                        border: '1px solid #8b0000',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                        '& .MuiTooltip-arrow': {
                          color: 'rgba(0, 0, 0, 0.95)',
                          '&::before': {
                            border: '1px solid #8b0000'
                          }
                        }
                      }
                    }
                  }}
                >
                  <span style={{ cursor: 'help' }}>Consciência</span>
                </Tooltip>
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                <DotRating
                  value={data.virtudes?.consciencia || 0}
                  onChange={handleDotChange('virtudes', 'consciencia')}
                  max={5}
                  attributeData={virtuesData.consciencia}
                />
              </td>
            </tr>
            <tr>
              <td style={{ 
                width: '150px', 
                textAlign: 'right', 
                paddingRight: '24px',
                color: '#fff',
                fontFamily: 'MedievalSharp, cursive',
                verticalAlign: 'middle'
              }}>
                <Tooltip
                  title={virtuesData.autocontrole?.description || ''}
                  placement="left"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'rgba(0, 0, 0, 0.95)',
                        color: 'white',
                        fontSize: '0.875rem',
                        padding: '8px 12px',
                        maxWidth: 300,
                        border: '1px solid #8b0000',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                        '& .MuiTooltip-arrow': {
                          color: 'rgba(0, 0, 0, 0.95)',
                          '&::before': {
                            border: '1px solid #8b0000'
                          }
                        }
                      }
                    }
                  }}
                >
                  <span style={{ cursor: 'help' }}>Autocontrole</span>
                </Tooltip>
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                <DotRating
                  value={data.virtudes?.autocontrole || 0}
                  onChange={handleDotChange('virtudes', 'autocontrole')}
                  max={5}
                  attributeData={virtuesData.autocontrole}
                />
              </td>
            </tr>
            <tr>
              <td style={{ 
                width: '150px', 
                textAlign: 'right', 
                paddingRight: '24px',
                color: '#fff',
                fontFamily: 'MedievalSharp, cursive',
                verticalAlign: 'middle'
              }}>
                <Tooltip
                  title={virtuesData.coragem?.description || ''}
                  placement="left"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'rgba(0, 0, 0, 0.95)',
                        color: 'white',
                        fontSize: '0.875rem',
                        padding: '8px 12px',
                        maxWidth: 300,
                        border: '1px solid #8b0000',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                        '& .MuiTooltip-arrow': {
                          color: 'rgba(0, 0, 0, 0.95)',
                          '&::before': {
                            border: '1px solid #8b0000'
                          }
                        }
                      }
                    }
                  }}
                >
                  <span style={{ cursor: 'help' }}>Coragem</span>
                </Tooltip>
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                <DotRating
                  value={data.virtudes?.coragem || 0}
                  onChange={handleDotChange('virtudes', 'coragem')}
                  max={5}
                  attributeData={virtuesData.coragem}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
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
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>{renderDisciplinas()}</SwiperSlide>
            <SwiperSlide>{renderAntecedentes()}</SwiperSlide>
            <SwiperSlide>{renderVirtudes()}</SwiperSlide>
          </Swiper>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
          {renderDisciplinas()}
          {renderAntecedentes()}
          {renderVirtudes()}
        </Box>
      )}

      <SelectionOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        title="Selecione um Antecedente"
        options={backgrounds.filter(bg => 
          !data.antecedentes?.some(selected => 
            selected?.id === bg.id && selected?.name
          )
        )}
        onSelect={handleBackgroundSelect}
        maxDots={5}
        description="Escolha um antecedente e defina seu nível"
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: '#000000',
            border: '1px solid #3d0000',
            boxShadow: '0 4px 8px rgba(139, 0, 0, 0.2)',
          }
        }}
        MenuListProps={{
          sx: {
            '& .MuiMenuItem-root': {
              color: '#ffffff',
              fontFamily: 'MedievalSharp, cursive',
              fontSize: '0.9rem',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: 'rgba(139, 0, 0, 0.1)',
              },
            }
          }
        }}
      >
        {selectedCategory === 'antecedentes' && (
          <MenuItem onClick={handleEditItem}>Editar Antecedente</MenuItem>
        )}
        <MenuItem onClick={handleRemoveItem}>
          {selectedCategory === 'antecedentes' ? 'Remover Antecedente' : 'Remover Disciplina'}
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdvantagesSection;
