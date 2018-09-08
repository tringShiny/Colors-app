import React, { Component } from 'react';
import './colorBox.css';

class ColorBox extends Component {
    state = {
        colorName: "color",
        style: {
           background:'white'
        }
    };

    setColor = (colorID) => {
        colorID!==" " ? this.setState({colorName: colorID,style:{background:colorID}}) : this.setState({colorName: 'color',style:{background:'white'}}); 
    };

    render() {
      return (
          <div>
          <div style= {this.state.style} className="Box">
              <h2>{this.state.colorName}</h2>  
          </div>
          <div>
              <button onClick ={() => this.setColor("Red")}>Red</button>
              <button onClick={() =>this.setColor("Green")}>Green</button>
              <button onClick={() =>this.setColor("Blue")}>Blue</button>
              <button onClick={() =>this.setColor(" ")}>Clear</button>
          </div>
          </div>
      );
    }
}
export default ColorBox;