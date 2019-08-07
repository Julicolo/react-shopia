import React, {Fragment} from 'react';

import Brands from '../common/brands';
import Services from '../common/services';
import {SwitchGames, XboxOneGames, PS4Games} from '../products';

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
        <ImagesContainer>
          <UpcomingReleasesContainer>
            <UpcomingReleases>
              <div>
                <img
                  src={require('../../images/highlighted/1.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/2.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/3.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/4.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/5.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/6.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/7.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/8.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/1.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/2.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/3.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/4.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/5.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/6.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
            </UpcomingReleases>
          </UpcomingReleasesContainer>
          <FeaturedImage>
            <img
              src={require('../../images/highlighted/big.jpg')}
              alt="Paris Hilton Collection"
            />
          </FeaturedImage>
        </ImagesContainer>
        <Services />
        <StripedHeading>
          {lineStarRight}
          <h2>New Nintendo Switch Games</h2>
          {lineStarLeft}
        </StripedHeading>
        <CollectionContainer>
          <SwitchGames />
        </CollectionContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>New PlayStation 4 Games</h2>
          {lineStarLeft}
        </StripedHeading>
        <CollectionContainer>
          <PS4Games />
        </CollectionContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>New Xbox One Games</h2>
          {lineStarLeft}
        </StripedHeading>
        <CollectionContainer>
          <XboxOneGames />
        </CollectionContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Our Brands</h2>
          {lineStarLeft}
        </StripedHeading>
        <BaseContainer>
          <Brands className="brands" />
        </BaseContainer>
      </Main>
    </Fragment>
  );
}
