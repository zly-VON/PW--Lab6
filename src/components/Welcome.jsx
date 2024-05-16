// Welcome.js
import React, { useState } from 'react';
import ExerciseList from './ExerciseList';

const Welcome = ({ onSelectDifficulty }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    onSelectDifficulty(difficulty);
    setShowLikedExercises(false); 
  };

  return (
    <div className={`welcome}`}>
      <h1>Welcome to the Gym Workout Page!</h1>
      <p>Please select your difficulty level:</p>
      <button className={`welcome-button ${selectedDifficulty === 'beginner' ? 'selected' : ''}`} onClick={() => handleDifficultySelect('beginner')}>Beginner</button>
      <button className={`welcome-button ${selectedDifficulty === 'intermediate' ? 'selected' : ''}`} onClick={() => handleDifficultySelect('intermediate')}>Intermediate</button>
      <button className={`welcome-button ${selectedDifficulty === 'expert' ? 'selected' : ''}`} onClick={() => handleDifficultySelect('expert')}>Expert</button>
      {selectedDifficulty && <ExerciseList difficulty={selectedDifficulty} />}
    </div>
  );
};

export default Welcome;
