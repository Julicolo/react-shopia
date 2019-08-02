import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ServicesContainer, ServiceCard} from './styles';

export default function Services() {
  return (
    <ServicesContainer>
      <ServiceCard className="left" bgcolor={'#d9bf8f'}>
        <FontAwesomeIcon icon="plane" style={{transform: 'rotate(-45deg)'}} />
        <div className="servicesText">
          <p>FREE SHIPPING</p>
          <p>Min. order amount $75</p>
        </div>
      </ServiceCard>
      <ServiceCard className="middle">
        <FontAwesomeIcon icon={['far', 'clock']} />
        <div className="servicesText">
          <p>30-DAYS RETURN</p>
          <p>Money Back Guarantee</p>
        </div>
      </ServiceCard>
      <ServiceCard className="right" bgcolor={'#d9bf8f'}>
        <FontAwesomeIcon icon={['far', 'life-ring']} />
        <div className="servicesText">
          <p>24/7 SUPPORT</p>
          <p>Life Time Support</p>
        </div>
      </ServiceCard>
    </ServicesContainer>
  );
}
