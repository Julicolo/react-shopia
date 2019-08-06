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

  html {
    overflow-y: overlay
    
  }

  html, body {
    min-height: 100vh;
  }

  body {  
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e2e2e2;
  margin-${props => props.margin}: 3rem;
`;

export const Star = styled.div`
  min-width: 0.75rem;
  min-height: 0.75rem;
  background-color: ${props => props.color || '#d9bf8f'};
  transform: rotate(45deg);
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
`;
