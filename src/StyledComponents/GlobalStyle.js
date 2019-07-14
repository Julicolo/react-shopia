import styled, { createGlobalStyle } from 'styled-components';
import Krinkes from '../fonts/KrinkesDecorPERSONAL.ttf';
import PlayfairDisplay from '../fonts/PlayfairDisplay-RegularItalic.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Krinkes';
    src: url(${Krinkes});
  }

  @font-face {
    font-family: 'PlayFairDisplay';
    src: url(${PlayfairDisplay});
  }

  * {
    box-sizing: border-box;
  }

  html, body, .container {
    min-height: 100vh;
  }

  body {  
    padding: 0;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;
