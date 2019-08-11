import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class ShoppingCart extends React.Component {
  state = {
    isCartOpen: false,
    cart: {},
  };

  toggleCart() {
    this.setState({isCartOpen: !this.state.isCartOpen});
  }

  render() {
    return (
      <FontAwesomeIcon onClick={() => this.toggleCart()} icon="shopping-cart" />
    );
  }
}
