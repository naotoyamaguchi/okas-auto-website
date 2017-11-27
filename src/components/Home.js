import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
class Home extends Component {

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
       <div className="homepage">
            <div>
               <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quisquam quas, numquam quaerat optio, distinctio, magni suscipit facilis aspernatur ipsum animi ex sequi itaque voluptate! Dolorem, fugiat dolore tenetur optio.</h1>
            </div>
       </div>
     )
   }

}

export default Home;