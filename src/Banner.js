import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const movies = request.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  // Função para truncar a descrição
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '…' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Assistir</button>
          <button className="banner_button">Minha Lista</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
