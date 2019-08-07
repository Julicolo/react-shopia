import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {linkTo} from '../../../helpers';
import {Currencies} from '../../../data/currencies';

import {StyledHeader, UserOptions, Menu, CurrencyButton} from './styles';

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
          <NavLink to={linkTo('/about')}>About</NavLink>
        </nav>
        <NavLink to={linkTo('/')} exact className="title">
          Shopia
        </NavLink>
        <UserOptions>
          <FontAwesomeIcon icon="shopping-cart" />
          <FontAwesomeIcon icon={['far', 'user']} />
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
