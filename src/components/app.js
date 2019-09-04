import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';

import Home from './home';
import About from './about';
import Header from './common/header';
import Footer from './common/footer';
import PageNotFound from './common/404';
import {linkTo} from '../helpers';
import {CartContext} from './shoppingcart/cartcontext';

import {GlobalStyle, Container} from './styles';

// FortAwesome == FontAwesome, needs to be imported with camelCasing.

// Usage for regular(far) & brands(fab) are the same, solid(fas) is different
// Example brands/regular: <FontAwesomeIcon icon={['far', 'life-ring']} />
// Example solid: <FontAwesomeIcon icon="shopping-cart" />
import {faLifeRing, faClock, faUser} from '@fortawesome/free-regular-svg-icons';
import {
  faPhoneAlt,
  faPlane,
  faShoppingCart,
  faBars,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// Adds the icons to the library which allows us to access it from anywhere -
// by simplying including the library elsewhere.
library.add(
  faPhoneAlt,
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faPlane,
  faClock,
  faLifeRing,
  faUser,
  faShoppingCart,
  faBars,
  faChevronRight,
  faChevronLeft
);

export default withRouter(props => <Shopia {...props} />);

class Shopia extends React.Component {
  state = {
    selectedCurrency: 'EUR',
    isMenuOpen: false,
    isCartOpen: true,
    cartSum: 0,
    cartItems: [],
  };

  // Used for checking if Object already exists inside array
  checkAvailability(array, value) {
    return array.some(arrayContent => value === arrayContent);
  }

  addToCart = product => {
    const {cartItems} = this.state;

    // Adds a counters to the product object
    if (!product.hasOwnProperty('count')) product.count = 1;

    cartItems.map(obj => obj === product ? product.count++ : null);

    // If the Object already exists inside the cart, it will return
    if (this.checkAvailability(cartItems, product)) return;

    this.setState({
      cartItems: [...cartItems, product],
    });

    console.log(cartItems);
  };

  removeFromCart = index => {
    const cartContent = [...this.state.cartItems];
    cartContent.splice(index, 1);

    this.setState({
      cartItems: cartContent,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) this.onRouteChange();
  }

  onRouteChange() {
    this.setState({isMenuOpen: false});
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <CartContext.Provider
          value={{
            selectedCurrency: this.state.selectedCurrency,
            isCartOpen: this.state.isCartOpen,
            cartSum: this.state.cartSum,
            cartItems: this.state.cartItems,
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
          }}
        >
          <Header
            changeCurrency={event =>
              this.setState({
                selectedCurrency: event.target.value,
              })
            }
            isMenuOpen={this.state.isMenuOpen}
            toggleMenu={() =>
              this.setState({isMenuOpen: !this.state.isMenuOpen})
            }
            isCartOpen={this.state.isCartOpen}
            toggleCart={() => {
              this.setState({isCartOpen: !this.state.isCartOpen});
            }}
          />
          <Switch>
            <Route exact path={linkTo('/')} component={Home} />
            <Route path={linkTo('/about')} component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </CartContext.Provider>
        <Footer />
      </Container>
    );
  }
}
