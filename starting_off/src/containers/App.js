import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState));
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] Inside getDerivedStateFromProps',
      nextProps,
      prevState
    );
    return prevState
  }

  getSnapshotBeforeUpdate(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] Inside getSnapshotBeforeUpdate',
      nextProps,
      prevState
    );
    return prevState
  }

  componentDidUpdate () {
    console.log('[App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: 'daffaf', name: "what", age: 100},
      { id: 'dfdafdf', name: "who", age: 1023},
      { id: 'dffdffdd', name: "whey", age: 10}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target .value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    })

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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
          appTitle={this.props.title} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi it\'s me and I am a React App!!"))
  }
}

export default withClass(App, classes.App);
