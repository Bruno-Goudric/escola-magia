import React, { useState } from "react";
import logoSchool from "assets/imagens/logo.png";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (userEmail === "professor@magia.com.br" && userPassword === "1234") {
      navigate("/magic-list");
    } else {
      navigate("/magic-list");
    }
  };

  return (
    <S.Container>
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

          <S.ButtonDefault type="submit">Entrar</S.ButtonDefault>
        </S.FormBody>
      </S.Content>
    </S.Container>
  );
}

export { Login };
