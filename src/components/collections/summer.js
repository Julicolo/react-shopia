import React from 'react';

function importAll(resolve) {
  return resolve.keys().map(resolve);
}

const summerCollectionImages = importAll(
  require.context('../../images/summercollection', false, /\.(png|jpe?g|svg)$/)
);

export default function SummerCollection() {
  return summerCollectionImages.map(image => (
    <img src={image} alt="lolxd" key={image} />
  ));
}
