import React from 'react';

function importAll(resolve) {
  const images = {};
  resolve.keys().forEach((item, index) => {
    images[item.replace('./', '')] = resolve(item);
  });
  return images;
}

const imageObject = importAll(
  require.context('../../images/summercollection', false, /\.(png|jpe?g|svg)$/)
);

export default function SummerCollection() {
  return (
    <CollectionContainer>
      {Object.keys(imageObject).map(image => {
        return (
          <img
            src={`/images/summercollection/${image}`}
            alt="summer collection"
            key={image}
          />
        );
      })}
    </CollectionContainer>
  );
}
