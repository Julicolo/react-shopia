import React from 'react';

import {CartContext} from './cartcontext';
import {NavLink} from 'react-router-dom';
import {linkTo} from '../../helpers';

import {
  ShoppingCartSummary,
  ShoppingCartItems,
  ShoppingCartButton,
} from './styles';

export default function ShoppingCart() {
  return (
    <CartContext.Consumer>
      {cart => (
        <ShoppingCartSummary open={cart.isCartOpen}>
          <ShoppingCartItems>
            <div className="product-name">
              <h3>Product</h3>
              {cart.cartItems.map((product, index) => (
                <span key={index}>{product.name}</span>
              ))}
            </div>
            <div>
              <h3>Amount</h3>
              {cart.cartItems.map((product, index) => (
                <span key={index}>{product.amount}</span>
              ))}
            </div>
            <div>
              <h3>Price</h3>
              {cart.cartItems.map((product, index) => (
                <span key={index}>&euro;{product.price * product.amount}</span>
              ))}
            </div>
          </ShoppingCartItems>
          <div className="cart-sum">
            <span>Total amount: &euro;{cart.cartSum}</span>
            <NavLink to={linkTo('/checkout')}>
              <ShoppingCartButton>Checkout</ShoppingCartButton>
            </NavLink>
          </div>
        </ShoppingCartSummary>
      )}
    </CartContext.Consumer>
  );
}
