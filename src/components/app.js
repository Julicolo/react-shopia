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
    isCartOpen: false,
    cartSum: 0,
    cartItems: [],
  };

  checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
  }

  addToCart = product => {
    console.log(this.state.cartItems);

    // if (this.checkAvailability(this.state.cartItems, product)) {
    //   this.setState({
    //      code block
    //   });
    // }

    this.setState({
      cartSum: this.state.cartSum + product.price,
      cartItems: [...this.state.cartItems, product],
    });
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
