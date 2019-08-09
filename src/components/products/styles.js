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
  & h2 {
    padding-bottom: 1%;
    border-bottom: 4px solid var(--main-color);
  }
  @media ${device.laptopL} {
    padding: 2rem 10%;
  }
  @media ${device.laptop} {
    padding: 2rem 5%;
  }
  @media ${device.tablet} {
    padding: 1rem 0;
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1 1 auto;
  flex-flow: row wrap;
  width: 100%;
  margin-bottom: 1rem;
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
  margin-bottom: 0;
  & img {
    max-width: 100%;
    min-width: 15%;
    margin: 1.5rem;
    height: 18rem;
    width: 200px;
    @media ${device.tablet} {
      height: auto;
      max-width: 30%;
      width: 26%;
      margin: 1rem;
    }
    @media ${device.mobileL} {
      margin: 0.5rem;
    }
  }
`;
