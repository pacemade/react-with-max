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

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  };

  render() {
    const charsList = this.state.userInput.split('').map((char, index) => {
      return <Char
        ch={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>
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
