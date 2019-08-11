// import React, {Fragment, useState} from 'react';

// import {
//   TriangleContainer,
//   Triangle,
//   BannerContainer,
//   BannerButtonContainer,
//   BannerButton,
// } from './styles';

// function importAll(resolve) {
//   return resolve.keys().map(resolve);
// }

// export const bannerImages = importAll(
//   require.context('../../../images/landingbanner', false, /\.(png|jpe?g|svg)$/)
// );

// export default function Banner() {
//   const [banner, setBanner] = useState(bannerImages[0]);

//   return (
//     <Fragment>
//       <TriangleContainer>
//         <Triangle />
//       </TriangleContainer>
//       <BannerContainer>
//         <img src={banner} alt="banner" />
//         <BannerButtonContainer>
//           {bannerImages.map(image => (
//             <BannerButton
//               key={image}
//               selected={image === banner}
//               onClick={() => setBanner(image)}
//             />
//           ))}
//         </BannerButtonContainer>
//       </BannerContainer>
//     </Fragment>
//   );
// }
