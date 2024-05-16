// LikedExercises.js
import React from 'react';

const LikedExercises = () => {
  const likedExercises = Object.keys(localStorage)
    .filter(key => key.startsWith('liked_') && localStorage.getItem(key) === 'true')
    .map(key => key.replace('liked_', ''));

  return (
    <div className="exercise-list-liked">
      <h2>Liked Exercises</h2>
      {likedExercises.length > 0 ? (
        <ul>
          {likedExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      ) : (
        <p>No liked exercises found.</p>
      )}
    </div>
  );
};

export default LikedExercises;
