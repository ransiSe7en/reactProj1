import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_KEY = '3c4b6501616397d5a042a9ac65c66229';
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (query) => {
    try {
      const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} /> 
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )
      }
    </div>
  );
};

export { IMAGE_BASE_URL };
export default App;
