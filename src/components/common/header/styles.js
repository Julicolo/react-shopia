import styled from 'styled-components';
import device from '../../../helpers';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  flex-shrink: 0;
  border-bottom: 3px solid #1cc01c;
  margin-bottom: 1rem;
  @media ${device.laptop} {
    & a.logo.active {
      font-size: 3rem;
      margin-left: 2rem;
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
  height: 6rem;
  font-size: 1.5rem;
  background-color: #171717;
  .burger {
    display: none;
  }
  & .center {
    display: none;
  }
  & .logo {
    font-size: 5rem;
    text-decoration: none;
  }
  & svg {
    color: #1cc01c;
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
    & .hidden {
      display: none;
    }
    & nav {
      display: none;
      flex-flow: column wrap;
      z-index: 3000;
      position: relative;
      background-color: #222;
      width: 100%;
      top: 115px;
      position: absolute;
      border-bottom: 4px solid #1cc01c;
      & a {
        height: 3rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #1cc01c;
      }
    }
    & .burger,
    .center {
      display: block;
      span {
        margin: 0 1rem;
      }
    }
  }
`;

export const CurrencyButton = styled.select`
  background-color: #222;
  color: #1cc01c;
  border: none;
  height: 2rem;
  width: 4.5rem;
  font-size: 1.1rem;
  text-align-last: center;
  outline: none;
`;
