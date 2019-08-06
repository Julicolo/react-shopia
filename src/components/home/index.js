import React, {Fragment} from 'react';

import Banner from './banner/';
import Brands from '../common/brands';
import Services from '../common/services';
import ReviewBanner from './reviewbanner';
import SwitchGames from '../products';

import {CollectionContainer, BaseContainer} from '../products/styles';
import {Line, Star} from '../styles';
import {
  Main,
  StripedHeading,
  ImagesContainer,
  FeaturedImage,
  UpcomingReleasesContainer,
  UpcomingReleases,
} from './styles';

const lineStarRight = (
  <Fragment>
    <Line margin={'right'} />
    <Star />
  </Fragment>
);

const lineStarLeft = (
  <Fragment>
    <Star />
    <Line margin={'left'} />
  </Fragment>
);

export default function App() {
  return (
    <Fragment>
      <Main>
        <Banner />
        <Services />
        <StripedHeading>
          {lineStarRight}
          <h2>Upcoming Titles</h2>
          {lineStarLeft}
        </StripedHeading>
        <ImagesContainer>
          <FeaturedImage>
            <img
              src={require('../../images/highlighted/mid1.jpg')}
              alt="Paris Hilton Collection"
            />
          </FeaturedImage>
          <UpcomingReleasesContainer>
            <UpcomingReleases>
              <img
                src={require('../../images/highlighted/left1.jpg')}
                alt="leather boots"
              />
              <img
                src={require('../../images/highlighted/left2.jpg')}
                alt="leather & metal bracelet"
              />{' '}
              <img
                src={require('../../images/highlighted/left3.jpg')}
                alt="leather boots"
              />
              <img
                src={require('../../images/highlighted/left4.jpg')}
                alt="leather & metal bracelet"
              />
              <img
                src={require('../../images/highlighted/right1.jpg')}
                alt="leather bracelet"
              />
              <img
                src={require('../../images/highlighted/right2.jpg')}
                alt="leather boots"
              />
              <img
                src={require('../../images/highlighted/right3.jpg')}
                alt="leather bracelet"
              />
              <img
                src={require('../../images/highlighted/right4.jpg')}
                alt="leather boots"
              />
            </UpcomingReleases>
          </UpcomingReleasesContainer>
        </ImagesContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Switch Games</h2>
          {lineStarLeft}
        </StripedHeading>
        <CollectionContainer>
          <SwitchGames />
        </CollectionContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Our Brands</h2>
          {lineStarLeft}
        </StripedHeading>
        <BaseContainer>
          <Brands className="brands" />
        </BaseContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Customers say</h2>
          {lineStarLeft}
        </StripedHeading>
      </Main>
      <ReviewBanner />
    </Fragment>
  );
}
