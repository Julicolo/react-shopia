import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
`;

export const StripedHeading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin-top: 3.2rem;
  & h2 {
    width: 50%;
    text-align: center;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 620px;
  background-color: #222;
  align-items: flex-start;
  overflow: hidden;
  border-top: 3px solid #1cc01c;
  padding: 3.2rem;
  margin: 3.2rem 0;
`;

export const FeaturedImage = styled.div`
  display: flex;
  margin-left: 3.2rem;
  & img {
    min-width: 100%;
    height: auto;
  }
`;

// buitenste
export const UpcomingReleasesContainer = styled.div`
  display: flex;
  height: 120%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

// binneste
export const UpcomingReleases = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-evenly;
  & img {
    margin: 0 3.2rem 3.2rem 0;
  }
  & div {
    display: flex;
    flex-flow: column nowrap;
  }
`;
