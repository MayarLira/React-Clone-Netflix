import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from './axios';
import Modal from './Modal'; // Componente Modal para exibir informações detalhadas
import './requests';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Armazena o filme selecionado para exibir no modal
  const base_url = 'https://image.tmdb.org/t/p/w200';
  const API_KEY_ROW = "9bb7ebee57ce8bcab2b53bde32862453";


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

  // Função para buscar detalhes do filme ou série quando o usuário clica na imagem
  const handleClick = async (movie) => {
    try {
      // Chamada à API do TMDB para buscar mais detalhes do filme/série
      const request = await axios.get(
        `/movie/${movie.id}?api_key=${API_KEY_ROW}&language=pt-BR`
      );
      // Armazena os detalhes do filme ou série no estado
      setSelectedMovie(request.data);
    } catch (error) {
      console.error("Erro ao buscar os detalhes do filme:", error);
    }
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
                  onClick={() => handleClick(movie)} // Ao clicar, busca detalhes do filme
                />
              )
          )}
        </div>
        <MdChevronRight className="row_arrow right" onClick={scrollRight} />
      </div>

      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default Row;
