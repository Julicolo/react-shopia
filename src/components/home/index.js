import React from 'react';

import Brands from '../common/brands';
import Services from '../common/services';
import {Products} from '../../data/products';

import {
  SliderImages,
  makeGalleryArrowLeft,
  makeGalleryArrowRight,
} from '../common/sliderimages';

import {
  Main,
  ImagesContainer,
  ImagesContainerSmall,
  FeaturedImage,
  HorizontalGalleryContainer,
  UpcomingReleases,
  ImageGallery,
} from './styles';

import {
  SliderHeading,
  NavigationWrapper,
  BaseContainer,
  GamesWrapper,
} from '../products/styles';

export default function App() {
  return (
    <Main>
      <GamesWrapper>
        <SliderHeading>
          <h2>Pre-Orders & Upcoming releases</h2>
          <NavigationWrapper>
            {makeGalleryArrowLeft('.upcoming-releases-container', '232')}
            {makeGalleryArrowRight('.upcoming-releases-container', '232')}
          </NavigationWrapper>
        </SliderHeading>
        <ImagesContainer>
          {makeGalleryArrowLeft('.upcoming-releases-container', '232')}
          <HorizontalGalleryContainer className="upcoming-releases-container">
            <UpcomingReleases>
              <SliderImages games={Products.upcoming.games} />
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
      </GamesWrapper>
      <Services />
      <GamesWrapper>
        <SliderHeading>
          <h2>New Nintendo Switch Games</h2>
          <NavigationWrapper>
            {makeGalleryArrowLeft('.switch-games-container', '182')}
            {makeGalleryArrowRight('.switch-games-container', '182')}
          </NavigationWrapper>
        </SliderHeading>
        <ImagesContainerSmall>
          {makeGalleryArrowLeft('.switch-games-container', '182')}
          <HorizontalGalleryContainer className="switch-games-container">
            <ImageGallery>
              <SliderImages games={Products.switch.games} />
            </ImageGallery>
          </HorizontalGalleryContainer>
          {makeGalleryArrowRight('.switch-games-container', '182')}
        </ImagesContainerSmall>
      </GamesWrapper>
      <GamesWrapper>
        <SliderHeading>
          <h2>New PlayStation 4 Games</h2>
          <NavigationWrapper>
            {makeGalleryArrowLeft('.switch-games-container', '182')}
            {makeGalleryArrowRight('.switch-games-container', '182')}
          </NavigationWrapper>
        </SliderHeading>
        <ImagesContainerSmall>
          {makeGalleryArrowLeft('.ps4-games-container', '182')}
          <HorizontalGalleryContainer className="ps4-games-container">
            <ImageGallery>
              <SliderImages games={Products.ps4.games} />
            </ImageGallery>
          </HorizontalGalleryContainer>
          {makeGalleryArrowRight('.ps4-games-container', '182')}
        </ImagesContainerSmall>
      </GamesWrapper>
      <GamesWrapper>
        <SliderHeading>
          <h2>New Xbox One Games</h2>
          <NavigationWrapper>
            {makeGalleryArrowLeft('.switch-games-container', '182')}
            {makeGalleryArrowRight('.switch-games-container', '182')}
          </NavigationWrapper>
        </SliderHeading>
        <ImagesContainerSmall>
          {makeGalleryArrowLeft('.xbox1-games-container', '182')}
          <HorizontalGalleryContainer className="xbox1-games-container">
            <ImageGallery>
              <SliderImages games={Products.xbox1.games} />
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
  );
}
