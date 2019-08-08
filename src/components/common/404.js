import React from 'react';
import {NavLink} from 'react-router-dom';
import {NotFound} from '../styles';

import {linkTo} from '../../helpers';

export default function PageNotFound() {
  return (
    <React.Fragment>
      <NotFound>
        <h1>Oopsie, a 404!</h1>
        <span>Seems like you lost your shopping cart!</span>
        <span>
          Want to go back to the
          <NavLink to={linkTo('/')}>homepage</NavLink>
          and buy some stuff?
        </span>
      </NotFound>
    </React.Fragment>
  );
}
