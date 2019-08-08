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
        <h3>Pages</h3>
        <NavLink to={linkTo('/')}>Home</NavLink>
        <NavLink to={linkTo('/consoles')}>Consoles</NavLink>
        <NavLink to={linkTo('/games')}>Games</NavLink>
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
        <h3>Stay Connected</h3>
        <div className="socialcontainer">
          <SocialMediaButton
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.pinterest.com/"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </SocialMediaButton>
        </div>
      </div>
    </StyledFooter>
  );
}
