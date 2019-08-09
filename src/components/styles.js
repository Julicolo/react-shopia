import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    // --main-color: #1cc01c;
    --main-color: #4724a8;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  body {  
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    color: white;
    font-family: sans-serif;
  }
  
  a {
    color: white;
  }

  .hidden {
    display: none;    
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  min-width: 100%;
  background-color: #222;
`;

export const NotFound = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  & span {
    font-size: 1.25rem;
  }
  & a {
    margin: 0 0.25rem;
  }
`;

export const Triangle = styled.div`
  display: none;
  width: 0;
  height: 0;
  border-left: 11rem solid transparent;
  border-right: 11rem solid transparent;
  border-top: 3rem solid ${props => (props.color ? props.color : 'black')};
  position: absolute;
  z-index: 2000;
`;
