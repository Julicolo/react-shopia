import styled from 'styled-components';
import device from '../../../helpers';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  flex-shrink: 0;
  border-bottom: 3px solid var(--main-color);
  @media ${device.laptop} {
    & a.logo.active {
      font-size: 3rem;
    }
  }
`;

export const UserOptions = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  & svg {
    margin: 0 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  font-size: 1.5rem;
  background-color: #171717;
  .burger {
    display: none;
  }
  & .logo {
    font-size: 4rem;
    text-decoration: none;
  }
  & svg {
    color: var(--main-color);
  }
  & nav {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    position: relative;
    background-color: #171717;
    & a {
      list-style: none;
      font-size: 1.25rem;
      text-decoration: none;
      padding: 1rem;
    }
  }
  @media ${device.tablet} {
    & nav {
      display: none;
      flex-flow: column wrap;
      z-index: 3000;
      position: relative;
      background-color: #222;
      width: 100%;
      top: 83px;
      position: absolute;
      border-bottom: 4px solid var(--main-color);
      & a {
        height: 3rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--main-color);
      }
    }
  }
`;

export const CurrencyButton = styled.select`
  background-color: #222;
  color: var(--main-color);
  border: none;
  height: 2rem;
  width: 4.5rem;
  font-size: 1.1rem;
  text-align-last: center;
  outline: none;
`;
