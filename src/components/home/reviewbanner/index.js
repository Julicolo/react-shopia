import React from 'react';

import {ReviewBannerContainer, Review, SmallTriangle} from './styles';

export default function ReviewBanner() {
  return (
    <React.Fragment>
      <ReviewBannerContainer>
        <SmallTriangle />
        <Review>
          <img
            src={require('../../../images/reviewbanner/cindy.png')}
            alt="cindy"
          />
          <section>
            <p>
              Scratch the box kitty run to human with blood on mouth from
              frenzied attack on poor innocent mouse, don't i look cute? Sleep
              on my human's head or 𝕄𝔼𝕆𝕎.
            </p>
            <div>
              <h2>Cindy Dewi</h2>
              <h4>Fashion Stylist</h4>
            </div>
          </section>
        </Review>
        <Review align={'right'}>
          <section>
            <p>
              Scratch the box kitty run to human with blood on mouth from
              frenzied attack on poor innocent mouse, don't i look cute? Sleep
              on my human's head or 𝕄𝔼𝕆𝕎.
            </p>
            <div>
              <h2>Khalid Sheikh</h2>
              <h4>Designer</h4>
            </div>
          </section>
          <img
            src={require('../../../images/reviewbanner/khalid.png')}
            alt="Khalid"
          />
        </Review>
      </ReviewBannerContainer>
    </React.Fragment>
  );
}
