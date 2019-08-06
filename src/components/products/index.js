import React from 'react';

function importAll(resolve) {
  return resolve.keys().map(resolve);
}

const switchCollectionImages = importAll(
  require.context('../../images/games/switch', false, /\.(png|jpe?g|svg)$/)
);

export default function SwitchGames() {
  return switchCollectionImages.map(image => (
    <img src={image} alt="Nintendo Switch Game" key={image} />
  ));
}
