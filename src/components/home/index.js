import React, {Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Brands from '../common/brands';
import Services from '../common/services';

import {BaseContainer, GamesWrapper} from '../products/styles';
import {
  Main,
  ImagesContainer,
  FeaturedImage,
  HorizontalGalleryContainer,
  UpcomingReleases,
  GalleryNavigation,
} from './styles';

function importAll(resolve) {
  return resolve.keys().map(resolve);
}

const upcomingReleasesCollection = importAll(
  require.context('../../images/games/upcoming', false, /\.(png|jpe?g|svg)$/)
);

const switchCollectionImages = importAll(
  require.context('../../images/games/switch', false, /\.(png|jpe?g|svg)$/)
);

const xboxOneCollectionImages = importAll(
  require.context('../../images/games/xbox1', false, /\.(png|jpe?g|svg)$/)
);

const playStation4CollectionImages = importAll(
  require.context('../../images/games/ps4', false, /\.(png|jpe?g|svg)$/)
);

const upcomingGames = upcomingReleasesCollection.reduce(
  (arr, path) => {
    const lastPair = arr[arr.length - 1];
    if (lastPair.length < 2) {
      lastPair.push(path);
    } else if (lastPair.length === 2) {
      arr.push([path]);
    }

    return arr;
  },
  [[]]
);

const switchGames = switchCollectionImages.reduce(
  (arr, path) => {
    const lastPair = arr[arr.length - 1];
    if (lastPair.length < 2) {
      lastPair.push(path);
    } else if (lastPair.length === 2) {
      arr.push([path]);
    }

    return arr;
  },
  [[]]
);

const xboxOneGames = xboxOneCollectionImages.reduce(
  (arr, path) => {
    const lastPair = arr[arr.length - 1];
    if (lastPair.length < 2) {
      lastPair.push(path);
    } else if (lastPair.length === 2) {
      arr.push([path]);
    }

    return arr;
  },
  [[]]
);

const playstationGames = playStation4CollectionImages.reduce(
  (arr, path) => {
    const lastPair = arr[arr.length - 1];
    if (lastPair.length < 2) {
      lastPair.push(path);
    } else if (lastPair.length === 2) {
      arr.push([path]);
    }

    return arr;
  },
  [[]]
);

export default function App() {
  return (
    <Fragment>
      <Main>
        <h2>Pre-Orders & Upcoming releases</h2>
        <ImagesContainer>
          <GalleryNavigation
            margin={'right'}
            onClick={() => {
              const imageContainer = document.querySelector(
                '.upcoming-releases-container'
              );

              imageContainer.scrollLeft -= 188;
            }}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </GalleryNavigation>
          <HorizontalGalleryContainer className="upcoming-releases-container">
            <UpcomingReleases>
              {upcomingGames.map(([path1, path2]) => (
                <div key={path1 + path2}>
                  <img
                    className="upcoming-release-image"
                    src={path1}
                    alt={'Upcoming game' + path1}
                  />
                  <img src={path2} alt={'Upcoming game' + path2} />
                </div>
              ))}
            </UpcomingReleases>
          </HorizontalGalleryContainer>
          <FeaturedImage>
            <img
              src={require('../../images/games/upcoming/featured/big.jpg')}
              alt="Featured upcoming  game"
            />
          </FeaturedImage>
          <GalleryNavigation
            margin={'left'}
            onClick={() => {
              const imageContainer = document.querySelector(
                '.upcoming-releases-container'
              );

              imageContainer.scrollLeft += 188;
            }}
          >
            <FontAwesomeIcon icon="chevron-right" />
          </GalleryNavigation>
        </ImagesContainer>
        <Services />
        <GamesWrapper>
          <h2>New Nintendo Switch Games</h2>
          <ImagesContainer>
            <GalleryNavigation
              margin={'right'}
              onClick={() => {
                const imageContainer = document.querySelector(
                  '.switch-games-container'
                );

                imageContainer.scrollLeft -= 188;
              }}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </GalleryNavigation>
            <HorizontalGalleryContainer className="switch-games-container">
              <UpcomingReleases>
                {switchGames.map(([path1, path2]) => (
                  <div key={path1 + path2}>
                    <img src={path1} alt={'Nintendo switch game' + path1} />
                    <img src={path2} alt={'Nintendo switch game' + path2} />
                  </div>
                ))}
              </UpcomingReleases>
            </HorizontalGalleryContainer>
            <GalleryNavigation
              margin={'left'}
              onClick={() => {
                const imageContainer = document.querySelector(
                  '.switch-games-container'
                );

                imageContainer.scrollLeft += 188;
              }}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </GalleryNavigation>
          </ImagesContainer>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New PlayStation 4 Games</h2>
          <ImagesContainer>
            <GalleryNavigation
              margin={'right'}
              onClick={() => {
                const imageContainer = document.querySelector(
                  '.ps4-games-container'
                );

                imageContainer.scrollLeft -= 188;
              }}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </GalleryNavigation>
            <HorizontalGalleryContainer className="ps4-games-container">
              <UpcomingReleases>
                {playstationGames.map(([path1, path2]) => (
                  <div key={path1 + path2}>
                    <img src={path1} alt={'Playstation 4 game' + path1} />
                    <img src={path2} alt={'Playstation 4 game' + path2} />
                  </div>
                ))}
              </UpcomingReleases>
            </HorizontalGalleryContainer>
            <GalleryNavigation
              margin={'left'}
              onClick={() => {
                const imageContainer = document.querySelector(
                  '.ps4-games-container'
                );

                imageContainer.scrollLeft += 188;
              }}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </GalleryNavigation>
          </ImagesContainer>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New Xbox One Games</h2>
          <ImagesContainer>
            <GalleryNavigation
              margin={'right'}
              onClick={() => {
                const imageContainer = document.querySelector(
                  '.xbox1-games-container'
                );

                imageContainer.scrollLeft -= 188;
              }}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </GalleryNavigation>
            <HorizontalGalleryContainer className="xbox1-games-container">
              <UpcomingReleases>
                {xboxOneGames.map(([path1, path2]) => (
                  <div key={path1 + path2}>
                    <img src={path1} alt={'Xbox One game' + path1} />
                    <img src={path2} alt={'Xbox One game' + path2} />
                  </div>
                ))}
              </UpcomingReleases>
            </HorizontalGalleryContainer>
            <GalleryNavigation
              margin={'left'}
              onClick={() => {
                const imageContainer = document.querySelector(
                  '.xbox1-games-container'
                );

                imageContainer.scrollLeft += 188;
              }}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </GalleryNavigation>
          </ImagesContainer>
        </GamesWrapper>
        <h2>Our Brands</h2>
        <BaseContainer>
          <Brands className="brands" />
        </BaseContainer>
      </Main>
    </Fragment>
  );
}
