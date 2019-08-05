import styled, {createGlobalStyle} from 'styled-components';
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
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e2e2e2;
  margin-${props => props.margin}: 3rem;
`;

export const Star = styled.div`
  height: 0.7rem;
  width: 1.7rem;
  background-color: ${props => props.color || '#d9bf8f'};
  transform: rotate(45deg);
`;
