import React, {Fragment} from 'react';

import Banner from './banner/';
import Brands from '../common/brands';
import Services from '../common/services';
import ReviewBanner from './reviewbanner';
import SummerCollection from '../collections/summer';

import {CollectionContainer, BaseContainer} from '../collections/styles';
import {Line, Star} from '../styles';
import {
  Main,
  StripedHeading,
  HandPicked,
  LeftColumn,
  MiddleColumn,
  RightColumn,
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
          <h2>Hand Picked</h2>
          {lineStarLeft}
        </StripedHeading>
        <HandPicked>
          <LeftColumn>
            <div className="top">
              <img
                src={require('../../images/highlighted/1.jpg')}
                alt="leather boots"
              />
            </div>
            <div className="bot">
              <img
                src={require('../../images/highlighted/2.jpg')}
                alt="leather & metal bracelet"
              />
            </div>
          </LeftColumn>
          <MiddleColumn>
            <div className="mid">
              <img
                src={require('../../images/highlighted/3.jpg')}
                alt="Paris Hilton Collection"
              />
            </div>
          </MiddleColumn>
          <RightColumn>
            <div className="top">
              <img
                src={require('../../images/highlighted/4.jpg')}
                alt="leather bracelet"
              />
            </div>
            <div className="bot">
              <img
                src={require('../../images/highlighted/5.jpg')}
                alt="leather boots"
              />
            </div>
          </RightColumn>
        </HandPicked>
        <StripedHeading>
          {lineStarRight}
          <h2>Summer Collection</h2>
          {lineStarLeft}
        </StripedHeading>
        <CollectionContainer>
          <SummerCollection />
        </CollectionContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Our Brands</h2>
          {lineStarLeft}
        </StripedHeading>
        <BaseContainer>
          <Brands />
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
