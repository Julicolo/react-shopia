import React from 'react';
import {Route} from 'react-router-dom';

// home
import HomePage from './home/HomePage';

// about
import AboutPage from './about/AboutPage';

// common
import Header from './common/Header';

// Styled Components
import {GlobalStyle, Container} from '../StyledComponents/GlobalStyle';

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
      <Route exact path="/" component={HomePage} />
      <Route path="/" component={AboutPage} />
    </Container>
  );
}
