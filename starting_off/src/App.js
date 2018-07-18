import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "what", age: 100},
      { name: "who", age: 1023},
      { name: "whey", age: 10}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "What", age: 10230},
        { name: "Who", age: 1023},
        { name: "Whey", age: 42410}
      ]
    })
    // DONT DO this.state.persons[0].name = "poopooo"
    // console.log('Was clicked!')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi its me and I am a React App</h1>
        <p>Works with two elements</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi it\'s me and I am a React App!!"))
  }
}

export default App;
