import React from 'react';

import Header from './layout/Header';
import Banner from './layout/Banner';
import Services from './layout/Services';
import MainLanding from './layout/MainLanding';

// Styled Components
import { GlobalStyle, Container } 
  from './StyledComponents/GlobalStyle';


// FortAwesome SVG icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt } 
  from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest, faInstagram } 
  from '@fortawesome/free-brands-svg-icons';

library.add(faPhoneAlt, faFacebookF, faTwitter, faPinterest, faInstagram);

export default function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Services />
      <MainLanding />
    </Container>
  );
};