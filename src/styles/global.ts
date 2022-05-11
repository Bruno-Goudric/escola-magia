import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    li {
      cursor: pointer;
    }

    button {
      cursor: pointer;
    }
`;
