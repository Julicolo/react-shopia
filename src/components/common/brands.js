import React from 'react';

function importAll(resolve) {
  return resolve.keys().map(resolve);
}

const brandsImages = importAll(
  require.context('../../images/brands', false, /\.(png|jpe?g|svg)$/)
);

export default function Brands() {
  return brandsImages.map(image => <img src={image} alt="lolxd" key={image} />);
}
