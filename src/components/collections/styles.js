import styled from 'styled-components';

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex: 1 1 auto;
  flex-flow: row wrap;
  margin: 5rem 0;
`;

export const CollectionContainer = styled(BaseContainer)`
  border: 1px solid #e2e2e2;
  padding: 0.5%;
  margin: 1rem 0 5rem 0;
  & img {
    max-width: 100%;
    min-width: 24%;
    margin: 0.5%;
  }
`;
