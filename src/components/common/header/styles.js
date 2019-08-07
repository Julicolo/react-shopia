import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  flex-shrink: 0;
  padding: 0 15%;
  margin-bottom: 1rem;
`;

export const UserOptions = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  & svg {
    margin: 0 1rem;
    color: #1cc01c;
    font-size: 1.5rem;
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
  & .title {
    font-size: 5rem;
    text-decoration: none;
  }
  & nav {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    & a {
      list-style: none;
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
  font-size: 1.1rem;
  text-align-last: center;
  outline: none;
`;
