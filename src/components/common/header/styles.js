import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  flex-shrink: 0;
`;

export const TopBar = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  & span {
    font: 1rem system-ui;
    padding: 0 2rem;
  }
`;

export const UserOptions = styled.div`
  & button {
    padding: 0 2rem;
  }
  & button:last-child {
    padding-left: 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Button = styled.a`
  border: none;
  border-right: 1px solid black;
  background: #222;
  font-size: 1.2rem;
  outline: none;
  padding: 0 1rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
  & .title {
    font-family: 'Krinkes';
    font-size: 5rem;
    margin: 1rem 0;
    text-decoration: none;
  }
  & nav {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    & a {
      list-style: none;
      font-family: 'PlayfairDisplay';
      font-size: 1.25rem;
      text-decoration: none;
    }
    & a:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

export const CurrencyButton = styled.select`
  background-color: #222;
  color: #1cc01c;
  border: none;
  height: 2rem;
  width: 4.5rem;
  font-size: 1rem;
  text-align-last: center;
  outline: none;
  margin-left: 1rem;
`;
