import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "what", age: 100},
      { name: "who", age: 1023},
      { name: "whey", age: 10}
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi its me and I am a React App</h1>
        <p>Works with two elements</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show Names</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi it\'s me and I am a React App!!"))
  }
}

export default App;
