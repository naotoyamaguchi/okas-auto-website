import React from "react";
import { Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Appointment from './Appointment';
import Faq from './Faq';
import Community from './Community';


const App = ({ location }) => {

  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };

  return (
    <div className="root-container">
      
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/appointment" component={Appointment} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/community" component={Community} />
            <Footer />
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(App);