import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Login from './Login';
import Navbar from './Navbar';
import requests from './requests';
import Row from './Row';

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
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
