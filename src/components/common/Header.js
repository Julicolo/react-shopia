import React from 'react';
import {NavLink} from 'react-router-dom';
import {Currencies} from '../../data/Currencies';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Styled Components
import {
  SocialMediaContainer,
  SocialMediaButton,
} from '../../StyledComponents/SocialMedia';
import {
  StyledHeader,
  TopBar,
  UserOptions,
  Button,
  Menu,
  Title,
  CurrencyButton,
} from '../../StyledComponents/StyledHeader';

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
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pagerino">Pagerino</NavLink>
          <NavLink to="/mario">Mario</NavLink>
        </nav>
        <Title>Sophia</Title>
        <SocialMediaContainer>
          <SocialMediaButton
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.pinterest.com/"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </SocialMediaButton>
          <SocialMediaButton
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
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
        </SocialMediaContainer>
      </Menu>
    </StyledHeader>
  );
}
