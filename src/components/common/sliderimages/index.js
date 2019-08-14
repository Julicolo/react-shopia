import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {CartContext} from '../../shoppingcart/cartcontext';

import {GalleryNavigation} from './styles';

function renderImageArrays(obj) {
  return Object.values(obj).reduce(
    (arr, image, index) => {
      arr[index % 2 === 0 ? 0 : 1].push(image);
      return arr;
    },
    [[], []]
  );
}

export function makeGalleryArrowLeft(targetContainer, scrollAmount) {
  return (
    <GalleryNavigation
      margin={'right'}
      onClick={() => {
        const imageContainer = document.querySelector(targetContainer);

        imageContainer.scrollLeft -= scrollAmount;
      }}
    >
      <FontAwesomeIcon icon="chevron-left" />
    </GalleryNavigation>
  );
}

export function makeGalleryArrowRight(targetContainer, scrollAmount) {
  return (
    <GalleryNavigation
      margin={'left'}
      onClick={() => {
        const imageContainer = document.querySelector(targetContainer);

        imageContainer.scrollLeft += scrollAmount;
      }}
    >
      <FontAwesomeIcon icon="chevron-right" />
    </GalleryNavigation>
  );
}

export function SliderImages(props) {
  return renderImageArrays(props.games).map((products, index) => (
    <div key={index}>
      {products.map((product, index) => {
        return (
          <CartContext.Consumer key={index}>
            {cart => {
              return (
                <img
                  alt={product.description}
                  src={product.path}
                  onClick={() => cart.addToCart(product)}
                />
              );
            }}
          </CartContext.Consumer>
        );
      })}
    </div>
  ));
}
