import React, { useState, useEffect, useRef } from 'react';
import axios from './axios';
import './Row.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/w200';

  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      top: 0,
      left: -rowRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      top: 0,
      left: rowRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_container">
        <MdChevronLeft className="row_arrow left" onClick={scrollLeft} />
        <div className="row_posters" ref={rowRef}>
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  key={movie.id}
                  className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title || movie.name}
                />
              )
          )}
        </div>
        <MdChevronRight className="row_arrow right" onClick={scrollRight} />
      </div>
    </div>
  );
}

export default Row;
