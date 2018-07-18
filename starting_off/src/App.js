import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi its me and I am a React App</h1>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi it\'s me and I am a React App!!"))
  }
}

export default App;
