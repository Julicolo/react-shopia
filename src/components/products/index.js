import React from 'react';

function importAll(resolve) {
  return resolve.keys().map(resolve);
}

const switchCollectionImages = importAll(
  require.context('../../images/games/switch', false, /\.(png|jpe?g|svg)$/)
);

export function SwitchGames() {
  return switchCollectionImages.map(image => (
    <img src={image} alt="Nintendo Switch Game" key={image} />
  ));
}

const xboxOneCollectionImages = importAll(
  require.context('../../images/games/xbox1', false, /\.(png|jpe?g|svg)$/)
);

export function XboxOneGames() {
  return xboxOneCollectionImages.map(image => (
    <img src={image} alt="Xbox one Game" key={image} />
  ));
}

const playStation4CollectionImages = importAll(
  require.context('../../images/games/ps4', false, /\.(png|jpe?g|svg)$/)
);

export function PS4Games() {
  return playStation4CollectionImages.map(image => (
    <img src={image} alt="Playstation 4 Game" key={image} />
  ));
}

