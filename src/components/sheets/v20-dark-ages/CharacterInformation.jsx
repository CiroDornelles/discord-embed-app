import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CoverflowCarousel from '../../common/CoverflowCarousel';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  fontFamily: '"Cinzel Decorative", serif',
  color: theme.palette.primary.main,
}));

const ContentCard = styled(Card)(({ theme }) => ({
  height: '300px',
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const CharacterInformation = ({ character }) => {
  const theme = useTheme();

  const sections = [
    {
      title: 'Personality',
      content: character.personality || 'No personality information available.',
    },
    {
      title: 'Background',
      content: character.background || 'No background information available.',
    },
    {
      title: 'Description',
      content: character.description || 'No description available.',
    },
  ];

  return (
    <StyledCard>
      <CardContent>
        <SectionTitle variant="h4">
          Vampire: The Dark Ages - 20th Anniversary
        </SectionTitle>
        
        <Box sx={{ height: '350px', mt: 2 }}>
          <CoverflowCarousel>
            {sections.map((section, index) => (
              <ContentCard key={index}>
                <Typography variant="h5" gutterBottom sx={{ 
                  fontFamily: '"Cinzel Decorative", serif',
                  color: theme.palette.primary.main,
                  textAlign: 'center',
                }}>
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  mt: 2,
                  height: '200px',
                  overflowY: 'auto',
                  padding: theme.spacing(1),
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: theme.palette.background.paper,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '4px',
                  },
                }}>
                  {section.content}
                </Typography>
              </ContentCard>
            ))}
          </CoverflowCarousel>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default CharacterInformation;
