import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle, ThemeProvider} from "styled-components"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Global = createGlobalStyle`
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

const theme = {
    media: {
        phone: '(max-width: 425px)',
        tablet: '(min-width: 600px)',
        desktop: '(min-width: 1024px)',
    }
}
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
