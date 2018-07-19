import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import './App.css';

class App extends Component {

  state = {
    username: "Deenee"
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <UserInput username={this.state.username} changed={this.changeUsernameHandler}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
