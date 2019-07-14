import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt } 
  from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest, faInstagram } 
  from '@fortawesome/free-brands-svg-icons';

import { GlobalStyle, Container } 
  from './StyledComponents/GlobalStyle';

import Header from './layout/Header';

library.add(faPhoneAlt, faFacebookF, faTwitter, faPinterest, faInstagram);

export default function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Header />
    </Container>
  );
};