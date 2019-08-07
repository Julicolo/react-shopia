import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
  }
  
  a {
    color: white;
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

export const Line = styled.div`
  height: 4px;
  width: 100%;
  background-color: #1cc01c;
  margin-${props => props.margin}: 3rem;
`;

export const Star = styled.div`
  min-width: 0.75rem;
  min-height: 0.75rem;
  background-color: ${props => props.color || '#1cc01c'};
  transform: rotate(45deg);
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
`;
