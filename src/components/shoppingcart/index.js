import React from 'react';

import {CartContext} from './cartcontext';

import {ShoppingCartSummary} from './styles';

export default function ShoppingCart() {
  return (
    <CartContext.Consumer>
      {cart => (
        <ShoppingCartSummary open={cart.isCartOpen}>
          <h2>{cart.cartItems.length || 'No'} items in cart</h2>
          <div className="item-container">
            {cart.cartItems.map((product, index) => (
              <div className="cart-product" key={index}>
                <span>{product.name}</span>
                <span>{product.amount}</span>
                <div className="cart-price-button">
                  <span>{product.price}</span>
                  <button onClick={() => cart.removeFromCart(index)}>X</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-sum">
            <span>Total amount: € {cart.cartSum}</span>
          </div>
        </ShoppingCartSummary>
      )}
    </CartContext.Consumer>
  );
}