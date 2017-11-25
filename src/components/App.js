import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import TestComponent from './TestComponent';
import Contact from './Contact';
import Appointment from './Appointment';
import Faq from './Faq';
import Community from './Community';






class App extends Component {
 render() {
  return (
    <div className="root-container">
      <Nav />
      <Route exact path="/" component={TestComponent} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/appointment" component={Appointment} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/community" component={Community} />
      <Footer />
    </div>
  )
 }
}

export default App;