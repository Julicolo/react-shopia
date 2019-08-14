import React from 'react';

import {CartContext} from './cartcontext';

import {ShoppingCartSummary} from './styles';

export default function ShoppingCart() {
  return (
    <CartContext.Consumer>
      {cart => (
        <ShoppingCartSummary>
          <h2>{cart.cartItems.length || 'No'} items in cart</h2>
          <div className="item-container">
            {cart.cartItems.map((product, index) => (
              <div className="cart-product" key={index}>
                <span>{product.name}</span>
                <div className="cart-price-button">
                  <span>{product.price}</span>
                  <button onClick={() => cart.removeFromCart(index)}>X</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-sum">
            <span>
              {cart.cartSum !== 0
                ? 'Total amount: ' + cart.selectedCurrency + cart.cartSum
                : null}
            </span>
          </div>
        </ShoppingCartSummary>
      )}
    </CartContext.Consumer>
  );
}

// <ShoppingCartIcon className={this.state.isCartOpen ? 'open' : null}>
// <FontAwesomeIcon
// onClick={() => this.toggleCart()}
// icon="shopping-cart"
// />
// </ShoppingCartIcon>
