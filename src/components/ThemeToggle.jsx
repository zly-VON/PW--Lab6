import React from 'react';
import lightModeIcon from '../assets/light-mode-icon.png'; // Adjust the path as necessary
import darkModeIcon from '../assets/dark-mode-icon.png';   // Adjust the path as necessary

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <img 
        src={isDarkMode ? lightModeIcon : darkModeIcon}
        style={{ width: '3.5rem', height: '3.5rem' }}
      />
    </button>
  );
};

export default ThemeToggle;
