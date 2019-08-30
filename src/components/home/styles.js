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
  h2 {
    padding-bottom: 1%;
    margin-bottom: 0;
    border-bottom: 4px solid var(--main-color);
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 550px;
  align-items: flex-start;
  overflow: hidden;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    padding: 1rem 0;
  }
  @media ${device.mobileL} {
    .navigation-arrow {
      display: none;
    }
  }
`;

export const ImagesContainerSmall = styled(ImagesContainer)`
  height: 450px;
`;

export const FeaturedImage = styled.div`
  display: flex;
  padding-left: 1rem;
  & img {
    min-width: 100%;
    height: 535px;
    @media ${device.tabletL} {
      display: none;
    }
  }
`;

export const HorizontalGalleryContainer = styled.div`
  display: flex;
  height: 120%;
  width: 100%;
  user-select: none;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const UpcomingReleases = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  img {
    margin: 0 2rem 2rem 0;
    height: 250px;
    max-width: 100%;
  }
  div {
    display: flex;
    flex-flow: row nowrap;
  }
  @media ${device.tablet} {
    img {
      margin: 0 1rem 1rem 0;
    }
  }
  @media ${device.tabletS} {
    img {
    }
  }
`;

export const ImageGallery = styled(UpcomingReleases)`
  img {
    width: 150px;
    height: 200px;
  }
`;
