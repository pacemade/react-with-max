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


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 10230},
        { name: event.target.value, age: 1023},
        { name: "Whey", age: 42410}
      ]
    } )
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 10230},
        { name: "Who", age: 1023},
        { name: "Whey", age: 42410}
      ]
    })
    // DONT DO this.state.persons[0].name = "poopooo"
    // console.log('Was clicked!')
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi its me and I am a React App</h1>
        <p>Works with two elements</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Danny")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Deennee")}
          changed={this.nameChangeHandler} >My Hobbies: Chillin </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi it\'s me and I am a React App!!"))
  }
}

export default App;
