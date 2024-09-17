import React from 'react';
import './Login.css';

function Login({ onLogin }) {
  const handleLogin = () => {
    // Simula o login do usuário
    onLogin({ name: 'Usuário' });
  };

  return (
    <div className="login">
      <h1>Filmes, Séries e muito mais. Sem limites.</h1>
      <h3>Assista onde quiser. Cancele quando quiser.</h3>
      <button onClick={handleLogin}> Vamos lá  > </button>
    </div>
  );
}

export default Login;
