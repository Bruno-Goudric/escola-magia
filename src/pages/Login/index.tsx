import React, { useState, FormEvent } from 'react';
import logoSchool from 'assets/imagens/logo.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Components from 'components/Atoms';
import * as S from './styles';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { REACT_APP_TOKEN } = process.env;

    if (userEmail === 'professor@escola.com.br' && userPassword === '123') {
      navigate('/list-magic');
      localStorage.setItem('token', JSON.stringify(REACT_APP_TOKEN));
    } else {
      toast.error('Email/Senha não coincidem');
    }
  };

  return (
    <S.Container>
      <ToastContainer newestOnTop />
      <S.Content>
        <Components.HeaderComponent />
        <S.FormBody onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name="email"
              onChange={e => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              name="password"
              onChange={e => setUserPassword(e.target.value)}
            />
          </div>

          <Components.Button title="Entrar" color="#fff" background="#2c29b5" />
        </S.FormBody>
      </S.Content>
    </S.Container>
  );
}

export { Login };
