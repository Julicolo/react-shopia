import React from 'react';
import {NavLink} from 'react-router-dom';
import {NotFound} from '../styles';

import {linkTo} from '../../helpers';

export default function PageNotFound() {
  return (
    <React.Fragment>
      <NotFound>
        <h1>Woopsie, a 404!</h1>
        <p>Seems like you lost your shopping cart!</p>
        <p>
          Go back to the
          <NavLink to={linkTo('/')}> homepage </NavLink>
          and buy some stuff!
        </p>
      </NotFound>
    </React.Fragment>
  );
}
