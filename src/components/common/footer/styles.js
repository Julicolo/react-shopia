import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  flex-shrink: 0;
  width: 100%;
  border-top: 4px solid #1cc01c;
  background-color: #171717;
  h3 {
    margin: 3rem 0;
  }
  a {
    color: grey;
    text-decoration: none;
    margin: 0.25rem 0;
  }
  & > div {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 3rem;
    & .socialcontainer {
      display: flex;
      flex-flow: row wrap;
      & a {
        padding: 1.1rem;
        margin: 0 0.25rem;
      }
    }
  }
`;
