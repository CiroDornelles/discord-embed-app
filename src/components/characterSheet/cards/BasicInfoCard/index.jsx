import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Tooltip,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useBasicInfo } from '../../../../contexts/character/hooks/useBasicInfo';

const BasicInfoCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { basicInfo, updateBasicInfo } = useBasicInfo();

  const renderTooltip = (title, description) => (
    <Box sx={{ p: 1, maxWidth: 300 }}>
      <Box sx={{ mb: 1, typography: 'subtitle2', color: 'primary.main' }}>
        {title}
      </Box>
      <Box sx={{ typography: 'body2' }}>
        {description}
      </Box>
    </Box>
  );

  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create(['box-shadow', 'transform'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          boxShadow: theme.shadows[8],
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardHeader
        title="Informações Básicas"
        sx={{
          bgcolor: 'background.paper',
          '& .MuiCardHeader-title': {
            color: 'primary.main',
            fontFamily: theme.typography.h5.fontFamily,
            fontSize: theme.typography.h5.fontSize,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          },
        }}
      />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Tooltip
              title={renderTooltip(
                'Nome do Personagem',
                'O nome pelo qual seu personagem é conhecido no mundo dos vampiros.'
              )}
              arrow
              placement="top"
            >
              <TextField
                fullWidth
                label="Nome"
                variant="outlined"
                size="small"
                value={basicInfo.nome}
                onChange={(e) => updateBasicInfo('nome', e.target.value)}
              />
            </Tooltip>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip
              title={renderTooltip(
                'Jogador',
                'O jogador que controla o personagem.'
              )}
              arrow
              placement="top"
            >
              <TextField
                fullWidth
                label="Jogador"
                variant="outlined"
                size="small"
                value={basicInfo.jogador}
                onChange={(e) => updateBasicInfo('jogador', e.target.value)}
              />
            </Tooltip>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip
              title={renderTooltip(
                'Crônica',
                'A crônica em que o personagem se encontra.'
              )}
              arrow
              placement="top"
            >
              <TextField
                fullWidth
                label="Crônica"
                variant="outlined"
                size="small"
                value={basicInfo.cronica}
                onChange={(e) => updateBasicInfo('cronica', e.target.value)}
              />
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BasicInfoCard;
