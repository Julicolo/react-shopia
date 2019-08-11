import React, {Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Products} from '../../data/products';
import Brands from '../common/brands';
import Services from '../common/services';

import {BaseContainer, GamesWrapper} from '../products/styles';
import {
  Main,
  ImagesContainer,
  ImagesContainerSmall,
  FeaturedImage,
  HorizontalGalleryContainer,
  UpcomingReleases,
  GalleryNavigation,
  ImageGallery,
} from './styles';

function renderImageArrays(obj) {
  const objectValues = Object.values(obj).map(value => {
    return (
      <img
        src={require(`../../${value.imagePath}`)}
        alt={value.description}
        key={value.name}
        price={value.price}
        onClick={event => {
          console.log(event.target.getAttribute('price'));
        }}
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
          {makeGalleryArrowLeft('.upcoming-releases-container', '232')}
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
          {makeGalleryArrowRight('.upcoming-releases-container', '232')}
        </ImagesContainer>
        <Services />
        <GamesWrapper>
          <h2>New Nintendo Switch Games</h2>
          <ImagesContainerSmall>
            {makeGalleryArrowLeft('.switch-games-container', '182')}
            <HorizontalGalleryContainer className="switch-games-container">
              <ImageGallery>
                {renderImageArrays(Products.switch.games).map((arr, index) => (
                  <div key={index}>{arr}</div>
                ))}
              </ImageGallery>
            </HorizontalGalleryContainer>
            {makeGalleryArrowRight('.switch-games-container', '182')}
          </ImagesContainerSmall>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New PlayStation 4 Games</h2>
          <ImagesContainerSmall>
            {makeGalleryArrowLeft('.ps4-games-container', '182')}
            <HorizontalGalleryContainer className="ps4-games-container">
              <ImageGallery>
                {renderImageArrays(Products.ps4.games).map((arr, index) => (
                  <div key={index}>{arr}</div>
                ))}
              </ImageGallery>
            </HorizontalGalleryContainer>
            {makeGalleryArrowRight('.ps4-games-container', '182')}
          </ImagesContainerSmall>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New Xbox One Games</h2>
          <ImagesContainerSmall>
            {makeGalleryArrowLeft('.xbox1-games-container', '182')}
            <HorizontalGalleryContainer className="xbox1-games-container">
              <ImageGallery>
                {renderImageArrays(Products.xbox1.games).map((arr, index) => (
                  <div key={index}>{arr}</div>
                ))}
              </ImageGallery>
            </HorizontalGalleryContainer>
            {makeGalleryArrowRight('.xbox1-games-container', '182')}
          </ImagesContainerSmall>
        </GamesWrapper>
        <h2>Our Brands</h2>
        <BaseContainer>
          <Brands className="brands" />
        </BaseContainer>
      </Main>
    </Fragment>
  );
}
