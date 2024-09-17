// src/Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socialIcons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      <ul className="footer__links">
        <li><a href="/">Audiodescrição</a></li>
        <li><a href="/">Relações com investidores</a></li>
        <li><a href="/">Avisos legais</a></li>
        <li><a href="/">Central de Ajuda</a></li>
        <li><a href="/">Carreiras</a></li>
        <li><a href="/">Preferências de cookies</a></li>
        <li><a href="/">Cartão pré-pago</a></li>
        <li><a href="/">Termos de Uso</a></li>
        <li><a href="/">Informações corporativas</a></li>
        <li><a href="/">Imprensa</a></li>
        <li><a href="/">Privacidade</a></li>
        <li><a href="/">Entre em contato</a></li>
      </ul>

      <button className="footer__serviceCode">Código do serviço</button>

      <p className="footer__copyright">&copy; 1997-2024 Netflix, Inc.</p>
    </footer>
  );
}

export default Footer;
