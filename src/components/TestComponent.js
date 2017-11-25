import React, { Component } from "react";
import ReactDOM from 'react-dom';


class TestComponent extends Component {

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });
  }

  componentWillUnmount(){
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 1;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 0;
    });
  }

 render() {
    return (
       <div className="page">
          <h1>TestComponent</h1>
          <p>Hello from a sub page!</p>
       </div>
     )
   }

}

export default TestComponent;