import styled from 'styled-components';
import device from '../../../helpers';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  flex-shrink: 0;
  border-bottom: 3px solid var(--main-color);
  @media ${device.laptop} {
    & a.logo {
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
  & > * {
    margin: 0.5rem;
  }
  @media ${device.tabletS} {
    select {
      display: none;
    }
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
  background-color: var(--dark-black);
  & .logo {
    font-size: 4rem;
    font-weight: normal;
    text-decoration: none;
    margin: 0;
  }
  & svg {
    color: var(--main-color);
  }
  & nav {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    position: relative;
    background-color: var(--dark-black);
    & a {
      list-style: none;
      font-size: 1.25rem;
      text-decoration: none;
      padding: 1rem;
    }
  }
  @media ${device.tabletS} {
    & .logo {
      display: none;
    }
    & .mobile.logo {
      display: block;
      user-select: none;
      user-select: none;
    }
    & nav {
      display: none;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      z-index: 3000;
      position: relative;
      background-color: var(--light-black);
      width: 100%;
      top: 83px;
      position: absolute;
      border-bottom: 4px solid var(--main-color);
      &.open {
        display: flex;
      }
      a {
        height: 3rem;
        color: white;
        display: flex;
        padding: 0.75rem;
        width: 100%;
        justify-content: center;
        border-bottom: 1px solid white;
        }
        & select {
          margin: 0.25rem 0;
        }
      }
    }
  }
  @media (min-width: 650px) {
    & nav {
      .mobile {
        display: none;
      }
    }
    & .mobile {
      display: none;
    }
  }
`;

export const CurrencyButton = styled.select`
  background-color: var(--light-black);
  color: white;
  border: none;
  height: 2rem;
  width: 4.5rem;
  font-size: 1.1rem;
  text-align: center;
  text-align-last: center;
  outline: none;
`;
