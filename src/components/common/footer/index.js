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
        <NavLink to={linkTo('/shoes')}>Brands</NavLink>
      </div>
      <div>
        <h3>Information</h3>
        <NavLink to={linkTo('/about')}>About us</NavLink>
        <NavLink to={linkTo('/customerservice')}>Customer Service</NavLink>
        <NavLink to={linkTo('/privacypolicy')}>Privacy Policy</NavLink>
        <NavLink to={linkTo('/terms')}>Terms & Conditions</NavLink>
      </div>
      <div>
        <h3>Stay Connected</h3>
        <div className="socialcontainer">
          <SocialMediaButton
            aria-label="Facebook"
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialMediaButton>
          <SocialMediaButton
            aria-label="Twitter"
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </SocialMediaButton>
          <SocialMediaButton
            aria-label="Pinterest"
            href="https://www.pinterest.com/"
            rel="noopener noreferrer"
            target="_blank"
            color={'var(--main-color);'}
          >
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </SocialMediaButton>
          <SocialMediaButton
            aria-label="Instagram"
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
