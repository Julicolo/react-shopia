import React from 'react';
import {NavLink} from 'react-router-dom';

import {linkTo} from '../../../helpers';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {SocialMediaButton} from '../social/styles';
import {StyledFooter} from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h3>Shops</h3>
        <NavLink to={linkTo('/new')}>New</NavLink>
        <NavLink to={linkTo('/sales')}>Sales</NavLink>
        <NavLink to={linkTo('/women')}>Women</NavLink>
        <NavLink to={linkTo('/men')}>Men</NavLink>
        <NavLink to={linkTo('/shoes')}>Shoes</NavLink>
        <NavLink to={linkTo('/topbrands')}>Top Brands</NavLink>
        <NavLink to={linkTo('/Bags')}>Bags & Accesories</NavLink>
      </div>
      <div>
        <h3>Information</h3>
        <NavLink to={linkTo('/about')}>About us</NavLink>
        <NavLink to={linkTo('/customerservice')}>Customer Service</NavLink>
        <NavLink to={linkTo('/collections')}>Collections</NavLink>
        <NavLink to={linkTo('/bestsellers')}>Best Sellers</NavLink>
        <NavLink to={linkTo('/manufacturers')}>Manufacturers</NavLink>
        <NavLink to={linkTo('/privacypolicy')}>Privacy Policy</NavLink>
        <NavLink to={linkTo('/terms')}>Terms & Conditions</NavLink>
      </div>
      <div>
        <h3>Customer Service</h3>
        <NavLink to={linkTo('/searchterms')}>Search Terms</NavLink>
        <NavLink to={linkTo('/ordersandreturns')}>Orders and Returns</NavLink>
        <NavLink to={linkTo('/contact')}>Contact us</NavLink>
        <NavLink to={linkTo('/rss')}>RSS</NavLink>
        <NavLink to={linkTo('/faq')}>Help & FAQ's</NavLink>
        <NavLink to={linkTo('/consultant')}>Consultant</NavLink>
        <NavLink to={linkTo('/locations')}>Store Locations</NavLink>
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
