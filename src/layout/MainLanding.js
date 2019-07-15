import React from 'react';

import SummerCollection from './SummerCollection';

import { LandingContainer, StripedHeading }
  from '../StyledComponents/MainLanding.js';

import { Line, Star} 
  from '../StyledComponents/GlobalStyle';

export default function MainLanding() { 

  return (
    <LandingContainer>
      <StripedHeading>
        <Line />
        <Star />
        <h2>Hand Picked</h2>
        <Star />
        <Line />
      </StripedHeading>
      <StripedHeading>
        <Line />
        <Star />
        <h2>Summer Collection</h2>
        <Star />
        <Line />
      </StripedHeading>
      <SummerCollection>
        
      </SummerCollection>
      <StripedHeading>
        <Line />
        <Star />
        <h2>Customers say</h2>
        <Star />
        <Line />
      </StripedHeading>
    </LandingContainer>
  );
};