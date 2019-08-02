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

const brandsImages = require
  .context('../../images/brands', false, /\.(png|jpe?g|svg)$/)
  .keys()
  .map(path => '/images/brands/' + path);

const summerCollectionImages = require
  .context('../../images/summercollection', false, /\.(png|jpe?g|svg)$/)
  .keys()
  .map(path => '/images/summercollection/' + path);

const right = (
  <Fragment>
    <Line margin={'right'} />
    <Star />
  </Fragment>
);

const left = (
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
          {right}
          <h2>Hand Picked</h2>
          {left}
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
          {right}
          <h2>Summer Collection</h2>
          {left}
        </StripedHeading>
        <CollectionContainer>
          {summerCollectionImages.map(image => (
            <img src={image} alt="lolxd" key={image} />
          ))}
        </CollectionContainer>
        <StripedHeading>
          {right}
          <h2>Our Brands</h2>
          {left}
        </StripedHeading>
        <BaseContainer>
          {brandsImages.map(image => (
            <img src={image} alt="lolxd" key={image} />
          ))}
        </BaseContainer>
        <StripedHeading>
          {right}
          <h2>Customers say</h2>
          {left}
        </StripedHeading>
      </Main>
    </Fragment>
  );
}
