import styled from 'styled-components';
import device from '../../helpers';

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1 1 auto;
  flex-flow: row wrap;
  width: 100%;
  padding: 3rem 15%;
  & .brands {
    max-height: 4rem;
    margin: 1.5rem;
  }
  @media ${device.tablet} {
    padding: 0;
  }
`;

export const CollectionContainer = styled(BaseContainer)`
  justify-content: center;

  & img {
    max-width: 100%;
    min-width: 15%;
    margin: 1.5rem;
    height: 18rem;
    width: 200px;
  }
  @media ${device.tablet} {
    & img {
      height: 9rem;
      width: 100px;
      margin: 0.5rem;
    }
  }
`;
