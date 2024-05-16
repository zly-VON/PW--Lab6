import React, { useState } from 'react';
import Welcome from './components/Welcome';

const App = () => {
  const handleDifficultySelect = (difficulty) => {
    console.log('Selected difficulty:', difficulty);
  };

  return (
    <div className={`App `}>
      <Welcome onSelectDifficulty={handleDifficultySelect} />
    </div>
  );
};

export default App;
