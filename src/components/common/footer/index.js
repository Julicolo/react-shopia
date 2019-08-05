import React from 'react';
import {NavLink} from 'react-router-dom';

import {SocialMediaButton} from '../social/styles';
import {StyledFooter} from './styles';

const env = process.env.NODE_ENV === 'development' ? true : false;

export default function Footer() {
  return (
    <StyledFooter>
      <div></div>
    </StyledFooter>
  );
}
