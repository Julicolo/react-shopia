import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  max-width: 80rem;
  flex-grow: 1;
`;

export const StripedHeading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  & h2 {
    font-family: 'PlayFairDisplay';
    width: 50%;
    text-align: center;
  }
`;

export const HandPicked = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  margin: 1rem 0 5rem 0;
  & img {
    width: 100%;
    max-width: 100%;
  }
  & .top,
  .bot {
    margin: 0.5rem 0;
  }
  & .mid {
    margin: 0.5rem 1rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const MiddleColumn = styled.div`
  display: flex;
  & img {
    width: 100%;
    height: 99.5%;
    max-width: 100%;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
