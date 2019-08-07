import React from 'react';
import {NavLink} from 'react-router-dom';

import {linkTo} from '../../../helpers';

import {Currencies} from '../../../data/currencies';

import {
  StyledHeader,
  TopBar,
  UserOptions,
  Button,
  Menu,
  CurrencyButton,
} from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <nav>
          <NavLink to={linkTo('/')} exact>
            Home
          </NavLink>
          <NavLink to={linkTo('/games')}>Games</NavLink>
          <NavLink to={linkTo('/consoles')}>Consoles</NavLink>
          <NavLink to={linkTo('/about')}>About Us</NavLink>
        </nav>
        <NavLink to={linkTo('/')} exact className="title">
          Gaming!
        </NavLink>
        <TopBar>
          <UserOptions>
            <Button>My Account</Button>
            <Button>My Wishlist</Button>
            <Button>Login</Button>
          </UserOptions>
          <CurrencyButton>
            {Currencies.map(currency => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
          </CurrencyButton>
        </TopBar>
      </Menu>
    </StyledHeader>
  );
}
