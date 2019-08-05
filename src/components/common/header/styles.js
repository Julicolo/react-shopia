import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export const TopBar = styled.div`
  background: rgba(240, 240, 240);
  padding: 0 calc((100% - 80rem) / 2);
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
  & button:not(:last-child) {
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

export const Button = styled.button`
  border: none;
  border-left: 1px solid black;
  background: rgba(240, 240, 240);
  font-size: 1rem;
  outline: none;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 calc((100% - 80rem) / 2);
  & .title {
    font-family: 'Krinkes';
    font-size: 5rem;
    margin: 1rem 0;
    text-decoration: none;
    color: black;
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
      color: black;
    }
    & a:not(:last-child) {
      margin-right: 2rem;
    }
  }
  @media (max-width: 1250px) {
    margin: 0 1rem;
  }
`;

export const CurrencyButton = styled.select`
  background-color: black;
  color: white;
  height: 2rem;
  width: 4.5rem;
  font-size: 0.8rem;
  text-align-last: center;
  outline: none;
  border: none;
  border-radius: 1rem;
  margin-left: 5rem;
`;
