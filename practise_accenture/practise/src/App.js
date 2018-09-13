import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: " "
  }

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput:updatedText});
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}
        />

    })



    return (
      <div>
        <h1>This is the length of the text: { this.state.userInput}</h1>
        <input type="text"
          onChange={this.inputChangeHandler}/>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>

    )
  }
}

export default App;
