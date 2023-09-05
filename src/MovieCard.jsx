import React from 'react';
import { IMAGE_BASE_URL } from './App';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/400';

  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>

      <div>
        <img src={posterUrl} alt={movie.title} />
      </div>

      <div>
        <span>{movie.media_type}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;