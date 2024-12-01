import React, { memo } from 'react';
import { Box, Tooltip } from '@mui/material';
import { MemoizedTextField } from '../../../common/MemoizedFormFields';
import { usePersonalityInfo } from '../../../../contexts/character/hooks/usePersonalityInfo';
import { StyledCard, StyledCardContent, StyledTitle, StyledDescription } from './styles';

const PersonalityCard = () => {
  const { personalityInfo, updatePersonalityInfo } = usePersonalityInfo();

  const descriptions = {
    natureza: 'A verdadeira personalidade do personagem, como ele age quando está sozinho ou com pessoas de confiança.',
    comportamento: 'A máscara social do personagem, como ele se apresenta para o mundo.',
    conceito: 'Uma breve descrição do que seu personagem é ou aspira ser.'
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTitle variant="h5">
          Personalidade
        </StyledTitle>
        <Box display="flex" flexDirection="column" gap={2}>
          {Object.entries(personalityInfo).map(([field, value]) => (
            <Tooltip key={field} title={descriptions[field]} placement="top" arrow>
              <Box>
                <MemoizedTextField
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={value}
                  onChange={(e) => updatePersonalityInfo(field, e.target.value)}
                  fullWidth
                  multiline={field === 'conceito'}
                  rows={field === 'conceito' ? 2 : 1}
                />
                <StyledDescription>
                  {descriptions[field]}
                </StyledDescription>
              </Box>
            </Tooltip>
          ))}
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default memo(PersonalityCard);
