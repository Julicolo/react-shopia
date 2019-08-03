import React, {Fragment} from 'react';

import Banner from './banner/';
import Services from '../common/services';

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

function importAll(resolve) {
  return resolve.keys().map(resolve);
}

const summerCollectionImages = importAll(
  require.context('../../images/summercollection', false, /\.(png|jpe?g|svg)$/)
);

const brandsImages = importAll(
  require.context('../../images/brands', false, /\.(png|jpe?g|svg)$/)
);

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
      <Banner />
      <Main>
        <Services />
        <StripedHeading>
          {lineStarRight}
          <h2>Hand Picked</h2>
          {lineStarLeft}
        </StripedHeading>
        <HandPicked>
          <LeftColumn>
            <div className="top">
              <img src={require('../../images/1.jpg')} alt="leather boots" />
            </div>
            <div className="bot">
              <img
                src={require('../../images/2.jpg')}
                alt="leather & metal bracelet"
              />
            </div>
          </LeftColumn>
          <MiddleColumn>
            <div className="mid">
              <img
                src={require('../../images/3.jpg')}
                alt="Paris Hilton Collection"
              />
            </div>
          </MiddleColumn>
          <RightColumn>
            <div className="top">
              <img src={require('../../images/4.jpg')} alt="leather bracelet" />
            </div>
            <div className="bot">
              <img src={require('../../images/5.jpg')} alt="leather boots" />
            </div>
          </RightColumn>
        </HandPicked>
        <StripedHeading>
          {lineStarRight}
          <h2>Summer Collection</h2>
          {lineStarLeft}
        </StripedHeading>
        <CollectionContainer>
          {summerCollectionImages.map(image => (
            <img src={image} alt="lolxd" key={image} />
          ))}
        </CollectionContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Our Brands</h2>
          {lineStarLeft}
        </StripedHeading>
        <BaseContainer>
          {brandsImages.map(image => (
            <img src={image} alt="lolxd" key={image} />
          ))}
        </BaseContainer>
        <StripedHeading>
          {lineStarRight}
          <h2>Customers say</h2>
          {lineStarLeft}
        </StripedHeading>
      </Main>
    </Fragment>
  );
}
