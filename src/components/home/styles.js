import styled from 'styled-components';
import device from '../../helpers';

export const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 530px;
  background-color: #222;
  align-items: flex-start;
  overflow: hidden;
  padding: 3rem;
  @media ${device.tablet} {
    padding: 1rem;
    height: 50%;
  }
`;

export const FeaturedImage = styled.div`
  display: flex;
  margin-left: 2rem;
  & img {
    min-width: 100%;
    height: 435px;
    @media ${device.tabletL} {
      display: none;
    }
  }
`;

export const UpcomingReleasesContainer = styled.div`
  display: flex;
  height: 120%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const UpcomingReleases = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-evenly;
  & img {
    margin: 0 2rem 2rem 0;
    max-height: 200px;
  }
  & div {
    display: flex;
    flex-flow: column nowrap;
  }
  @media ${device.tablet} {
    & img {
      margin: 0 0.5rem 0.5rem 0;
      width: 90%;
      height: auto;
      min-width: 120px;
    }
  }
`;
