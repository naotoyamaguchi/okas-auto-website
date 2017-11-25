import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li><Link to="/">Home / Goes to components/App.js</Link></li>
          <li><Link to="/contact">Contact / Goes to components/Contact.js</Link></li>
          <li><Link to="/faq">FAQ / Goes to components/Faq.js</Link></li>
          <li><Link to="/community">Community / Goes to components/Community.js</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;