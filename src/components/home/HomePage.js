import React, {Fragment} from 'react';

import Banner from '../home/Banner';
import MainLanding from '../home/MainLanding';

import Services from '../common/Services';

// Styled Components

export default function App() {
  return (
    <Fragment>
      <Banner />
      <Services />
      <MainLanding />
    </Fragment>
  );
}
