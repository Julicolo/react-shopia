import styled, {createGlobalStyle} from 'styled-components';
import device from '../helpers';

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
  width: 750px;
  background-color: #1cc01c;
  margin-${props => props.margin}: .5rem;
  @media ${device.laptopL} {
    width: 500px;
  }
  @media ${device.laptop} {
    width: 250px;
  }

`;

export const Star = styled.div`
  display: none;
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
