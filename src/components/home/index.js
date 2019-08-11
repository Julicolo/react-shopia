import React, {Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Products} from '../../data/products';
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

function renderImageArrays(obj) {
  const objectValues = Object.values(obj).map(value => {
    return (
      <img
        className="upcoming-release-image"
        src={require(`../../${value.imagePath}`)}
        alt={value.description}
        key={value.name}
      />
    );
  });

  return objectValues.reduce(
    (arr, image, index) => {
      arr[index % 2 === 0 ? 0 : 1].push(image);
      return arr;
    },
    [[], []]
  );
}

function makeGalleryArrowLeft(targetContainer, scrollAmount) {
  return (
    <GalleryNavigation
      margin={'right'}
      onClick={() => {
        const imageContainer = document.querySelector(targetContainer);

        imageContainer.scrollLeft -= scrollAmount;
      }}
    >
      <FontAwesomeIcon icon="chevron-left" />
    </GalleryNavigation>
  );
}

function makeGalleryArrowRight(targetContainer, scrollAmount) {
  return (
    <GalleryNavigation
      margin={'left'}
      onClick={() => {
        const imageContainer = document.querySelector(targetContainer);

        imageContainer.scrollLeft += scrollAmount;
      }}
    >
      <FontAwesomeIcon icon="chevron-right" />
    </GalleryNavigation>
  );
}

export default function App() {
  return (
    <Fragment>
      <Main>
        <h2>Pre-Orders & Upcoming releases</h2>
        <ImagesContainer>
          {makeGalleryArrowLeft('.upcoming-releases-container', '188')}
          <HorizontalGalleryContainer className="upcoming-releases-container">
            <UpcomingReleases>
              {renderImageArrays(Products.upcoming.games).map((arr, index) => (
                <div key={index}>{arr}</div>
              ))}
            </UpcomingReleases>
          </HorizontalGalleryContainer>
          <FeaturedImage>
            <img
              src={require('../../images/games/upcoming/featured/big.jpg')}
              alt="Featured upcoming  game"
            />
          </FeaturedImage>
          {makeGalleryArrowRight('.upcoming-releases-container', '188')}
        </ImagesContainer>
        <Services />
        <GamesWrapper>
          <h2>New Nintendo Switch Games</h2>
          <ImagesContainer>
            {makeGalleryArrowLeft('.switch-games-container', '188')}
            <HorizontalGalleryContainer className="switch-games-container">
              <UpcomingReleases>
                {renderImageArrays(Products.switch.games).map((arr, index) => (
                  <div key={index}>{arr}</div>
                ))}
              </UpcomingReleases>
            </HorizontalGalleryContainer>
            {makeGalleryArrowRight('.switch-games-container', '188')}
          </ImagesContainer>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New PlayStation 4 Games</h2>
          <ImagesContainer>
            {makeGalleryArrowLeft('.ps4-games-container', '188')}
            <HorizontalGalleryContainer className="ps4-games-container">
              <UpcomingReleases>
                {renderImageArrays(Products.ps4.games).map((arr, index) => (
                  <div key={index}>{arr}</div>
                ))}
              </UpcomingReleases>
            </HorizontalGalleryContainer>
            {makeGalleryArrowRight('.ps4-games-container', '188')}
          </ImagesContainer>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New Xbox One Games</h2>
          <ImagesContainer>
            {makeGalleryArrowLeft('.xbox1-games-container', '188')}
            <HorizontalGalleryContainer className="xbox1-games-container">
              <UpcomingReleases>
                {renderImageArrays(Products.xbox1.games).map((arr, index) => (
                  <div key={index}>{arr}</div>
                ))}
              </UpcomingReleases>
            </HorizontalGalleryContainer>
            {makeGalleryArrowRight('.xbox1-games-container', '188')}
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
