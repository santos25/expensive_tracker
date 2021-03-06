import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin:0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    /* background: linear-gradient(#74ebd5,#ACB6E5); */
    background: #B4C5E4;
    height: 100%;
  }
`;
