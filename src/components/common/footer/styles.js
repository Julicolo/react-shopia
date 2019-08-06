import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #0f0f0f;
  color: lightgrey;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 calc((100% - 80rem) / 2);
  flex-shrink: 0;
  width: 100%;
  h3 {
    color: white;
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
