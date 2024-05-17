// App.js
import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDifficultySelect = (difficulty) => {
    console.log('Selected difficulty:', difficulty);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark';
    setIsDarkMode(isDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);


  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Welcome onSelectDifficulty={handleDifficultySelect} />
    </div>
  );
};

export default App;
