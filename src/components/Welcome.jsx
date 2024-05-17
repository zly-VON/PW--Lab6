// Welcome.js
import React, { useState } from 'react';
import ExerciseList from './ExerciseList';
import LikedExercises from './LikedExercises';

const Welcome = ({ onSelectDifficulty }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showLikedExercises, setShowLikedExercises] = useState(false);

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    onSelectDifficulty(difficulty);
    setShowLikedExercises(false); 
  };

  const handleShowLikedExercises = () => {
    setShowLikedExercises(true);
    setSelectedDifficulty(''); 
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={`welcome ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Welcome to the Gym Workout Page!</h1>
      <p>Please select your difficulty level:</p>
      <button className={`welcome-button ${selectedDifficulty === 'beginner' ? 'selected' : ''}`} onClick={() => handleDifficultySelect('beginner')}>Beginner</button>
      <button className={`welcome-button ${selectedDifficulty === 'intermediate' ? 'selected' : ''}`} onClick={() => handleDifficultySelect('intermediate')}>Intermediate</button>
      <button className={`welcome-button ${selectedDifficulty === 'expert' ? 'selected' : ''}`} onClick={() => handleDifficultySelect('expert')}>Expert</button>
      <p>Or view your:</p>
      <button className={`welcome-button ${showLikedExercises ? 'selected' : ''}`} onClick={handleShowLikedExercises}>Liked Exercises</button>
      {selectedDifficulty && !showLikedExercises && <ExerciseList difficulty={selectedDifficulty} />}
      {showLikedExercises && <LikedExercises />}
    </div>
  );
};

export default Welcome;
