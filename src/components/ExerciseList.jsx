// ExerciseList.js
import React, { useState, useEffect } from 'react';
import fetchData from './api';

const ExerciseList = ({ difficulty }) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const data = await fetchData(`https://api.api-ninjas.com/v1/exercises?difficulty=${difficulty}`, {
          headers: {
            'X-Api-Key': '2uqLtx5v19K1KNDevaudGw==wUHy1em7BM0E3soY'
          }
        });
        setExercises(data);
      } catch (error) {
        console.error(`Error fetching exercises for ${difficulty} difficulty:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [difficulty]);

  return (
    <div className="exercise-list">
      {loading ? (
        <p className="loading">Loading exercises...</p>
      ) : (
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>
              <h3>{exercise.name}</h3>
              <p><strong>Type:</strong> {exercise.type}</p>
              <p><strong>Muscle:</strong> {exercise.muscle}</p>
              <p><strong>Equipment:</strong> {exercise.equipment}</p>
              <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseList;
