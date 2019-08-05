import React from 'react';
import {NavLink} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {SocialMediaButton} from '../social/styles';
import {StyledFooter} from './styles';

const env = process.env.NODE_ENV === 'development' ? true : false;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h3>Shops</h3>
        <NavLink to={env ? '/new' : '/shopia/new'}>New</NavLink>
        <NavLink to={env ? '/sales' : '/shopia/sales'}>Sales</NavLink>
        <NavLink to={env ? '/women' : '/shopia/women'}>Women</NavLink>
        <NavLink to={env ? '/men' : '/shopia/men'}>Men</NavLink>
        <NavLink to={env ? '/shoes' : '/shopia/shoes'}>Shoes</NavLink>
        <NavLink to={env ? '/topbrands' : '/shopia/topbrands'}>
          Top Brands
        </NavLink>
        <NavLink to={env ? '/Bags & Accesories' : '/shopia/Bags & Accesories'}>
          Bags & Accesories
        </NavLink>
      </div>
      <div>
        <h3>Information</h3>
        <NavLink to={env ? '/about' : '/about/'}>About us</NavLink>
        <NavLink to={env ? '/customerservice' : '/shopia/customerservice'}>
          Customer Service
        </NavLink>
        <NavLink to={env ? '/collections' : '/shopia/collections'}>
          Collections
        </NavLink>
        <NavLink to={env ? '/bestsellers' : '/shopia/bestsellers'}>
          Best Sellers
        </NavLink>
        <NavLink to={env ? '/manufacturers' : '/shopia/manufacturers'}>
          Manufacturers
        </NavLink>
        <NavLink to={env ? '/privacypolicy' : '/shopia/privacypolicy'}>
          Privacy Policy
        </NavLink>
        <NavLink to={env ? '/terms' : '/shopia/terms'}>
          Terms & Conditions
        </NavLink>
      </div>
      <div>
        <h3>Customer Service</h3>
        <NavLink to={env ? '/searchterms' : '/searchterms/'}>
          Search Terms
        </NavLink>
        <NavLink to={env ? '/ordersandreturns' : '/shopia/ordersandreturns'}>
          Orders and Returns
        </NavLink>
        <NavLink to={env ? '/contact' : '/shopia/contact'}>Contact us</NavLink>
        <NavLink to={env ? '/rss' : '/shopia/rss'}>RSS</NavLink>
        <NavLink to={env ? '/faq' : '/shopia/faq'}>Help & FAQ's</NavLink>
        <NavLink to={env ? '/consultant' : '/shopia/consultant'}>
          Consultant
        </NavLink>
        <NavLink to={env ? '/locations' : '/shopia/locations'}>
          Store Locations
        </NavLink>
      </div>
      <div>
        <h3>Stay Connected</h3>
        <div className="socialcontainer">
          <SocialMediaButton
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#0f0f0f'}
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#0f0f0f'}
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.pinterest.com/"
            rel="noopener noreferrer"
            target="_blank"
            color={'#0f0f0f'}
          >
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#0f0f0f'}
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </SocialMediaButton>
        </div>
        <div>
          <h3>Subscribe to our news letter</h3>
          <form></form>
        </div>
      </div>
    </StyledFooter>
  );
}
