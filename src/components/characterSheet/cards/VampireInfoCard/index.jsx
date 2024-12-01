import React, { memo } from 'react';
import { Box, Tooltip } from '@mui/material';
import { MemoizedTextField } from '../../../common/MemoizedFormFields';
import { useVampireInfo } from '../../../../contexts/character/hooks/useVampireInfo';
import { StyledCard, StyledCardContent, StyledTitle, StyledDescription, StyledSection } from './styles';

const VampireInfoCard = () => {
  const { vampireInfo, updateVampireInfo } = useVampireInfo();

  const descriptions = {
    cla: 'O clã vampírico ao qual seu personagem pertence.',
    geracao: 'A geração vampírica do seu personagem, que determina seu poder potencial.',
    senhor: 'O vampiro que transformou seu personagem.',
    predador: 'O tipo de caçador que seu personagem é, como ele obtém sangue.'
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTitle variant="h5">
          Informações Vampíricas
        </StyledTitle>
        <Box display="flex" flexDirection="column" gap={2}>
          {Object.entries(vampireInfo).map(([field, value]) => (
            <StyledSection key={field}>
              <Tooltip title={descriptions[field]} placement="top" arrow>
                <Box>
                  <MemoizedTextField
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={value}
                    onChange={(e) => updateVampireInfo(field, e.target.value)}
                    fullWidth
                    multiline={field === 'predador'}
                    rows={field === 'predador' ? 2 : 1}
                  />
                  <StyledDescription>
                    {descriptions[field]}
                  </StyledDescription>
                </Box>
              </Tooltip>
            </StyledSection>
          ))}
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default memo(VampireInfoCard);
