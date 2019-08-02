import React from 'react';
import {Route} from 'react-router-dom';

import Home from './home';
import About from './about';
import Header from './common/header';

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

export default function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/" component={About} />
    </Container>
  );
}
