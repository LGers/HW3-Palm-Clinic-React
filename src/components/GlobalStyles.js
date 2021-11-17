import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-weight: normal;
    color: #202225;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(236, 220, 222, 0.3);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(220, 224, 236, 0.5);
    border-radius: 8px;
  }

  input[type=text],
  input[type=email],
  input[type=password],
  textarea {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
`