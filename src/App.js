import React, { useState } from 'react';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import Login from './Login';
import requests from './requests';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <>
          <Navbar />
          <Banner fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="Originais Netflix" fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="Em Alta" fetchUrl={requests.fetchTrending} />
          <Row title="Comédia" fetchUrl={requests.fetchComedy} />
          <Row title="Romance" fetchUrl={requests.fetchRomance} />
          <Row title="Terror" fetchUrl={requests.fetchHorror} />
          <Row title="Documentários" fetchUrl={requests.fetchDocumentary} />
        </>
      )}
    </div>
  );
}

export default App;
