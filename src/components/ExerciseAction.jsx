import React, { useState } from 'react';

const ExerciseAction = ({ exercise }) => {
  const [liked, setLiked] = useState(localStorage.getItem(`liked_${exercise.name}`) === 'true');

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`liked_${exercise.name}`, newLiked);
  };

  return (
    <div className="exercise-action">
      <button onClick={toggleLike}>
        {liked ? '💖' : '🩶'}
      </button>
    </div>
  );
};

export default ExerciseAction;