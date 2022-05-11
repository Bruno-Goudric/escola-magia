import React, { useState, FormEvent } from "react";
import logoSchool from "assets/imagens/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Components from "components";
import * as S from "./styles";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  var largura = window.screen.width;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (userEmail === "professor@escola.com.br" && userPassword === "123") {
      navigate("/list-magic");
    } else {
      console.log("Aqui");
      toast.error("Email/Senha não coincidem");
    }
  };

  return (
    <S.Container>
      <ToastContainer newestOnTop />
      <S.Content>
        <S.Header>
          <img src={logoSchool} alt="Escola-de-Magia" />
          <span>Escola de Magia</span>
        </S.Header>
        <S.FormBody onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              name="senha"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <Components.Button title="Entrar" color="#fff" background="#2c29b5" />
        </S.FormBody>
      </S.Content>
    </S.Container>
  );
}

export { Login };
