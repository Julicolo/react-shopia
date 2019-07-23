import React from 'react';
import SummerCollection from './SummerCollection';
import Brands from '../common/Brands';

import {
  LandingContainer,
  StripedHeading,
  HandPicked,
  LeftColumn,
  MiddleColumn,
  RightColumn,
} from '../../StyledComponents/MainLanding.js';

import {Line, Star} from '../../StyledComponents/GlobalStyle';

export default function MainLanding() {
  return (
    <LandingContainer>
      <StripedHeading>
        <Line margin={'right'} />
        <Star />
        <h2>Hand Picked</h2>
        <Star />
        <Line margin={'left'} />
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
        <Line margin={'right'} />
        <Star />
        <h2>Summer Collection</h2>
        <Star />
        <Line margin={'left'} />
      </StripedHeading>
      <SummerCollection />
      <StripedHeading>
        <Line margin={'right'} />
        <Star />
        <h2>Our Brands</h2>
        <Star />
        <Line margin={'left'} />
      </StripedHeading>
      <Brands />
      <StripedHeading>
        <Line margin={'right'} />
        <Star />
        <h2>Customers say</h2>
        <Star />
        <Line margin={'left'} />
      </StripedHeading>
    </LandingContainer>
  );
}
