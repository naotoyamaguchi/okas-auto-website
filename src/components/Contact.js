import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {

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