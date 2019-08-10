import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './home';
import About from './about';
import Header from './common/header';
import Footer from './common/footer';
import PageNotFound from './common/404';
import {linkTo} from '../helpers';

import {GlobalStyle, Container} from './styles';

// FortAwesome SVG icons
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
  state = {
    isMenuOpen: false,
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
        <Header
          toggleMenu={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}
          isMenuOpen={this.state.isMenuOpen}
        />
        <Switch>
          <Route exact path={linkTo('/')} component={Home} />
          <Route path={linkTo('/about')} component={About} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}
