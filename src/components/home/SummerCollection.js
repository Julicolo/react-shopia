import React from 'react';
import {CollectionContainer} from '../../StyledComponents/StyledCollection.js';

const images = require.context(
  '../../images/summercollection/',
  false,
  /.(png|jpe?g|svg)$/
);

console.log(images);

export default function SummerCollection() {
  return <CollectionContainer></CollectionContainer>;
}

// {images.map(image => {
//   return <img src={`../../images/summercollection/${image}`} alt="lol" />;
// })}
