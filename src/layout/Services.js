import React from 'react';

import { ServicesContainer, ServiceCard } 
  from '../StyledComponents/StyledServices.js';

export default function Services() { 

  return (
    <ServicesContainer>
      <ServiceCard 
        bgcolor={'#d9bf8f'}
      >
        <p>FREE SHIPPING</p>
        <p>Min. order amount $75</p>
      </ServiceCard>
      <ServiceCard
      >
        <p>30-DAYS RETURN</p>
        <p>Money Back Guarantee</p>
      </ServiceCard>
      <ServiceCard 
        bgcolor={'#d9bf8f'}
      >
        <p>24/7 SUPPORT</p>
        <p>Life Time Support</p>
      </ServiceCard>
    </ServicesContainer>
  );
};