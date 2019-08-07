import styled from 'styled-components';
import device from '../../../helpers';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  flex-shrink: 0;
  padding: 0 15%;
  margin-bottom: 1rem;
  @media ${device.tabletM} {
    padding: 0;
    & a.title.active {
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
    margin: 0 1rem;
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
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
  font-size: 1.5rem;
  .burger {
    display: none;
  }
  & .hidden {
    display: none;
  }
  & .title {
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
      top: 120px;
      position: absolute;
      & a {
        height: 3rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    & .burger {
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
