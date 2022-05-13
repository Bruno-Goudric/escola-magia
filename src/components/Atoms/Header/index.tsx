import React from 'react';
import logoSchool from 'assets/imagens/logo.png';
import * as S from './styles';
import IHeaderProp from './IHeader';

function HeaderComponent({ top }: IHeaderProp) {
  return (
    <S.Container style={{ marginTop: `${top}` }}>
      <img src={logoSchool} alt="" />
      <span>Escola de Magia</span>
    </S.Container>
  );
}

export { HeaderComponent };
