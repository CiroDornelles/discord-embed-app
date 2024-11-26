import React, { useState } from 'react';
import {useMediaQuery,useTheme, Box, Grid, Card, CardContent, Typography, MobileStepper, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const MotionCard = motion(Card);

const CharacterSheet = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);

  const cards = [
    { Component: Card1, title: "Personal Info" },
    { Component: Card2, title: "Nature & Clan" },
    { Component: Card3, title: "Generation" }
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, cards.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (isMobile) {
    const direction = activeStep > 0 ? 1 : -1;

    return (
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'relative', height: '100%' }}>
          <AnimatePresence initial={false} custom={direction}>
            <MotionCard
              key={activeStep}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;

                if (swipe < -10000 && activeStep < cards.length - 1) {
                  handleNext();
                } else if (swipe > 10000 && activeStep > 0) {
                  handleBack();
                }
              }}
              sx={{ height: '100%', position: 'absolute', width: '100%', touchAction: 'pan-y' }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" color="primary" gutterBottom>
                  {cards[activeStep].title}
                </Typography>
                {React.createElement(cards[activeStep].Component)}
              </CardContent>
            </MotionCard>
          </AnimatePresence>
        </Box>
        <MobileStepper
          steps={cards.length}
          position="static"
          activeStep={activeStep}
          sx={{
            backgroundColor: 'transparent',
            mt: 2,
            '& .MuiMobileStepper-dot': {
              backgroundColor: theme.palette.secondary.main,
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: theme.palette.primary.main,
            }
          }}
          nextButton={
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={activeStep === cards.length - 1}
              color="primary"
            >
              <KeyboardArrowRight />
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              color="primary"
            >
              <KeyboardArrowLeft />
            </IconButton>
          }
        />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'block', textAlign: 'center', mt: 1 }}
        >
          Deslize para ver mais cards
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={4} key={index}>
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardContent>
              <Typography variant="h5" component="h2" color="primary" gutterBottom>
                {card.title}
              </Typography>
              {React.createElement(card.Component)}
            </CardContent>
          </MotionCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterSheet;