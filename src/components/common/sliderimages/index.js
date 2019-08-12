import React from 'react';

import {CartContext} from '../../shoppingcart/cartcontext';

function renderImageArrays(obj) {
  return Object.values(obj).reduce(
    (arr, image, index) => {
      arr[index % 2 === 0 ? 0 : 1].push(image);
      return arr;
    },
    [[], []]
  );
}

export default function SliderImages(props) {
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
