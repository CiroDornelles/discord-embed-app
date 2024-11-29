import React from 'react';

const D10Icon = ({ color = '#ffffff', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L22 8.5L17 21H7L2 8.5L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
    <path
      d="M12 2L2 8.5L7 21L12 2Z"
      fill={color}
      fillOpacity="0.3"
    />
    <path
      d="M12 2L22 8.5L17 21L12 2Z"
      fill={color}
      fillOpacity="0.1"
    />
  </svg>
);

export default D10Icon;
