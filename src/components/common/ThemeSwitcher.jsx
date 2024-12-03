import React, { useCallback } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useThemeContext } from '../../context/ThemeContext';

const themeLabels = {
  light: 'Light Mode',
  dark: 'Dark Mode',
  vampireDarkAges: 'Vampire Dark Ages',
};

export const ThemeSwitcher = () => {
  const { currentThemeType, setTheme, availableThemes } = useThemeContext();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleThemeChange = useCallback((themeType) => {
    if (themeType !== currentThemeType) {
      setTheme(themeType);
    }
    handleClose();
  }, [currentThemeType, setTheme, handleClose]);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        edge="end"
        aria-label="theme switcher"
        aria-controls="theme-menu"
        aria-haspopup="true"
      >
        <Brightness4Icon />
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {availableThemes.map((themeType) => (
          <MenuItem
            key={themeType}
            onClick={() => handleThemeChange(themeType)}
            selected={themeType === currentThemeType}
          >
            <Typography variant="body1">
              {themeLabels[themeType] || themeType}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
