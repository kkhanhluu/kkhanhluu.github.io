import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header/header';
import Footer from './footer/footer';
import EmailSide from './emailSide/emailSide';
import IconSide from './iconSide/iconSide';

// Code-splitting is automated for routes
import Home from '../routes/home/home';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id='app'>
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
        </Router>

        <EmailSide />
        <IconSide />
        <Footer />
      </div>
    );
  }
}
