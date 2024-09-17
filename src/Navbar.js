import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show && 'navbar__black'}`}>
      <div className="navbar__contents">
        <img
          className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        <div className="navbar__links">
          <a href="/">Início</a>
          <a href="/">Séries</a>
          <a href="/">Filmes</a>
          <a href="/">Bombando</a>
          <a href="/">Minha Lista</a>
        </div>

        <div className="navbar__search">
          <input type="text" placeholder="Pesquisar" className="navbar__searchInput" />
          <button className="navbar__searchButton">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="navbar__icons">
          
          <img
            className="navbar__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;