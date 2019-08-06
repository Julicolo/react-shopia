import React from 'react';
import {NavLink} from 'react-router-dom';

import {linkTo} from '../../../helpers';

import {Currencies} from '../../../data/currencies';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SocialMediaButton} from '../social/styles';
import {
  StyledHeader,
  TopBar,
  UserOptions,
  ButtonsContainer,
  Button,
  Menu,
  CurrencyButton,
} from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <TopBar>
        <div>
          <FontAwesomeIcon icon="phone-alt" />
          <span>Call +06-31950040</span>
        </div>
        <UserOptions>
          <span>Welcome Hulio!</span>
          <Button>My Account</Button>
          <Button>My Wishlist</Button>
          <Button>Login</Button>
        </UserOptions>
      </TopBar>
      <Menu>
        <nav>
          <NavLink to={linkTo('/')} exact>
            Home
          </NavLink>
          <NavLink to={linkTo('/collections')}>Browse Collections</NavLink>
          <NavLink to={linkTo('/about')}>About Us</NavLink>
        </nav>
        <NavLink to={linkTo('/')} exact className="title">
          Shophia
        </NavLink>
        <ButtonsContainer>
          <SocialMediaButton
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            color="#d9bf8f"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            color="#d9bf8f"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.pinterest.com/"
            rel="noopener noreferrer"
            target="_blank"
            color="#d9bf8f"
          >
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            color="#d9bf8f"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </SocialMediaButton>
          <CurrencyButton>
            {Currencies.map(currency => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
          </CurrencyButton>
        </ButtonsContainer>
      </Menu>
    </StyledHeader>
  );
}
