import styled from 'styled-components';
import device from '../../helpers';

export const SliderHeading = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const GamesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  padding: 3rem 9%;
  background-color: var(--light-black);
  :nth-child(odd):not(:first-child) {
    background-color: var(--dark-black);
  }
  .mobile {
    display: none;
  }
  @media ${device.laptopL} {
    padding: 2rem;
  }
  @media ${device.tabletM} {
    padding: 1rem;
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
  @media ${device.tabletM} {
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
    @media ${device.tabletM} {
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
