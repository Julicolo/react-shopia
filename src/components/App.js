import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './home';
import About from './about';
import Header from './common/header';
import Footer from './common/footer';
import PageNotFound from './common/404';
import {linkTo} from '../helpers';

import {GlobalStyle, Container} from './styles';

// FortAwesome SVG icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPhoneAlt, faPlane} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing, faClock} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faPhoneAlt,
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faPlane,
  faClock,
  faLifeRing
);

export default class Shopia extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path={linkTo('/')} component={Home} />
          <Route path={linkTo('/about')} component={About} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}
