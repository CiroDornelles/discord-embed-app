import React, { useCallback } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useThemeContext } from '../../context/ThemeContext';

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

  const getThemeDisplayName = useCallback((themeType) => {
    switch (themeType) {
      case 'light':
        return 'Light Theme';
      case 'dark':
        return 'Dark Theme';
      case 'vampireDarkAges':
        return 'Vampire Dark Ages';
      default:
        return themeType;
    }
  }, []);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-label="change theme"
        sx={{
          backgroundColor: 'background.paper',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <Brightness4Icon />
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          elevation: 8,
          sx: {
            backgroundColor: 'background.paper',
            color: 'text.primary',
            minWidth: 180,
          },
        }}
      >
        {availableThemes.map((themeType) => (
          <MenuItem
            key={themeType}
            onClick={() => handleThemeChange(themeType)}
            selected={currentThemeType === themeType}
            sx={{
              py: 1,
              '&.Mui-selected': {
                backgroundColor: 'action.selected',
              },
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <Typography variant="body1">
              {getThemeDisplayName(themeType)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
