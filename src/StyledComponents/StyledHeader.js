import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export const TopBar = styled.div`
  background: rgba(240,240,240);
  height: 3rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  & > div {
    margin: 0 5rem;
  }

  & span {
    font: 1rem system-ui;
    padding: 0 2rem;
  }
`;

export const Button = styled.button`
  border: none;
  border-left: 1px solid black;
  background: rgba(240,240,240);
  font-size: 1rem;
  outline: none;
  padding: 0 2rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;
  height: 8rem;
  border-bottom: 1px solid black;
  & ul {
    display: flex;
    flex-flow: row wrap;
    padding: 0; 
    & li {
      list-style: none;
      font-family: 'PlayfairDisplay';
      font-size: 1.5rem;
    }
    & li:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Krinkes';
  font-size: 5rem;
  margin: 1rem 0;
`;