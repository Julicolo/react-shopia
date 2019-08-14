import React from 'react';
import {NavLink} from 'react-router-dom';

import {linkTo} from '../../helpers';

import {NotFound} from '../styles';

export default function PageNotFound() {
  return (
    <React.Fragment>
      <NotFound>
        <h1>Oopsie, a 404!</h1>
        <p>Seems like you lost your shopping cart!</p>
        <p>
          Want to go back to the
          <NavLink to={linkTo('/')}>homepage</NavLink>
          and buy some stuff?
        </p>
      </NotFound>
    </React.Fragment>
  );
}
