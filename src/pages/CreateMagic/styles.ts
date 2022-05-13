import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 450px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px -22px 3px 22px rgba(0, 0, 0, 0);
  box-shadow: 0px 15px 13px -7px #000000, 5px -22px 3px 22px rgba(0, 0, 0, 0);
`;

export const Title = styled.h1`
  margin-bottom: 40px;
`;
