import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'

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
        <Validation charLength={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;
