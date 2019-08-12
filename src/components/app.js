import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './home';
import About from './about';
import Header from './common/header';
import Footer from './common/footer';
import PageNotFound from './common/404';
import {linkTo} from '../helpers';
import {CartContext} from './shoppingcart/cartcontext';

import {GlobalStyle, Container} from './styles';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faPhoneAlt,
  faPlane,
  faShoppingCart,
  faBars,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing, faClock, faUser} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

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
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
  }

  state = {
    isMenuOpen: false,
    isCartOpen: false,
    cartItems: [],
  };

  addToCart(product) {
    console.log(this.state);

    this.setState({
      cartItems: [...this.state.cartItems, product],
    });
  }

  removeFromCart(product) {
    const cartContent = [...this.state.cartItems];

    cartContent.splice(product, 1);

    this.setState({
      cartItems: cartContent,
    });
  }

  toggleCart() {
    this.setState({isCartOpen: !this.state.isCartOpen});
  }

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
            cartItems: this.state.cartItems,
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            toggleCart: this.toggleCart,
          }}
        >
          <Header
            toggleMenu={() =>
              this.setState({isMenuOpen: !this.state.isMenuOpen})
            }
            isMenuOpen={this.state.isMenuOpen}
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
