import React from 'react';
import {NavLink} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {CartContext} from '../../shoppingcart/cartcontext';
import {linkTo} from '../../../helpers';

import {GalleryNavigation, UpcomingGame} from './styles';

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
      className="navigation-arrow"
      margin={'right'}
      onClick={event => {
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
      className="navigation-arrow"
      margin={'left'}
      onClick={event => {
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
                <UpcomingGame>
                  <NavLink to={linkTo(`/${product.pathName}`)}>
                    <img alt={product.name} src={product.path} />
                  </NavLink>
                  <span>&euro;{product.price}</span>
                  <button onClick={() => cart.addToCart(product)}>
                    Add to cart
                  </button>
                </UpcomingGame>
              );
            }}
          </CartContext.Consumer>
        );
      })}
    </div>
  ));
}
