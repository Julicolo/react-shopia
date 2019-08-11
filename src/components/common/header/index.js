import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {linkTo} from '../../../helpers';
import {Currencies} from '../../../data/currencies';

import {StyledHeader, UserOptions, Menu, CurrencyButton} from './styles';

export default function Header({toggleMenu, isMenuOpen}) {
  return (
    <StyledHeader>
      <Menu>
        <NavLink to={linkTo('/')} exact className="logo">
          Shopia
        </NavLink>
        <h2 className="logo mobile" onClick={toggleMenu}>
          Shopia
        </h2>
        <nav className={isMenuOpen ? 'open' : null}>
          <NavLink className="mobile" to={linkTo('/')}>
            Home
          </NavLink>
          <NavLink to={linkTo('/games')}>Games</NavLink>
          <NavLink to={linkTo('/consoles')}>Consoles</NavLink>
          <NavLink to={linkTo('/about')}>About</NavLink>
          <CurrencyButton className="mobile">
            {Currencies.map(currency => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
          </CurrencyButton>
        </nav>
        <UserOptions>
          <FontAwesomeIcon icon={['far', 'user']} />
          <FontAwesomeIcon icon="shopping-cart" />
          <CurrencyButton>
            {Currencies.map(currency => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
          </CurrencyButton>
        </UserOptions>
      </Menu>
    </StyledHeader>
  );
}