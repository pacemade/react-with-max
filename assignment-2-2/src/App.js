import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  };

  render() {
    const charsList = this.state.userInput.split('').map(char => {
      return <Char
        ch={char}/>
    })

    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}/>
        <Validation charLength={this.state.userInput.length}/>
        {charsList}
      </div>
    );
  }
}

export default App;
