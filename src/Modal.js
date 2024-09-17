// src/Modal.js

import React from 'react';
import './Modal.css';

function Modal({ movie, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <h2>{movie.title || movie.name}</h2>
        <p><strong>Sinopse:</strong> {movie.overview}</p>
        <p><strong>Classificação indicativa:</strong> {movie.vote_average}/10</p>
        <p><strong>Data de lançamento:</strong> {movie.release_date || movie.first_air_date}</p>
        <p><strong>Duração:</strong> {movie.runtime} minutos</p>
        <p><strong>Gêneros:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default Modal;
