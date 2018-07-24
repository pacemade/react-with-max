import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}/>
          <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
