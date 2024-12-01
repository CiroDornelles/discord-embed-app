import { useTheme } from '@mui/material/styles';

export const useVampireAnimation = () => {
  const theme = useTheme();

  const getTransitionStyle = (properties = [], options = {}) => {
    const {
      duration = 'standard',
      easing = 'easeInOut',
      delay = 0,
    } = options;

    return {
      transition: theme.transitions.create(properties, {
        duration: theme.transitions.duration[duration],
        easing: theme.transitions.easing[easing],
        delay,
      }),
    };
  };

  const hoverTransform = {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  };

  const fadeAnimation = {
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  };

  const slideAnimation = {
    '@keyframes slideIn': {
      '0%': {
        transform: 'translateY(20px)',
        opacity: 0,
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  };

  const getAnimationStyle = (animationType, options = {}) => {
    const {
      duration = 300,
      delay = 0,
      easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
      fillMode = 'forwards',
    } = options;

    const animations = {
      fade: {
        animation: `fadeIn ${duration}ms ${easing} ${delay}ms ${fillMode}`,
      },
      slide: {
        animation: `slideIn ${duration}ms ${easing} ${delay}ms ${fillMode}`,
      },
    };

    return {
      ...animations[animationType],
      ...(animationType === 'fade' ? fadeAnimation : {}),
      ...(animationType === 'slide' ? slideAnimation : {}),
    };
  };

  return {
    getTransitionStyle,
    getAnimationStyle,
    hoverTransform,
  };
};
