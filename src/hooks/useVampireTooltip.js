import { Box } from '@mui/material';

export const useVampireTooltip = () => {
  const renderTooltip = (title, description, levels = null) => (
    <Box sx={{ p: 1, maxWidth: 300 }}>
      <Box sx={{ mb: 1, typography: 'subtitle2', color: 'primary.main' }}>
        {title}
      </Box>
      <Box sx={{ typography: 'body2' }}>
        {description}
      </Box>
      {levels && (
        <Box sx={{ mt: 2 }}>
          <Box sx={{ typography: 'subtitle2', color: 'primary.main', mb: 0.5 }}>
            Níveis:
          </Box>
          {levels.map((level, index) => (
            <Box
              key={index}
              sx={{
                typography: 'body2',
                pl: 2,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 4,
                  top: '50%',
                  width: 4,
                  height: 4,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  transform: 'translateY(-50%)',
                },
              }}
            >
              {level}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );

  const tooltipProps = {
    arrow: true,
    enterDelay: 500,
    leaveDelay: 200,
    placement: 'top',
    sx: {
      '& .MuiTooltip-tooltip': {
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'primary.main',
      },
      '& .MuiTooltip-arrow': {
        color: 'background.paper',
        '&::before': {
          border: '1px solid',
          borderColor: 'primary.main',
        },
      },
    },
  };

  return {
    renderTooltip,
    tooltipProps,
  };
};
