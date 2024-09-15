import React from 'react';
import './Login.css';

function Login({ onLogin }) {
  const handleLogin = () => {
    // Simula o login do usuário
    onLogin({ name: 'Usuário' });
  };

  return (
    <div className="login">
      <h1>Bem-vindo à Netflix</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
