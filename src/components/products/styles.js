import styled from 'styled-components';

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1 1 auto;
  flex-flow: row wrap;
  width: 100%;
  padding: 5rem 10%;
  & .brands {
    max-height: 4rem;
  }
`;

export const CollectionContainer = styled(BaseContainer)`
  justify-content: center;
  & img {
    max-width: 100%;
    min-width: 15%;
    margin: 0.5%;
    height: 20rem;
    width: 200px;
  }
`;
