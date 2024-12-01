import './fonts.css';

const headingBase = {
  fontFamily: '"Old English Text MT", MedievalSharp, cursive',
  textTransform: 'uppercase',
  color: '#8b0000',
};

const bodyBase = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

export const typography = {
  fontFamily: bodyBase.fontFamily,
  h1: {
    ...headingBase,
    letterSpacing: '0.2em',
  },
  h2: {
    ...headingBase,
    letterSpacing: '0.15em',
  },
  h3: {
    ...headingBase,
    letterSpacing: '0.1em',
  },
  h4: {
    ...headingBase,
    letterSpacing: '0.1em',
  },
  h5: {
    ...headingBase,
    letterSpacing: '0.05em',
  },
  h6: {
    ...headingBase,
    letterSpacing: '0.05em',
  },
  subtitle1: {
    ...bodyBase,
    color: '#ffffff',
  },
  subtitle2: {
    ...bodyBase,
    color: '#cccccc',
  },
  body1: {
    ...bodyBase,
    color: '#ffffff',
  },
  body2: {
    ...bodyBase,
    color: '#cccccc',
  },
};
