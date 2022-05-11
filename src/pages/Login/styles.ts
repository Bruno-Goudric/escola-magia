import styled from "styled-components";
import backgroundSchool from "assets/imagens/background.png";
import { Form } from "@unform/web";

export const Container = styled.section`
  max-width: 1920px;
  height: 100vh;
  background-image: url(${backgroundSchool});
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.article`
  width: 500px;
  height: 700px;
  background: rgba(196, 196, 196, 0.8);
  border-radius: 5px;
`;

export const Header = styled.header`
  width: 100%;
  height: 204px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
  margin-bottom: 40px;

  > img {
    margin-bottom: 10px;
  }

  > span {
    font-size: 32px;
  }
`;

export const FormBody = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;

    > input {
      width: 404px;
      height: 50px;
      border-radius: 5px;
      border: none;
      background: #f1e7e7;
    }
  }
`;

export const ButtonDefault = styled.button`
  width: 213px;
  height: 44px;
  background: #2c29b5;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin-top: 40px;
`;
