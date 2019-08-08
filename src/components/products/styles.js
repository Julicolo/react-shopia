import styled from 'styled-components';
import device from '../../helpers';

export const GamesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 3rem 15%;
  :nth-child(2n + 1) {
    background-color: #171717;
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1 1 auto;
  flex-flow: row wrap;
  width: 100%;
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
