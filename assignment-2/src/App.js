import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    length: 0
  }

  countLengthHandler = () => {
    console.log("working");
  }

  render() {
    return (
      <div>
        <h1>Length of text: {this.state.length}</h1>
        <input
          type="text"
          onChange={() => this.countLengthHandler()} />
      </div>
    )
  }
}

export default App;
