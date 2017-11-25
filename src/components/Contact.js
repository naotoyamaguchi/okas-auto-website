import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Contact extends Component {

  componentDidMount() {
    console.log("Contact mount function 1");
    // Get the components DOM node
    var elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      // Now set a transition on the opacity
      console.log("Contact mount function 2");
      elem.style.transition = "1s ease";
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }

  componentWillUnmount(){
    console.log("unmounting contact");
    var elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 1;
    window.requestAnimationFrame(function() {
      // Now set a transition on the opacity
      elem.style.transition = "1s ease";
      // and set the opacity to 1
      elem.style.opacity = 0;
    });
  }

  render() {
    return (
      <div className="App" style={{background: "beige"}}>
        <div className="contact">
          <h1>Let us help you..</h1>
          <p>About us Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet placeat esse! Dolorem nemo tempora eos maxime explicabo assumenda voluptas necessitatibus omnis, odit, inventore dignissimos veniam perferendis incidunt, alias quidem!</p>
          <h3><Link to="/appointment">Book an estimate appointment with us!</Link></h3>
        </div>

        
      </div>
    );
  }
}

export default Contact;