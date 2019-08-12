import React from 'react';

import {CartContext} from './cartcontext';
import {ShoppingCartSummary} from './styles';

export default function ShoppingCart() {
  return (
    <CartContext.Consumer>
      {cart => (
        <ShoppingCartSummary>
          {console.log(cart)}
          <h2>{cart.cartItems.length || 'No'} items in cart</h2>
          <ul>
            {cart.cartItems.map((product, index) => (
              <li>
                {product.name}
                <button onClick={() => cart.removeFromCart(index)}>X</button>
              </li>
            ))}
          </ul>
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

// <CartContext.Consumer>
//   {cart => (
//   )}
// </CartContext.Consumer>
