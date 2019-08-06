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

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FeaturedImage = styled.div`
  display: flex;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const UpcomingReleasesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  & img {
    margin: 0.5rem;
  }
`;

export const UpcomingReleases = styled.div`
  // xd
`;
