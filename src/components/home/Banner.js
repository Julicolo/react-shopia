import React, {Fragment} from 'react';

// Styled Components
import {
  TriangleContainer,
  Triangle,
  BannerContainer,
} from '../../StyledComponents/StyledBanner';

import banner1 from '../../images/banner1.png';

export default function Banner() {
  return (
    <Fragment>
      <TriangleContainer>
        <Triangle />
      </TriangleContainer>
      <BannerContainer>
        <img src={banner1} alt="banner" />
      </BannerContainer>
    </Fragment>
  );
}
